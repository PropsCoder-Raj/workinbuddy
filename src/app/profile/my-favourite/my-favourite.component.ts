import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { IonContent, IonToolbar, NavController } from '@ionic/angular';
import { UserService } from 'src/app/__helper/user.service';

@Component({
  selector: 'app-my-favourite',
  templateUrl: './my-favourite.component.html',
  styleUrls: ['./my-favourite.component.scss'],
})
export class MyFavouriteComponent implements OnInit {

  @ViewChild("toolbar", { static: false }) toolbar: IonToolbar;
  @ViewChild(IonContent) theContent: IonContent;

  footerHidden: boolean;
  venue= [];
  package= [];
  segmentValue = 'Venue';
  scalatonV = false;
  scalatonP = false;

  constructor(public renderer: Renderer2, public firestore: AngularFirestore, public auth: AngularFireAuth, public router: Router, public userS: UserService, public navCtrl: NavController) { }

  ngOnInit() {
    this.firestore.collection("favourite", ref => ref.where("uid", '==', this.userS.userUID).where("type", "==", "venue")).get().subscribe(result => {
      if (result.size > 0) {
        this.scalatonV = true;
        result.docs.map((docs: any) => {
          this.firestore.collection('venue', ref => ref.where("docId", '==', docs.data().venueId)).get().subscribe(result1 => {
            result1.docs.map((docs1: any) => {
              this.firestore.collection('venue').doc(docs1.id).collection('media').get().subscribe(result2 => {
                let service = [];
                result2.docs.map((data) => {
                  if (result2.size !== service.length) {
                    service.push(data.data());
                  }
                });
                this.venue.push({ data: docs1.data(), services: service });
                if(result.size === this.venue.length){
                  this.scalatonV = false;
                }
              });
            });
          });
        })
      }
    })

    this.firestore.collection("favourite", ref => ref.where("uid", '==', this.userS.userUID).where("type", "==", "package")).get().subscribe(result => {
      if (result.size > 0) {
        this.scalatonP = true;
        result.docs.map((docs: any) => {
          this.firestore.collection("packages",ref=> ref.where("docId","==", docs.data().packageId)).get().subscribe(result=>{
            if(result.size > 0){
              result.docs.map((docs:any)=>{
                docs.data().features.forEach(element => {
                  this.firestore.collection('featuresMaster', ref => ref.where("docId","==",element['docId'])).get().subscribe(result1 => {
                    let features = [];
                    result1.docs.map((data: any) => { 
                      if(result1.size !== features.length){
                        features.push({name: data.data().name});
                      }
                    });   
                    this.package.push({data: docs.data(), features: features});
                    if(result.size === this.package.length){
                      this.scalatonP = false;
                    }
                  });  
                });
              })
            }
          });
        })
      }
    })
  }

  packageDetails(docId){
    this.router.navigate(['/package-details'], {
      queryParams: {docId : docId}
    });
  }

  segmentChanged(ev: any) {
    this.segmentValue = ev.detail.value;
  }

  venueDetails(docId) {
    this.navCtrl.navigateForward('/venue/venue-details/' + docId);
  }

}

