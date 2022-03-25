import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/compat/app';
import { Router} from '@angular/router';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/__helper/user.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { HttpClient } from '@angular/common/http';


declare var gapi: any;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

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

  fbLogin: any;
  token: any;
  
  googleLoader = false;
  facebookLoader = false;

  constructor(public LoadingController: LoadingController, public platform: Platform, public router: Router, public toastController: ToastController, public auth: AngularFireAuth, public googlePLus: GooglePlus, public appC: AppComponent, public userS: UserService, public firestore: AngularFirestore, private fb: Facebook, public http: HttpClient) { }

  ngOnInit() {
  }

  clearFields(){
    this.sendOtp = false;
    this.number = null;
    this.otp = '';
    this.loadingSendOTP = false;
    this.loadingVirifyOTP = false;
  }


  signUp() {
    this.router.navigate(['/auth/signup']);
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

  async loginWithGoogle() {
    GoogleAuth.init();
    if (this.platform.is("android")) {
      this.googleLoader = true;
      let googleUser = await GoogleAuth.signIn();
      const credential = firebase.default.auth.GoogleAuthProvider.credential(googleUser.authentication.idToken);
      this.auth.signInAndRetrieveDataWithCredential(credential).then(res => {
        this.router.navigate(['/home']);
        this.googleLoader = false;
      });
    } else {
      this.googleLoader = true;
      this.auth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider()).then(success => {
        this.user = success.user;
        this.router.navigate(['/home']);
        this.googleLoader = false;
      }).catch(err => {
      });
    }
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

  verify_otp() {
    if (this.otp.length === 6) {
      this.loadingVirifyOTP = true;
      this.otpConfirmationResult.confirm(this.otp.toString())
        .then(async result => {
          this.userS.getData();
          this.appC.ngOnInit();
          setTimeout(() => {
            this.clearFields();
            this.loadingVirifyOTP = true;
            this.router.navigate(['/home']);
          }, 1000)
        })
        .catch(err => {
          this.loadingVirifyOTP = true;
        });
    } else {
      this.errorPresentToast("Enter OTP 6 digit number");
    }
  }

  send_otp() {
    let length = new String(this.number);
    if (this.number !== null) {
      this.firestore.collection("users", ref => ref.where("phoneNumber", "==", this.contryCode + this.number)).get().subscribe(result => {
        if (result.size > 0) {
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
        } else {
          this.errorPresentToast("This mobile number not register. Please! 1st signup");
        }
      })
    } else {
      this.errorPresentToast("Please! Enter Mobile Number");
    }
  }

  loginWithFacebook() {
    // TODO: Apply Validations and loader on complete sign in page

    this.fb.getLoginStatus().then((res) => {
      this.facebookLoader = true;
      if (res.status === 'connected') {
          // Already logged in to FB so pass credentials to provider (in my case firebase)
          let provider = firebase.default.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
          firebase.default.auth().signInWithCredential(provider).then((authToken) => {
            this.router.navigate(['/home']);
            this.facebookLoader = false;
          }).catch((err) => {
            this.errorPresentToast("Error logging into Facebook : " + err);
          });
      } else {
        this.fb.login(['public_profile', 'user_friends', 'email']).then((res: FacebookLoginResponse) => {
          if(res.status === 'connected'){
            const facebookCredential = firebase.default.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
            firebase.default.auth().signInWithCredential(facebookCredential).then((userResponse) => {
              this.router.navigate(['/home']);
              this.facebookLoader = false;
            });
          }
        }).catch(err => {
          this.facebookLoader = false;
          this.errorPresentToast("Error logging into Facebook : " + err);
        });
      }
    });
  }

}
