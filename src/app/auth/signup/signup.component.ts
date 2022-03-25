import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoadingController, Platform, ToastController } from '@ionic/angular';

import * as firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/__helper/user.service';
import * as $ from 'jquery';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {  PushNotifications, Token } from "@capacitor/push-notifications";

declare var gapi: any;


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  public number: number = null;
  public otp: String;
  sendOtp = false;
  recaptchaVerifire;
  otpConfirmationResult: firebase.default.auth.ConfirmationResult;
  phoneNumber = '';
  windowRef;

  loadingSendOTP = false;
  loadingVirifyOTP = false;
  user: any;
  contryCode = '+971';
  config = {
    length: 6,
    allowNumbersOnly: true,
    inputStyles: {
      'width': '35px',
      'height': '35px',
      'border-color': '#fc853b',
    }
  }

  userName = '';
  userEmail = '';
  tokenId = '';

  constructor(public LoadingController: LoadingController, public platform: Platform, public router: Router, public toastController: ToastController, public auth: AngularFireAuth, public googlePLus: GooglePlus, public appC: AppComponent, public userS: UserService, public firestore: AngularFirestore) { }

  ngOnInit() {
    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        PushNotifications.register();
      } else {
      }
    });
    PushNotifications.addListener('registration',
      (token: Token) => {
        this.tokenId = token.value;
    });    
  }

  clearFields(){
    this.sendOtp = false;
    this.number = null;
    this.userName = '';
    this.userEmail = '';
    this.otp = '';
    this.loadingSendOTP = false;
    this.loadingVirifyOTP = false;
  }

  signin() {
    this.router.navigate(['/auth/signin']);
  }

  onOtpChange(ev) {
    this.otp = ev;
  }

  upComming() {
    this.presentToast("Coming Soon");
  }

  async ionViewDidEnter() {
    this.recaptchaVerifire = await new firebase.default.auth.RecaptchaVerifier('recaptcha-container', { 'size': 'invisible' });
  }

  async ionViewDidLoad() {
    this.recaptchaVerifire = await new firebase.default.auth.RecaptchaVerifier('recaptcha-container', { 'size': 'invisible' });
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      mode: 'ios',
      duration: 2000,
    });
    toast.present();
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

  makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }

  verify_otp() {
    if (this.otp.length === 6) {
      this.loadingVirifyOTP = true;
      this.otpConfirmationResult.confirm(this.otp.toString())
        .then(async result => {
              this.firestore.collection("users", ref => ref.where("uid", '==', result.user.uid)).get().subscribe(resultUser => {
                if (resultUser.size === 0) {
                  const newId = this.firestore.createId();
                  let refCode = this.makeid(6);
                  this.firestore.collection('users').doc(newId).set({
                    docId: newId,
                    name: this.userName,
                    phoneNumber: result.user.phoneNumber,
                    provider: 'phone',
                    uid: result.user.uid,
                    address: '',
                    photoURL: "",
                    email: this.userEmail,
                    timestamp: new Date(),
                    token: this.tokenId,
                    referalCode: refCode,
                    balance: 0
                  }).then(res => {
                    this.userS.userName = this.userName;
                    this.userS.userEmail = this.userEmail;
                    this.userS.userPhotoUrl = "assets/img/profilePhoto.png";
                    this.userS.userProvider = 'phone';
                    this.userS.userPhoneNumber = result.user.phoneNumber;
                    this.userS.userUID = result.user.uid;
                    this.userS.userReferalCode = refCode;
                    setTimeout(() => {
                      this.successPresentToast("User Register");
                      this.loadingVirifyOTP = true;
                      this.clearFields();
                      this.router.navigate(['/home']);
                    }, 1000)
                  });
                } else {
                  this.loadingVirifyOTP = true;
                  this.errorPresentToast("Your Already Register");
                }
            });
        })
        .catch(err => {
          this.loadingVirifyOTP = true;
        });
    } else {
      this.errorPresentToast("Enter OTP 6 digit number");
    }
  }

  send_otp() {
    if (this.userName !== '' && this.userEmail !== '' && this.number !== null) {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(this.userEmail) == false) {
        this.errorPresentToast("Please! Enter valid email.");
      }else{
        this.loadingSendOTP = true;
        const num = this.contryCode + this.number;
        const appVerifier = this.recaptchaVerifire;
        this.auth.signInWithPhoneNumber(num, appVerifier)
          .then(result => {
            this.otpConfirmationResult = result;
            this.successPresentToast("OTP Send")
            this.sendOtp = true;
            this.loadingSendOTP = false;
          }).catch(err => {
            this.errorPresentToast("Something went wrong");
            this.loadingSendOTP = false;
          })
      }    
    } else {
      this.errorPresentToast("All fields medatory");
    }
  }

}
