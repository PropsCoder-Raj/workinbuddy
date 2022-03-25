
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonToolbar, ModalController, ToastController } from '@ionic/angular';
import { UserService } from '../../__helper/user.service';
import { environment } from 'src/environments/environment';
import { EditProfileComponent } from 'src/app/profile/profile/edit-profile/edit-profile.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  docId = '';
  public amount = 0;
  public amountWithFlatDiscount = 0;
  public amountWithFirstDiscountDiscount = 0;
  public amountFlatDiscount = 0;
  public amounFirstDiscountDiscount = 0;
  public flatDiscount = 0;
  public firstTimeDiscount = 0;
  public packageName = '';
  public packageValidity = 0;
  public checkIns = 0;
  public hours = 0;
  public firstUserStatus = false;
  public autoRenew = false;
  public userSelectedAutoRenew = false;

  public totalAmount = 0;
  public checked = true;
  public loader = false;
  public referralStatus = false;
  public referralCode = '';
  public referralDocId = '';
  public referralCodeDisount = 0;
  public referralCodeDisountAmount = 0;
  public referralCodeApplyDisountAmount = 0;
  public referralLoader = false;

  
  public couponsStatus = false;
  public couponsCode = '';
  public couponsDocId = '';
  public couponsCodeDisount = 0;
  public couponsCodeDisountAmount = 0;
  public couponsCodeApplyDisountAmount = 0;
  public couponsLoader = false;

  public userUID = '';

  referralAmount = 0;
  minPackageAmt = 0;
  maxReferLimit = 0;


  apiHeadersForPayment = { 'Authorization': 'sk_test_ce558eea-0c38-4759-800c-4f1402c6a7b5', 'Content-Type': 'application/json' };
  apiHeadersForToken = { 'Authorization': 'pk_test_9bd4de9b-1bbc-43ab-83b7-94bd24f21252', 'Content-Type': 'application/json' };
  addNewCard = false;
  payableAmount = 0;

  public cardHolderName = "Test Name";
  public cardNumber = '4242424242424242';
  public expiry_month = '06';
  public expiry_year = '2028';
  public cvv = '100';
  public saveCard = false;

  public userDetail: any;
  packageId = "";
  orderId = "";

  cardDetails = false;
  sourceId = "";
  cards: any = [];

  packagesDocId = '';
  couponsCodeDocId = '';
  loaderPaymentProccess = false;
  loaderWithCard = false;

  @ViewChild("toolbar", { static: false }) toolbar: IonToolbar;
  @ViewChild(IonContent) theContent: IonContent;

  constructor(public modalController: ModalController,public auth: AngularFireAuth, public firestore: AngularFirestore, public router: Router, public route: ActivatedRoute, public toastController: ToastController, public userS: UserService, public http: HttpClient) {
    this.loader = false;
    this.firestore.collection("settings").doc("config").get().subscribe((result: any) => {
      this.referralAmount = result.data().referralAmount;
      this.minPackageAmt = result.data().minPackageAmt;
      this.maxReferLimit = result.data().maxReferLimit;
    });
    
  }
  couponStatus(){
    this.couponsStatus != this.couponsStatus;
  }
  ngOnInit() {

    this.route.queryParams.subscribe((res) => {
      this.docId = res['docId'];
    });

    this.packageId = this.docId;

    this.firestore.collection("users", ref => ref.where("uid", '==', this.userS.userUID)).get().subscribe(result => {
      result.docs.map((docs: any) => {
        let data = docs.data();
        this.userDetail = data;
        this.cardHolderName = data.name;
        this.firestore.collection("users").doc(data.docId).collection("cards").valueChanges().subscribe(data => {
          this.cards = data;
        });
      });
    })

    this.firestore.collection('packages', ref => ref.where("docId", "==", this.docId)).get().subscribe(result => {
      result.docs.map((docs: any) => {
        let data = docs.data();
        this.autoRenew = data['autorenew'];
        this.amount = data['amount'];
        this.packageName = data['name'];
        this.packageValidity = data['validity'];
        this.checkIns = data['checkIns'];
        this.hours = data['hours'];
        let percentage = Number(this.amount) / 100;
        this.firestore.collection('userHistory', ref => ref.where("uid", '==', this.userS.userUID)).get().subscribe(result => {
          if (result.size === 0) {
            this.firstUserStatus = true;
            this.firstTimeDiscount = data['firstTimeDiscount'];
            if (Number(this.firstTimeDiscount) > 0) {
              this.amounFirstDiscountDiscount = Number(percentage) * this.firstTimeDiscount;
              this.amountWithFirstDiscountDiscount = Number(this.amount) - Number(this.amounFirstDiscountDiscount);
              this.totalAmount = this.amountWithFirstDiscountDiscount;
              this.payableAmount = this.totalAmount;
            }
          } else {
            this.firstUserStatus = false;
            this.flatDiscount = data['flatDiscount'];
            if (Number(this.flatDiscount) > 0) {
              this.amountFlatDiscount = Number(percentage) * this.flatDiscount;
              this.amountWithFlatDiscount = Number(this.amount) - Number(this.amountFlatDiscount);
              this.totalAmount = this.amountWithFlatDiscount;
              this.payableAmount = this.totalAmount;
            }
          }
        })
      });
    })
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: EditProfileComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  
  async success_PresentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      mode: 'ios',
      duration: 2000,
      color:'success'
    });
    toast.present();
  }

  async successPresentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      mode: 'ios',
      duration: 2000,
    });
    toast.present();
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

  couponsApply() {
    if (this.couponsCode !== '') {
      this.firestore.collection("coupons", ref => ref.where("couponcode", '==', this.couponsCode)).get().subscribe(result => {
        if (result.size > 0) {
          result.docs.map((docs: any) => {
            let data = docs.data();
            let today = new Date()
            let allowedusage = data.allowedusage;
            let validity = data.validity.toString();
            let index = validity.lastIndexOf("Days")
            let day = validity.slice(0, Number(index) - 1);

            let afterValidity = new Date(data.createdAt.toDate());
            afterValidity.setDate(afterValidity.getDate() + Number(day));

            if (Number(allowedusage) > 0) {
              if (Number(today.valueOf()) <= Number(afterValidity.valueOf())) {
                this.couponsLoader = true;
                let percentage = Number(this.amount) / 100;
                this.couponsDocId = docs.id;
                this.couponsCodeDocId = this.couponsDocId;
                this.couponsCodeDisount = data.percentage;
                this.couponsCodeDisountAmount = Number(percentage) * this.couponsCodeDisount;
                this.couponsCodeApplyDisountAmount = Number(this.totalAmount) - Number(this.couponsCodeDisountAmount);
                this.totalAmount = this.couponsCodeApplyDisountAmount;
                this.payableAmount = this.totalAmount;
                this.couponsLoader = false;
              } else {
                this.errorPresentToast("Coupon are expired.");
              }
            } else {
              this.errorPresentToast("Coupon are expired.");
            }
          })
        } else {
          this.errorPresentToast("Coupon Code Not Found");
        }
      });
    } else {
      this.errorPresentToast("Please! Enter Coupon code");
    }
  }

  referralApply(){
    
    if (this.referralCode !== '') {
      if(this.userS.userReferalCode !== this.referralCode){
        this.firestore.collection("users", ref => ref.where("referalCode", '==', this.referralCode)).get().subscribe(result => {
          if (result.size > 0) {
            this.firestore.collection("referralCodeUsage", ref=> ref.where("referalCode",'==', this.referralCode).where("userApplyUid",'==', this.userS.userUID)).get().subscribe(resultUserReferal => {
              if(resultUserReferal.size === 0){
                this.firestore.collection("referralCodeUsage", ref=> ref.where("referalCode",'==', this.referralCode)).get().subscribe(resultReferal => {
                  if(this.maxReferLimit >= resultReferal.size){
                    this.referralLoader = true;
                    this.referralCode = this.referralCode;
                    this.referralCodeDisountAmount = this.referralAmount;
                    this.referralCodeApplyDisountAmount = Number(this.totalAmount) - Number(this.referralCodeDisountAmount);
                    this.totalAmount = this.referralCodeApplyDisountAmount;
                    this.payableAmount = this.totalAmount;
                    this.referralLoader = false;
                  }else{
                    this.errorPresentToast("Referral Code Expired.");
                  }
                });  
              }else{
                this.errorPresentToast("Referral Code Expired.");
              }
            });
          } else {
            this.errorPresentToast("Referral Code Not Found");
          }
        });
      }else{
        this.errorPresentToast("You cannot use your referral code");
      }  
    } else {
      this.errorPresentToast("Please! Enter Referral code");
    }
  }

  checkoutPayment() {
    if(this.userS.userName !== '' && this.userS.userEmail !== '' && this.userS.userPhoneNumber !== ''){
      this.cardValidation();
    }else{
      this.presentModal();
    }
  }

  getCardDetails(card){
    this.sourceId = card.srcId;
  }



  
  paymentWithToken(token) {
    this.generateOrderId();
    let paymentAmt = Number(this.payableAmount) * 100;

    this.http.post(environment.paymentUrl + "payments",
      {
        "source":
        {
          "token": token,
          "type": "token"
        },
        "customer": {
          "email": this.userS.userEmail,
          "name": this.userS.userName
        },
        "currency": "AED",
        "amount":  paymentAmt,
        "reference": this.orderId
      }, { 'headers': this.apiHeadersForPayment }).subscribe(
        (result) => {
          let response_code = result['response_code'];
          let response_summary = result['response_summary'];
          if (response_code === "10000") {
            let paymentId = result['id'];
            let sourceId = result['source']['id'];

            let fid = this.firestore.createId();
            // TODO: Check Card is available in db if yes : update details
            this.firestore.collection("users").doc(this.userDetail.docId).collection("cards", ref => ref.where("number", '==', this.cardNumber)).get().subscribe(result => {
              if (result.size === 0 && this.saveCard === true) {
                this.firestore.collection("users").doc(this.userDetail.docId).collection("cards").doc(fid).set({ docId: fid, number: this.cardNumber, mm: this.expiry_month, yyyy: this.expiry_year, cvv: this.cvv, srcId: sourceId, cardHolderName: this.cardHolderName });
              }
            })
            // TODO: Save transaction details and active package
            this.createUserHistory(paymentId);
          } else {
            this.errorPresentToast(response_summary);
          }
        }, (error) => {
          this.errorPresentToast("Error in Capturing Payment");
        }
      );
  }

  paymentWithId() {
    this.loader = true;
    let paymentAmt = Number(this.payableAmount) * 100;
    this.loaderWithCard = true;
    this.generateOrderId();

    this.http.post(environment.paymentUrl + "payments",
      {
        "source":
        {
          "id": this.sourceId,
          "type": "id"
        },
        "customer": {
          "email": this.userDetail.email,
          "name": this.userDetail.name
        },
        "currency": "AED",
        "amount": paymentAmt,
        "reference": this.orderId
      }, { 'headers': this.apiHeadersForPayment }).subscribe(result => {
        let response_code = result['response_code'];
        let response_summary = result['response_summary'];
        if (response_code === "10000") {
          let paymentId = result['id'];
          this.createUserHistory(paymentId);
        } else {
          this.errorPresentToast(response_summary);
        }
      });
  }

  startPaymentAndSaveCard() {
    this.loader = true;
    this.http.post(environment.paymentUrl + "tokens", {
      "number": this.cardNumber,
      "expiry_month": this.expiry_month,
      "expiry_year": this.expiry_year,
      "cvv": this.cvv,
      "type": "card",
      "name": this.cardHolderName
    }, { 'headers': this.apiHeadersForToken }).subscribe(
      (result) => {
        this.paymentWithToken(result['token']);
      }, (error) => {
        this.loader = false;
        this.errorPresentToast("Invalid Card Details");
      }
    );
  }


  cardValidation() {
    
    this.payableAmount = this.totalAmount;

  
    // TODO: Need Card Validition
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();

    let cardNumber = new String(this.cardNumber);
    let expiry_month = new String(this.expiry_month);
    let expiry_year = new String(this.expiry_year);
    let cvv = new String(this.cvv);

    if (this.cardNumber !== '' && this.expiry_month !== '' && this.expiry_year !== '' && this.cvv !== '') {
      if (this.cardNumber.length === 16) {
        if (this.expiry_month.length === 2) {
          if (Number(this.expiry_month) > 0 && Number(this.expiry_month) <= 12) {
            if (this.expiry_year.length === 4) {
              if (Number(this.expiry_year) === Number(year)) {
                if (Number(this.expiry_month) >= (Number(month) + 1)) {
                  if (cvv.length === 3) {
                    if(this.sourceId !== '' && this.sourceId !== null && this.sourceId !== undefined){
                      this.paymentWithId();
                    }else{
                      this.startPaymentAndSaveCard();
                    }
                  } else {
                    this.errorPresentToast("CVV must be 3 digit");
                  }
                } else {
                  this.errorPresentToast("Expiry Month invalid");
                }
              } else if (Number(this.expiry_year) > Number(year)) {
                if (cvv.length === 3) {
                  if(this.sourceId !== '' && this.sourceId !== null && this.sourceId !== undefined){
                    this.paymentWithId();
                  }else{
                    this.startPaymentAndSaveCard();
                  }
                } else {
                  this.errorPresentToast(this.cvv + "CVV must be 3 digit " + this.cvv.length);
                }
              } else {
                this.errorPresentToast("Expiry Year invalid");
              }
            } else {
              this.errorPresentToast("Expiry Year must be 4 digit");
            }
          } else {
            this.errorPresentToast("Expiry Month Invalid");
          }
        } else {
          this.errorPresentToast("Expiry Month must be 2 digit");
        }
      } else {
        this.errorPresentToast("Card number must be 16 digit");
      }
    } else {
      this.errorPresentToast("All fields mendatory");
    }
  }


  createUserHistory(paymentId) {
    let packageValidity = '';
    let checkIns = 0;
    let packageName = '';
    this.firestore.collection('packages', ref => ref.where("docId", "==", this.packageId)).get().subscribe(result => {
      result.docs.map((docs: any) => {
        let data = docs.data();
        packageName = data['name'];
        packageValidity = data['validity'];
        checkIns = data['checkIns'];
      });
    });

    let today = new Date()
    let tomorrow = new Date()
    let yeasterday = new Date()
    tomorrow.setDate(today.getDate() + 1);
    yeasterday.setDate(today.getDate() - 1);

    let fid = this.firestore.createId();
    this.firestore.collection("userHistory").doc(fid).set({ amount: this.payableAmount, docId: fid, uid: this.userDetail.uid, type: "package", packageId: this.packageId, orderId: this.orderId, paymentId: paymentId, timestamp: new Date() }).then(res => {

      if(this.autoRenew == true){
        let autoRenewalDate = new Date();
        autoRenewalDate.setDate( today.getDate() + Number( Number(packageValidity) + 1 ) );
        const newId = this.firestore.createId();
        this.firestore.collection("autoRenewals").doc(newId).set({
          packageId: this.packageId,
          uid: this.userS.userUID,
          autoRenewalDate: autoRenewalDate,
          timestamp: new Date(),
          docId: newId
        }).then(() => {
        });
      }

      if (this.referralCode !== '') {
        this.firestore.collection("users", ref => ref.where("referalCode", '==', this.referralCode)).get().subscribe(resultUser => {
          resultUser.docs.map((docs: any) => {
            let newid = this.firestore.createId();
            this.firestore.collection('referralCodeUsage').doc(newid).set({
              docId: newid,
              timestamp: new Date(),
              packageId: this.packageId,
              userApplyUid: this.userDetail.uid,
              uid: docs.data().uid,
              referalCode: this.referralCode
            }).then(res => {
              let balance = Number(docs.data().balance) + Number(this.referralAmount);
              this.firestore.collection("users").doc(docs.id).update({ balance: balance }).then(() =>{
                let newId = this.firestore.createId();
                this.firestore.collection('walletHistory').doc(newId).set({
                  docId: newId,
                  timestamp: new Date(),
                  packageId: this.packageId,
                  userApplyUid: this.userDetail.uid,
                  uid: docs.data().uid,
                  referalCode: this.referralCode,
                  type: "referalCodeApply",
                  amount: this.referralAmount,
                  transactionType: 'deposite'
                }).then(res => {
                });
              });
            });
          });
        });
      }

      if (this.couponsCodeDocId !== '') {
        let newid = this.firestore.createId();
        this.firestore.collection('couponCodeUsage').doc(newid).set({
          docId: newid,
          timestamp: new Date(),
          packageId: this.packageId,
          uid: this.userDetail.uid,
          couponId: this.couponsCodeDocId
        }).then(res => {
          this.firestore.collection('coupons', ref => ref.where("docId", '==', this.couponsCodeDocId)).get().subscribe(result => {
            result.docs.map((docs: any) => {
              let data = docs.data();
              let allowedusage = data.allowedusage;
              allowedusage = Number(allowedusage) - 1;
              this.firestore.collection('coupons').doc(this.couponsCodeDocId).update({ allowedusage: allowedusage }).then(() => {
              });
            });
          });
        });
      }
      this.firestore.collection('userActivePackage', ref => ref.where("uid", '==', this.userDetail.uid)).get().subscribe(result => {
        if (result.size === 0) {
          let expireDate = new Date();
          expireDate.setDate( today.getDate() + Number( Number(packageValidity) - 1 ) );
          const newId_ = this.firestore.createId();
          this.firestore.collection('userActivePackage').doc(newId_).set({
            docId: newId_,
            timestamp: new Date(),
            packageId: this.packageId,
            amount: this.payableAmount,
            validity: packageValidity,
            availableCheckins: checkIns,
            uid: this.userDetail.uid,
            expireDate: expireDate
          }).then(res => {

            this.loader = false;
            this.loaderWithCard = false;
            this.router.navigate(['/home']);
            this.success_PresentToast(`Your ` + packageName + ` Package Activated`)
          });
        } else {
          result.docs.map(docs => {
            this.firestore.collection('userActivePackage').doc(docs.id).delete().then(res => {
              let expireDate = new Date();
              expireDate.setDate( today.getDate() + Number( Number(packageValidity) - 1 ) );
              const newId_ = this.firestore.createId();
              this.firestore.collection('userActivePackage').doc(newId_).set({
                docId: newId_,
                timestamp: new Date(),
                packageId: this.packageId,
                amount: this.payableAmount,
                validity: packageValidity,
                availableCheckins: checkIns,
                uid: this.userDetail.uid,
                expireDate: expireDate
              }).then(res => {
                this.loader = false;
                this.loaderWithCard = false;
                this.router.navigate(['/home']);
                this.success_PresentToast(`Your ` + packageName + ` Package Activated`)
              });
            });
          });
        }
      })
    });

  }

  generateOrderId() {
    this.orderId = Math.random().toString(36).slice(2);
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

