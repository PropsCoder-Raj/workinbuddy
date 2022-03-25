import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonToolbar, ToastController } from '@ionic/angular';
import { UserService } from '../../__helper/user.service';
import * as $ from "jquery";

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.scss'],
})
export class PackageDetailsComponent implements OnInit {

  public docId = '';
  
  public amount = 0;
  public amountWithDiscount = 0
  public flatDiscount = 0;
  public packageName = '';
  public packageValidity = '';
  public checkIns = 0;
  public hours = 0;
  public features = [];
  public beverage = [];
  public information = '';

  
  @ViewChild("toolbar", {static: false}) toolbar: IonToolbar;
  @ViewChild(IonContent) theContent: IonContent;

  constructor(public route: ActivatedRoute,public firestore: AngularFirestore, public router: Router, public userS: UserService, public toastController: ToastController) { }

  ngOnInit() {
    this.features = [];
    this.route.queryParams.subscribe((res) => {
      this.docId = res['docId'];
    });

    this.firestore.collection('packages', ref => ref.where("docId","==",this.docId)).get().subscribe(result =>{
      result.docs.map((docs:any)=>{
        let data = docs.data();
        this.amount = data['amount'];
        this.flatDiscount = data['flatDiscount'];
        if(Number(this.flatDiscount) > 0){
          let percentage = Number(this.amount) / 100;
          let disocunt = Number(percentage) * this.flatDiscount;
          this.amountWithDiscount = Number(this.amount) - Number(disocunt);
        }
        this.packageName = data['name'];
        this.packageValidity = data['validity'];
        this.checkIns = data['checkIns'];
        this.hours = data['hours'];
        
        this.information = data['information'];
        let flength = data['features'].length;
        if( flength > 0 ){
          data['features'].forEach(element => {
            this.firestore.collection('featuresMaster', ref => ref.where("docId","==",element['docId'])).get().subscribe(result1=>{
                result1.docs.map((docs1:any)=>{
                if(this.features.length != Number(flength)){
                  this.features.push(docs1.data());
                }
              });
            });  
          });
        }

        if(data['free_beverages'] !== undefined && data['free_beverages'] !== null){
          let blength = data['free_beverages'].length;
          if(blength > 0){
            data['free_beverages'].forEach(element => {
              this.firestore.collection('beverageMaster', ref => ref.where("docId","==",element['value'])).get().subscribe(result1=>{
                  result1.docs.map((docs1:any)=>{
                  if(this.beverage.length != Number(blength)){
                    this.beverage.push(docs1.data());
                  }
                });
              });  
            });
          }
        }else{
        }
      });  
    })

    this.firestore.collection("favourite", ref => ref.where("uid", '==', this.userS.userUID).where("packageId", '==', this.docId)).get().subscribe(result => {
      if (result.size > 0) {
        $('#likeSection').hide();
        $('#unlikeSection').show();

        $('#unlikeIcon').addClass("animate__animated animate__jackInTheBox");
        $('#likeIcon').removeClass("animate__animated animate__jackInTheBox");
      } else {

        $('#unlikeSection').hide();
        $('#likeSection').show();

        $('#likeIcon').addClass("animate__animated animate__jackInTheBox");
        $('#unlikeIcon').removeClass("animate__animated animate__jackInTheBox");
      }
    })
  }

  like() {
    this.firestore.collection("favourite", ref => ref.where("uid", '==', this.userS.userUID).where("packageId", '==', this.docId)).get().subscribe(result => {
      if (result.size === 0) {
        const newId = this.firestore.createId()
        this.firestore.collection("favourite").doc(newId).set({
          docId: newId,
          type: 'package',
          uid: this.userS.userUID,
          packageId: this.docId
        }).then(res => {
          $('#likeSection').hide();
          $('#unlikeSection').show();

          $('#unlikeIcon').addClass("animate__animated animate__jackInTheBox");
          $('#likeIcon').removeClass("animate__animated animate__jackInTheBox");
          this.successPresentToast("Added to favourite list");
        });
      }
    })
  }

  unlike() {
    this.firestore.collection("favourite", ref => ref.where("uid", '==', this.userS.userUID).where("packageId", '==', this.docId)).get().subscribe(result => {
      if (result.size > 0) {
        result.docs.map((docs) => {
          this.firestore.collection("favourite").doc(docs.id).delete().then(res => {
            $('#unlikeSection').hide();
            $('#likeSection').show();

            $('#likeIcon').addClass("animate__animated animate__jackInTheBox");
            $('#unlikeIcon').removeClass("animate__animated animate__jackInTheBox");
          });
        });
      }
    })
  }

  async successPresentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      mode: 'ios',
      duration: 2000
    });
    toast.present();
  }

  ionViewWillEnter(){
  }

  checkout(){
    this.router.navigate(['/package-details/checkout'], {
      queryParams: {docId : this.docId}
    });
  }

  onScroll(event) {
    this.theContent.ionScroll.subscribe((res)=>{
      if(res.detail.scrollTop === 0){
        this.toolbar.color = 'transparent';
      }else{
        this.toolbar.color = 'white';
      }
    })
  }

}
