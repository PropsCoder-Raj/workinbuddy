import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/__helper/user.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-referal-code',
  templateUrl: './referal-code.component.html',
  styleUrls: ['./referal-code.component.scss'],
})
export class ReferalCodeComponent implements OnInit {

  historyStatus = false;
  historyArr = [];
  skeletonStatus = false;

  constructor(private socialSharing: SocialSharing, public firestore: AngularFirestore, public userS: UserService, public toastController: ToastController) { }
  referralAmount = 0;
  ngOnInit() {
    this.firestore.collection("settings").doc("config").valueChanges().subscribe((data:any)=>{
      this.referralAmount = data.referralAmount;
    });


    this.firestore.collection('walletHistory', ref => ref.orderBy("timestamp", "desc").where("uid", '==', this.userS.userUID)).get().subscribe(result => {
      if(result.size > 0){
        this.skeletonStatus = true;
        result.docs.map((docs: any) => {
          let data = docs.data();
          let userApplyUid = data.userApplyUid;
          if(data.type === 'referalCodeApply'){
            this.firestore.collection("users", ref=> ref.where('uid', '==', userApplyUid)).valueChanges().subscribe(res=>{
              if(res.length > 0){
                this.historyStatus = false;
                this.historyArr.push({ data: data, userData: res[0] });
                this.skeletonStatus = false;
              } else {
                this.skeletonStatus = false;
              }
            });
          } else {
            this.skeletonStatus = false;
          }
        })
      } else {
        this.skeletonStatus = false;
      }
    });
  }

  share(){
    this.socialSharing.share("I’m inviting you to use Workinbuddy. Here’s my code ( " + this.userS.userReferalCode + " )");
  }

  copyMessage(val) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.presentToast("Referral Code Copied!")
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      mode: 'ios'
    });
    toast.present();
  }

}
