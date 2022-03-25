import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/__helper/user.service';


@Component({
  selector: 'app-auto-renewal-history',
  templateUrl: './auto-renewal-history.component.html',
  styleUrls: ['./auto-renewal-history.component.scss'],
})
export class AutoRenewalHistoryComponent implements OnInit {

  historyStatus = false;
  historyArr = [];
  skeletonStatus = false;
  loader = false;

  constructor(public toastController: ToastController ,public auth: AngularFireAuth, public firestore: AngularFirestore, public router: Router, public userS: UserService) { }

  ngOnInit() {
    this.firestore.collection('autoRenewals', ref => ref.orderBy("timestamp", "desc").where("uid", '==', this.userS.userUID).limit(50)).get().subscribe(result => {
      if (result.size > 0) {
        this.skeletonStatus = true;
        result.docs.map((docs: any) => {
          let data = docs.data();
          this.firestore.collection("packages",ref=> ref.where("docId","==", data.packageId)).get().subscribe(result=>{
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
                    this.historyArr.push({data: data, packageData: docs.data(), features: features});
                    if (result.size === this.historyArr.length) {
                      this.skeletonStatus = false;
                    }
                  });  
                });
              })
            }
          });  
        })
      }
    });
  }

  async errorPresentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      mode: 'ios',
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }

  delete(docId){
    this.loader = true;
    this.firestore.collection('autoRenewals').doc(docId).delete().then(res=>{
      this.loader = false;
      this.errorPresentToast("Cancel Auto Renewal");
      this.router.navigate(['/profile']);
    });
  }

}
