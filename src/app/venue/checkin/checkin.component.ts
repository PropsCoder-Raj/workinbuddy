import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonToolbar, Platform } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { LoadingController } from '@ionic/angular';
import { toastController } from '@ionic/core';
import { UserService } from 'src/app/__helper/user.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss'],
})
export class CheckinComponent implements OnInit {


  @ViewChild("toolbar", { static: false }) toolbar: IonToolbar;
  @ViewChild(IonContent) theContent: IonContent;
  venuId = '';
  packageId = '';

  qrScnnerText = '';

  // package details
  public amount = 0;
  public amountWithDiscount = 0
  public flatDiscount = 0;
  public packageName = '';
  public packageValidity = '';
  public checkIns = 0;
  public checkInsLeft = 0;
  public hours = 0;
  public features = [];
  public featuresVenue = [];
  public information = '';

  public venueName = '';
  public loadingText = '';
  public todayDate = new Date();
  public todate : any;
  public status = false;
  public qrstatus = true;
  public checkinStatus = true;
  public validityStatus = true;
  public checkinsStatusNumber = 0;
  public wifiPassword = '';
  public wifiPasswordHideArr = [];
  public wifiPasswordHideStatus = true;
  public wifiSSID = '';
  public checkinsAlready = false;



  address = '';
  aboutVenue = '';
  starsCount = 0;
  mediaArr = [];
  reviews = [];
  backButtonSubscription: any;
  backdropVisible = false;
  qrScnText="";

  constructor(private changeDetector: ChangeDetectorRef ,public platform: Platform ,public loadingController: LoadingController, public route: ActivatedRoute, public auth: AngularFireAuth, public firestore: AngularFirestore, public router: Router, public userS: UserService) { }

  toggleBackdrop(isVisible){
    this.backdropVisible = isVisible;
    this.changeDetector.detectChanges();
  }

  ngOnInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(async () => {
    });

    this.loadingText = 'Checking...';
    this.presentLoading();
    this.route.queryParams.subscribe((res) => {
      this.venueName = res['text'];
    });


    this.firestore.collection("venue", ref => ref.where("name", "==", this.venueName)).get().subscribe(result => {
      if (result.size > 0) {
        result.docs.map((docs: any) => {
          let data = docs.data();
          this.venuId = docs.id;
          this.address = data['address'];
          this.aboutVenue = data['about_venue'];
          this.wifiPassword = data['wifi_password'];
          this.wifiSSID = data['wifi_ssid'];
          let flength = data['services_available'].length;
          if (flength > 0) {
            data['services_available'].forEach(element => {
              this.firestore.collection('servicesMaster', ref => ref.where("docId", "==", element['value'])).get().subscribe(result1 => {
                result1.docs.map((docs1: any) => {
                  if (this.features.length != Number(flength)) {
                    this.featuresVenue.push(docs1.data());
                  }
                });
              });
            });
          }
          let i = 0;
          while (i < this.wifiPassword.length) {
            this.wifiPasswordHideArr.push('*');
            i++;
          }
          this.checkIn();
        })
      } else {
        this.qrstatus = false;
      };
    })
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      duration: 2000,
      mode: 'ios'
    });
    await loading.present();
  }



  checkIn() {
    let today = new Date()
    let tomorrow = new Date()
    let yeasterday = new Date()
    tomorrow.setDate(today.getDate() + 1);
    yeasterday.setDate(today.getDate() - 1);

    this.firestore.collection("userActivePackage", ref => ref.where("uid", "==", this.userS.userUID)).get().subscribe(result1 => {
      if (result1.size > 0) {
        result1.docs.map((docs: any) => {
          let data = docs.data();
          let afterValidity = new Date(data.timestamp.toDate());
          afterValidity.setDate(today.getDate() + Number(data.validity));
          this.checkInsLeft = data.availableCheckins;
          if (Number(today.valueOf()) <= Number(afterValidity.valueOf())) {
            if (this.checkInsLeft > 0) {
              this.loadingController.dismiss();
              this.firestore.collection("packages", ref => ref.where("docId", "==", data['packageId'])).get().subscribe(resultPackage => {
                resultPackage.docs.map((docs: any) => {
                  let data1 = docs.data();
                  this.amount = data1['amount'];
                  this.checkIns = data1['checkIns'];
                  this.flatDiscount = data1['flatDiscount'];
                  if (Number(this.flatDiscount) > 0) {
                    let percentage = Number(this.amount) / 100;
                    let disocunt = Number(percentage) * this.flatDiscount;
                    this.amountWithDiscount = Number(this.amount) - Number(disocunt);
                  }
                  this.packageName = data1['name'];
                  this.packageValidity = data1['validity'];
                  this.hours = data1['hours'];

                  this.information = data1['information'];
                  let flength = data1['features'].length;
                  if (flength > 0) {
                    data1['features'].forEach(element => {
                      this.firestore.collection('featuresMaster', ref => ref.where("docId", "==", element['docId'])).get().subscribe(result1 => {
                        result1.docs.map((docs1: any) => {
                          if (this.features.length != Number(flength)) {
                            this.features.push(docs1.data());
                          }
                        });
                      });
                    });
                  }
                });
              });

              this.firestore.collection("userCheckins", ref => ref.where("timestamp", "<", tomorrow).where("timestamp", ">", yeasterday).where("uid", '==', this.userS.userUID).where("venueId", "==", this.venuId)).get().subscribe(result => {
                this.status = true;
                if (result.size === 0) {
                  this.checkinsAlready = false;
                  this.todate = this.todayDate;
                  this.firestore.collection("userActivePackage", ref => ref.where("uid", "==", this.userS.userUID)).get().subscribe(result1 => {
                    if (result1.size > 0) {
                      result1.docs.map((docs: any) => {
                        const newId = this.firestore.createId();
                        this.firestore.collection("userCheckins").doc(newId).set({
                          docId: newId,
                          uid: this.userS.userUID,
                          timestamp: this.todayDate,
                          packageId: docs.id,
                          venueId: this.venuId,
                          status: 0
                        }).then(res => {
                          this.checkinsStatusNumber = 0;
                          let interval = setInterval(() =>{
                            this.firestore.collection("userCheckins", ref => ref.where("docId", "==", newId).where("status",'==', 1)).get().subscribe((resUserCheck) => {
                              if(resUserCheck.size > 0){
                                clearInterval(interval);
                                this.checkinsStatusNumber = 1;
                              }
                            })
                            
                            this.firestore.collection("userCheckins", ref => ref.where("docId", "==", newId).where("status",'==', 2)).get().subscribe((resUserCheck) => {
                              if(resUserCheck.size > 0){
                                clearInterval(interval);
                                this.checkinsStatusNumber = 2;
                              }
                            })
                          });
                        });
                      });
                    }
                  });
                }else{
                  this.checkinsAlready = true;
                  this.todate = docs.data().timestamp.toDate();
                  result.docs.map((docs: any) => {
                    if(docs.data().status === 1){
                      this.checkinsStatusNumber = 1;
                    }else if(docs.data().status === 2){
                      this.checkinsStatusNumber = 2;
                    }else if(docs.data().status === 0){
                      this.checkinsStatusNumber = 0;
                      let interval = setInterval(() =>{
                        this.firestore.collection("userCheckins", ref => ref.where("docId", "==", docs.data().docId).where("status",'==', 1)).get().subscribe((resUserCheck) => {
                          if(resUserCheck.size > 0){
                            clearInterval(interval);
                            this.checkinsStatusNumber = 1;
                          }
                        })
                        
                        this.firestore.collection("userCheckins", ref => ref.where("docId", "==", docs.data().docId).where("status",'==', 2)).get().subscribe((resUserCheck) => {
                          if(resUserCheck.size > 0){
                            clearInterval(interval);
                            this.checkinsStatusNumber = 2;
                          }
                        })
                      });
                    }
                  });
                  // this.checkinsStatusNumber = 3;
                }
              });
            } else {
              this.loadingController.dismiss();
              this.checkinStatus = false;
            }
          } else {
            this.loadingController.dismiss();
            this.validityStatus = false;
          }
        });
      } else {
        this.loadingController.dismiss();
        this.validityStatus = false;
      }
    });
    
  }

  onScroll(event) {
    this.theContent.ionScroll.subscribe((res) => {
      if (res.detail.scrollTop === 0) {
        this.toolbar.color = 'transparent';
      } else {
        this.toolbar.color = 'white';
      }
    })
  }

}
