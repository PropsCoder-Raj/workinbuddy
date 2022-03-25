import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/__helper/user.service';
import { WindowService } from 'src/app/__helper/window.service';
declare var window: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {

  loader = false;
  subject = '';

  constructor(public firestore: AngularFirestore, public userS: UserService, public toastController: ToastController, public router: Router) {
  }

  ionViewWillEnter(){
    try{
      let str = document.getElementById('chatbot-chat').style.display;
      if(str === 'none'){
        document.getElementById('chatbot-chat').style.display = 'block';
      }
    }catch{
      
      window.__be = window.__be || {};
      window.__be.id = "617b973c825682000749dc94";
      (function() {
          var be = document.createElement('script'); be.type = 'text/javascript'; be.async = true;
          be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(be, s);
      })();
    }
  }

  ngOnInit() {}

  closeChatBot(){
    document.getElementById('chatbot-chat').style.display = 'none';
  }

  
  async successPresentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      mode: 'ios',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  async errorPresentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      mode: 'ios',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }

  
  submit(){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(this.userS.userName !== '' && this.userS.userEmail !== '' && this.userS.userPhoneNumber !== '' && this.subject !== ''){
      if(re.test(this.userS.userEmail) == false){
        this.errorPresentToast("User Email not valid");
      }else{
        this.loader = true;
        const newId = this.firestore.createId();
        this.firestore.collection("contactRequest").doc(newId).set({
          docId: newId,
          userName: this.userS.userName,
          userEmail: this.userS.userEmail,
          userMobileNumber: this.userS.userPhoneNumber,
          subject: this.subject,
          uid: this.userS.userUID,
          timestamp: new Date(),
          status: 0
        }).then(res=>{
          this.closeChatBot();
          this.loader = false;
          this.successPresentToast("Request Send");
          this.router.navigate(['/home']);

          this.firestore.collection("users").doc(this.userS.userDocId).update({
            name: this.userS.userName,
            email: this.userS.userEmail,
            phoneNumber: this.userS.userPhoneNumber
          })
        });
      }
    }else{
      this.errorPresentToast("All fields mendatory");
    }
  }

}
