import { ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MenuController, AlertController, Platform} from '@ionic/angular';
import {Router} from '@angular/router';
import {StatusBar} from "@ionic-native/status-bar/ngx";
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {UserService} from './__helper/user.service';
import {Geolocation} from "@ionic-native/geolocation/ngx";
import {PluginListenerHandle} from '@capacitor/core';

import {GoogleAuth} from '@codetrix-studio/capacitor-google-auth';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  name = 'User';
  photoURL = '';
  lastTimeBackPress: number = 0;
  timePeriodToExit: number = 2000;
  backdropVisible = false;
  activeCheckins = false;
  
  networkListener: PluginListenerHandle;
  

  constructor(public changeDetector: ChangeDetectorRef, private menu: MenuController, private platform: Platform, private alertController: AlertController, private router: Router, private statusBar: StatusBar, private angularAuth: AngularFireAuth, private firestore: AngularFirestore, public userS: UserService, private geolocation: Geolocation, public firstore: AngularFirestore) {
    this.initializeApp();

  }

  toggleBackdrop(isVisible) {
    this.backdropVisible = isVisible;
    this.changeDetector.detectChanges();
  }

  navigate(name) {
    this.router.navigate(['/' + name]);
  }

  async ngOnInit() {

    setTimeout(() => {
      let today = new Date()
      let tomorrow = new Date()
      let yeasterday = new Date()
      tomorrow.setDate(today.getDate() + 1);
      yeasterday.setDate(today.getDate() - 1);
      this.firestore.collection("userCheckins", ref=> ref.where("timestamp", "<", tomorrow).where("timestamp", ">", yeasterday).where("uid", '==', this.userS.userUID)).get().subscribe(result => {
        if (result.size > 0) {
          this.activeCheckins = true;
        }else{
          this.activeCheckins = false;
        }
      });
    }, 2000)

    this.geolocation.getCurrentPosition();

  }


  logout() {
    this.angularAuth.signOut().then(res => {
      this.router.navigate(['/auth/signin']);
      this.userS.userAge = '';
      this.userS.userCountry = '';
      this.userS.userDob = '';
      this.userS.userDocId = '';
      this.userS.userEmail = '';
      this.userS.userGender = '';
      this.userS.userName = '';
      this.userS.userPhoneNumber = '';
      this.userS.userPhotoUrl = '';
      this.userS.userProvider = '';
      this.userS.userReferalCode = '';
      this.userS.userUID = '';
    });
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      // await SplashScreen.hide();
      if(this.platform.is("android") || this.platform.is("ios")){
        GoogleAuth.init();
      }
      
      this.statusBar.backgroundColorByHexString('#FF6000');
      this.statusBar.styleLightContent();
    });

  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm !',
      message: 'Confirm to Exit App !',
      mode: 'ios',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {}
      }, {
        text: 'Exit',
        handler: () => {
          navigator["app"].exitApp();
        }
      }]
    });
    await alert.present();
  }

  closeFirst() {
    this.menu.close('first');
  }
}
