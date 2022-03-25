(self["webpackChunkworkinbuddy"] = self["webpackChunkworkinbuddy"] || []).push([["src_app_package_package_module_ts"],{

/***/ 267:
/*!********************************************************!*\
  !*** ./src/app/package/checkout/checkout.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutComponent": () => (/* binding */ CheckoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_checkout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./checkout.component.html */ 6266);
/* harmony import */ var _checkout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.component.scss */ 1041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _helper_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../__helper/user.service */ 5875);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_profile_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/profile/profile/edit-profile/edit-profile.component */ 7748);












let CheckoutComponent = class CheckoutComponent {
    constructor(modalController, auth, firestore, router, route, toastController, userS, http) {
        this.modalController = modalController;
        this.auth = auth;
        this.firestore = firestore;
        this.router = router;
        this.route = route;
        this.toastController = toastController;
        this.userS = userS;
        this.http = http;
        this.docId = '';
        this.amount = 0;
        this.amountWithFlatDiscount = 0;
        this.amountWithFirstDiscountDiscount = 0;
        this.amountFlatDiscount = 0;
        this.amounFirstDiscountDiscount = 0;
        this.flatDiscount = 0;
        this.firstTimeDiscount = 0;
        this.packageName = '';
        this.packageValidity = 0;
        this.checkIns = 0;
        this.hours = 0;
        this.firstUserStatus = false;
        this.autoRenew = false;
        this.userSelectedAutoRenew = false;
        this.totalAmount = 0;
        this.checked = true;
        this.loader = false;
        this.referralStatus = false;
        this.referralCode = '';
        this.referralDocId = '';
        this.referralCodeDisount = 0;
        this.referralCodeDisountAmount = 0;
        this.referralCodeApplyDisountAmount = 0;
        this.referralLoader = false;
        this.couponsStatus = false;
        this.couponsCode = '';
        this.couponsDocId = '';
        this.couponsCodeDisount = 0;
        this.couponsCodeDisountAmount = 0;
        this.couponsCodeApplyDisountAmount = 0;
        this.couponsLoader = false;
        this.userUID = '';
        this.referralAmount = 0;
        this.minPackageAmt = 0;
        this.maxReferLimit = 0;
        this.apiHeadersForPayment = { 'Authorization': 'sk_test_ce558eea-0c38-4759-800c-4f1402c6a7b5', 'Content-Type': 'application/json' };
        this.apiHeadersForToken = { 'Authorization': 'pk_test_9bd4de9b-1bbc-43ab-83b7-94bd24f21252', 'Content-Type': 'application/json' };
        this.addNewCard = false;
        this.payableAmount = 0;
        this.cardHolderName = "Test Name";
        this.cardNumber = '4242424242424242';
        this.expiry_month = '06';
        this.expiry_year = '2028';
        this.cvv = '100';
        this.saveCard = false;
        this.packageId = "";
        this.orderId = "";
        this.cardDetails = false;
        this.sourceId = "";
        this.cards = [];
        this.packagesDocId = '';
        this.couponsCodeDocId = '';
        this.loaderPaymentProccess = false;
        this.loaderWithCard = false;
        this.loader = false;
        this.firestore.collection("settings").doc("config").get().subscribe((result) => {
            this.referralAmount = result.data().referralAmount;
            this.minPackageAmt = result.data().minPackageAmt;
            this.maxReferLimit = result.data().maxReferLimit;
        });
    }
    couponStatus() {
        this.couponsStatus != this.couponsStatus;
        console.log(this.couponsStatus);
    }
    ngOnInit() {
        this.route.queryParams.subscribe((res) => {
            this.docId = res['docId'];
        });
        this.packageId = this.docId;
        this.firestore.collection("users", ref => ref.where("uid", '==', this.userS.userUID)).get().subscribe(result => {
            result.docs.map((docs) => {
                let data = docs.data();
                this.userDetail = data;
                this.cardHolderName = data.name;
                this.firestore.collection("users").doc(data.docId).collection("cards").valueChanges().subscribe(data => {
                    this.cards = data;
                });
            });
        });
        this.firestore.collection('packages', ref => ref.where("docId", "==", this.docId)).get().subscribe(result => {
            result.docs.map((docs) => {
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
                    }
                    else {
                        this.firstUserStatus = false;
                        this.flatDiscount = data['flatDiscount'];
                        if (Number(this.flatDiscount) > 0) {
                            this.amountFlatDiscount = Number(percentage) * this.flatDiscount;
                            this.amountWithFlatDiscount = Number(this.amount) - Number(this.amountFlatDiscount);
                            this.totalAmount = this.amountWithFlatDiscount;
                            this.payableAmount = this.totalAmount;
                        }
                    }
                });
            });
        });
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_profile_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_4__.EditProfileComponent,
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
    success_PresentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                mode: 'ios',
                duration: 2000,
                color: 'success'
            });
            toast.present();
        });
    }
    successPresentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                mode: 'ios',
                duration: 2000,
            });
            toast.present();
        });
    }
    errorPresentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                mode: 'ios',
                duration: 2000,
                color: "danger"
            });
            toast.present();
        });
    }
    couponsApply() {
        if (this.couponsCode !== '') {
            this.firestore.collection("coupons", ref => ref.where("couponcode", '==', this.couponsCode)).get().subscribe(result => {
                if (result.size > 0) {
                    result.docs.map((docs) => {
                        let data = docs.data();
                        let today = new Date();
                        let allowedusage = data.allowedusage;
                        let validity = data.validity.toString();
                        let index = validity.lastIndexOf("Days");
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
                            }
                            else {
                                this.errorPresentToast("Coupon are expired.");
                            }
                        }
                        else {
                            this.errorPresentToast("Coupon are expired.");
                        }
                    });
                }
                else {
                    this.errorPresentToast("Coupon Code Not Found");
                }
            });
        }
        else {
            this.errorPresentToast("Please! Enter Coupon code");
        }
    }
    referralApply() {
        if (this.referralCode !== '') {
            if (this.userS.userReferalCode !== this.referralCode) {
                this.firestore.collection("users", ref => ref.where("referalCode", '==', this.referralCode)).get().subscribe(result => {
                    if (result.size > 0) {
                        this.firestore.collection("referralCodeUsage", ref => ref.where("referalCode", '==', this.referralCode).where("userApplyUid", '==', this.userS.userUID)).get().subscribe(resultUserReferal => {
                            if (resultUserReferal.size === 0) {
                                this.firestore.collection("referralCodeUsage", ref => ref.where("referalCode", '==', this.referralCode)).get().subscribe(resultReferal => {
                                    if (this.maxReferLimit >= resultReferal.size) {
                                        this.referralLoader = true;
                                        this.referralCode = this.referralCode;
                                        this.referralCodeDisountAmount = this.referralAmount;
                                        this.referralCodeApplyDisountAmount = Number(this.totalAmount) - Number(this.referralCodeDisountAmount);
                                        this.totalAmount = this.referralCodeApplyDisountAmount;
                                        this.payableAmount = this.totalAmount;
                                        this.referralLoader = false;
                                    }
                                    else {
                                        this.errorPresentToast("Referral Code Expired.");
                                    }
                                });
                            }
                            else {
                                this.errorPresentToast("Referral Code Expired.");
                            }
                        });
                    }
                    else {
                        this.errorPresentToast("Referral Code Not Found");
                    }
                });
            }
            else {
                this.errorPresentToast("You cannot use your referral code");
            }
        }
        else {
            this.errorPresentToast("Please! Enter Referral code");
        }
    }
    checkoutPayment() {
        if (this.userS.userName !== '' && this.userS.userEmail !== '' && this.userS.userPhoneNumber !== '') {
            this.cardValidation();
        }
        else {
            this.presentModal();
        }
    }
    getCardDetails(card) {
        this.sourceId = card.srcId;
    }
    paymentWithToken(token) {
        this.generateOrderId();
        let paymentAmt = Number(this.payableAmount) * 100;
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.paymentUrl + "payments", {
            "source": {
                "token": token,
                "type": "token"
            },
            "customer": {
                "email": this.userS.userEmail,
                "name": this.userS.userName
            },
            "currency": "AED",
            "amount": paymentAmt,
            "reference": this.orderId
        }, { 'headers': this.apiHeadersForPayment }).subscribe((result) => {
            console.log(result);
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
                });
                // TODO: Save transaction details and active package
                this.createUserHistory(paymentId);
            }
            else {
                this.errorPresentToast(response_summary);
            }
        }, (error) => {
            console.log(error);
            this.errorPresentToast("Error in Capturing Payment");
        });
    }
    paymentWithId() {
        this.loader = true;
        let paymentAmt = Number(this.payableAmount) * 100;
        this.loaderWithCard = true;
        this.generateOrderId();
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.paymentUrl + "payments", {
            "source": {
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
            console.log(result);
            let response_code = result['response_code'];
            let response_summary = result['response_summary'];
            if (response_code === "10000") {
                let paymentId = result['id'];
                this.createUserHistory(paymentId);
            }
            else {
                this.errorPresentToast(response_summary);
            }
        });
    }
    startPaymentAndSaveCard() {
        this.loader = true;
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.paymentUrl + "tokens", {
            "number": this.cardNumber,
            "expiry_month": this.expiry_month,
            "expiry_year": this.expiry_year,
            "cvv": this.cvv,
            "type": "card",
            "name": this.cardHolderName
        }, { 'headers': this.apiHeadersForToken }).subscribe((result) => {
            console.log(result);
            this.paymentWithToken(result['token']);
        }, (error) => {
            this.loader = false;
            this.errorPresentToast("Invalid Card Details");
        });
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
                                        if (this.sourceId !== '' && this.sourceId !== null && this.sourceId !== undefined) {
                                            this.paymentWithId();
                                        }
                                        else {
                                            this.startPaymentAndSaveCard();
                                        }
                                    }
                                    else {
                                        this.errorPresentToast("CVV must be 3 digit");
                                    }
                                }
                                else {
                                    this.errorPresentToast("Expiry Month invalid");
                                }
                            }
                            else if (Number(this.expiry_year) > Number(year)) {
                                if (cvv.length === 3) {
                                    if (this.sourceId !== '' && this.sourceId !== null && this.sourceId !== undefined) {
                                        this.paymentWithId();
                                    }
                                    else {
                                        this.startPaymentAndSaveCard();
                                    }
                                }
                                else {
                                    this.errorPresentToast(this.cvv + "CVV must be 3 digit " + this.cvv.length);
                                }
                            }
                            else {
                                this.errorPresentToast("Expiry Year invalid");
                            }
                        }
                        else {
                            this.errorPresentToast("Expiry Year must be 4 digit");
                        }
                    }
                    else {
                        this.errorPresentToast("Expiry Month Invalid");
                    }
                }
                else {
                    this.errorPresentToast("Expiry Month must be 2 digit");
                }
            }
            else {
                this.errorPresentToast("Card number must be 16 digit");
            }
        }
        else {
            this.errorPresentToast("All fields mendatory");
        }
    }
    createUserHistory(paymentId) {
        let packageValidity = '';
        let checkIns = 0;
        let packageName = '';
        this.firestore.collection('packages', ref => ref.where("docId", "==", this.packageId)).get().subscribe(result => {
            result.docs.map((docs) => {
                let data = docs.data();
                packageName = data['name'];
                packageValidity = data['validity'];
                checkIns = data['checkIns'];
            });
        });
        // TODO: User must create only one order on same date. Apply Validation
        let today = new Date();
        let tomorrow = new Date();
        let yeasterday = new Date();
        tomorrow.setDate(today.getDate() + 1);
        yeasterday.setDate(today.getDate() - 1);
        let fid = this.firestore.createId();
        this.firestore.collection("userHistory").doc(fid).set({ amount: this.payableAmount, docId: fid, uid: this.userDetail.uid, type: "package", packageId: this.packageId, orderId: this.orderId, paymentId: paymentId, timestamp: new Date() }).then(res => {
            if (this.userSelectedAutoRenew === true) {
                let autoRenewalDate = new Date();
                autoRenewalDate.setDate(today.getDate() + Number(Number(packageValidity) + 1));
                const newId = this.firestore.createId();
                this.firestore.collection("autoRenewals").doc(newId).set({
                    packageId: this.packageId,
                    uid: this.userS.userUID,
                    autoRenewalDate: autoRenewalDate,
                    timestamp: new Date(),
                    docId: newId
                });
            }
            if (this.referralCode !== '') {
                this.firestore.collection("users", ref => ref.where("referalCode", '==', this.referralCode)).get().subscribe(resultUser => {
                    resultUser.docs.map((docs) => {
                        let newid = this.firestore.createId();
                        this.firestore.collection('referralCodeUsage').doc(newid).set({
                            docId: newid,
                            timestamp: new Date(),
                            packageId: this.packageId,
                            userApplyUid: this.userDetail.uid,
                            uid: docs.data().uid,
                            referalCode: this.referralCode
                        }).then(res => {
                            console.log("Referal Code Add");
                            let balance = Number(docs.data().balance) + Number(this.referralAmount);
                            this.firestore.collection("users").doc(docs.id).update({ balance: balance }).then(() => {
                                console.log("Balance Update");
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
                                    console.log("Wallet Transaction");
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
                        result.docs.map((docs) => {
                            let data = docs.data();
                            let allowedusage = data.allowedusage;
                            allowedusage = Number(allowedusage) - 1;
                            this.firestore.collection('coupons').doc(this.couponsCodeDocId).update({ allowedusage: allowedusage }).then(() => {
                                console.log("coupon update");
                            });
                        });
                    });
                });
            }
            this.firestore.collection('userActivePackage', ref => ref.where("uid", '==', this.userDetail.uid)).get().subscribe(result => {
                if (result.size === 0) {
                    let expireDate = new Date();
                    expireDate.setDate(today.getDate() + Number(Number(packageValidity) - 1));
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
                        console.log("User History Created");
                        this.router.navigate(['/home']);
                        this.success_PresentToast(`Your ` + packageName + ` Package Activated`);
                    });
                }
                else {
                    result.docs.map(docs => {
                        this.firestore.collection('userActivePackage').doc(docs.id).delete().then(res => {
                            let expireDate = new Date();
                            expireDate.setDate(today.getDate() + Number(Number(packageValidity) - 1));
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
                                console.log("User History Created");
                                this.router.navigate(['/home']);
                                this.success_PresentToast(`Your ` + packageName + ` Package Activated`);
                            });
                        });
                    });
                }
            });
        });
        // TODO: Apply User Active Package
    }
    generateOrderId() {
        this.orderId = Math.random().toString(36).slice(2);
    }
    onScroll(event) {
        this.theContent.ionScroll.subscribe((res) => {
            if (res.detail.scrollTop === 0) {
                this.toolbar.color = 'transparent';
            }
            else {
                this.toolbar.color = 'white';
            }
        });
    }
};
CheckoutComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestore },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _helper_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient }
];
CheckoutComponent.propDecorators = {
    toolbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ["toolbar", { static: false },] }],
    theContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent,] }]
};
CheckoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-checkout',
        template: _raw_loader_checkout_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_checkout_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CheckoutComponent);



/***/ }),

/***/ 4625:
/*!**********************************************************************!*\
  !*** ./src/app/package/package-details/package-details.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackageDetailsComponent": () => (/* binding */ PackageDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_package_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./package-details.component.html */ 9071);
/* harmony import */ var _package_details_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package-details.component.scss */ 9776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _helper_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../__helper/user.service */ 5875);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ 1704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);









let PackageDetailsComponent = class PackageDetailsComponent {
    constructor(route, firestore, router, userS, toastController) {
        this.route = route;
        this.firestore = firestore;
        this.router = router;
        this.userS = userS;
        this.toastController = toastController;
        this.docId = '';
        this.amount = 0;
        this.amountWithDiscount = 0;
        this.flatDiscount = 0;
        this.packageName = '';
        this.packageValidity = '';
        this.checkIns = 0;
        this.hours = 0;
        this.features = [];
        this.beverage = [];
        this.information = '';
    }
    ngOnInit() {
        this.features = [];
        this.route.queryParams.subscribe((res) => {
            this.docId = res['docId'];
        });
        this.firestore.collection('packages', ref => ref.where("docId", "==", this.docId)).get().subscribe(result => {
            result.docs.map((docs) => {
                let data = docs.data();
                this.amount = data['amount'];
                this.flatDiscount = data['flatDiscount'];
                if (Number(this.flatDiscount) > 0) {
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
                if (flength > 0) {
                    data['features'].forEach(element => {
                        this.firestore.collection('featuresMaster', ref => ref.where("docId", "==", element['docId'])).get().subscribe(result1 => {
                            result1.docs.map((docs1) => {
                                if (this.features.length != Number(flength)) {
                                    this.features.push(docs1.data());
                                }
                            });
                        });
                    });
                }
                if (data['free_beverages'] !== undefined && data['free_beverages'] !== null) {
                    let blength = data['free_beverages'].length;
                    if (blength > 0) {
                        data['free_beverages'].forEach(element => {
                            this.firestore.collection('beverageMaster', ref => ref.where("docId", "==", element['value'])).get().subscribe(result1 => {
                                result1.docs.map((docs1) => {
                                    if (this.beverage.length != Number(blength)) {
                                        this.beverage.push(docs1.data());
                                        console.log(this.beverage);
                                    }
                                });
                            });
                        });
                    }
                }
                else {
                    console.log("No Bravage");
                }
            });
        });
        this.firestore.collection("favourite", ref => ref.where("uid", '==', this.userS.userUID).where("packageId", '==', this.docId)).get().subscribe(result => {
            if (result.size > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_3__('#likeSection').hide();
                jquery__WEBPACK_IMPORTED_MODULE_3__('#unlikeSection').show();
                jquery__WEBPACK_IMPORTED_MODULE_3__('#unlikeIcon').addClass("animate__animated animate__jackInTheBox");
                jquery__WEBPACK_IMPORTED_MODULE_3__('#likeIcon').removeClass("animate__animated animate__jackInTheBox");
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_3__('#unlikeSection').hide();
                jquery__WEBPACK_IMPORTED_MODULE_3__('#likeSection').show();
                jquery__WEBPACK_IMPORTED_MODULE_3__('#likeIcon').addClass("animate__animated animate__jackInTheBox");
                jquery__WEBPACK_IMPORTED_MODULE_3__('#unlikeIcon').removeClass("animate__animated animate__jackInTheBox");
            }
        });
    }
    like() {
        this.firestore.collection("favourite", ref => ref.where("uid", '==', this.userS.userUID).where("packageId", '==', this.docId)).get().subscribe(result => {
            if (result.size === 0) {
                const newId = this.firestore.createId();
                this.firestore.collection("favourite").doc(newId).set({
                    docId: newId,
                    type: 'package',
                    uid: this.userS.userUID,
                    packageId: this.docId
                }).then(res => {
                    jquery__WEBPACK_IMPORTED_MODULE_3__('#likeSection').hide();
                    jquery__WEBPACK_IMPORTED_MODULE_3__('#unlikeSection').show();
                    jquery__WEBPACK_IMPORTED_MODULE_3__('#unlikeIcon').addClass("animate__animated animate__jackInTheBox");
                    jquery__WEBPACK_IMPORTED_MODULE_3__('#likeIcon').removeClass("animate__animated animate__jackInTheBox");
                    this.successPresentToast("Added to favourite list");
                });
            }
        });
    }
    unlike() {
        this.firestore.collection("favourite", ref => ref.where("uid", '==', this.userS.userUID).where("packageId", '==', this.docId)).get().subscribe(result => {
            if (result.size > 0) {
                result.docs.map((docs) => {
                    this.firestore.collection("favourite").doc(docs.id).delete().then(res => {
                        jquery__WEBPACK_IMPORTED_MODULE_3__('#unlikeSection').hide();
                        jquery__WEBPACK_IMPORTED_MODULE_3__('#likeSection').show();
                        jquery__WEBPACK_IMPORTED_MODULE_3__('#likeIcon').addClass("animate__animated animate__jackInTheBox");
                        jquery__WEBPACK_IMPORTED_MODULE_3__('#unlikeIcon').removeClass("animate__animated animate__jackInTheBox");
                    });
                });
            }
        });
    }
    successPresentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                mode: 'ios',
                duration: 2000
            });
            toast.present();
        });
    }
    ionViewWillEnter() {
    }
    checkout() {
        this.router.navigate(['/package-details/checkout'], {
            queryParams: { docId: this.docId }
        });
    }
    onScroll(event) {
        this.theContent.ionScroll.subscribe((res) => {
            if (res.detail.scrollTop === 0) {
                this.toolbar.color = 'transparent';
            }
            else {
                this.toolbar.color = 'white';
            }
        });
    }
};
PackageDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _helper_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
PackageDetailsComponent.propDecorators = {
    toolbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ["toolbar", { static: false },] }],
    theContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent,] }]
};
PackageDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-package-details',
        template: _raw_loader_package_details_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_package_details_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PackageDetailsComponent);



/***/ }),

/***/ 2669:
/*!***************************************************!*\
  !*** ./src/app/package/package-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackageRoutingModule": () => (/* binding */ PackageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout/checkout.component */ 267);
/* harmony import */ var _package_details_package_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package-details/package-details.component */ 4625);





const routes = [
    {
        path: '',
        component: _package_details_package_details_component__WEBPACK_IMPORTED_MODULE_1__.PackageDetailsComponent
    },
    {
        path: 'checkout',
        component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_0__.CheckoutComponent
    },
];
let PackageRoutingModule = class PackageRoutingModule {
};
PackageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], PackageRoutingModule);



/***/ }),

/***/ 3117:
/*!*******************************************!*\
  !*** ./src/app/package/package.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackageModule": () => (/* binding */ PackageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _package_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package-routing.module */ 2669);
/* harmony import */ var _package_details_package_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package-details/package-details.component */ 4625);
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout/checkout.component */ 267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile/profile.module */ 4523);









let PackageModule = class PackageModule {
};
PackageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _package_details_package_details_component__WEBPACK_IMPORTED_MODULE_1__.PackageDetailsComponent,
            _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_2__.CheckoutComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _package_routing_module__WEBPACK_IMPORTED_MODULE_0__.PackageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _profile_profile_module__WEBPACK_IMPORTED_MODULE_3__.ProfileModule
        ],
    })
], PackageModule);



/***/ }),

/***/ 1041:
/*!**********************************************************!*\
  !*** ./src/app/package/checkout/checkout.component.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: transparent;\n}\nion-toolbar ion-button ion-icon {\n  font-size: xx-large;\n  font-weight: bold;\n}\nion-content .paymentProccess ion-list ion-item ion-label {\n  font-family: \"Geometria\";\n}\nion-content .paymentProccess ion-grid {\n  padding: 0 20px;\n}\nion-content .paymentProccess ion-grid .inputSection {\n  font-size: medium;\n  border: solid 1px #ff6000;\n  border-radius: 10px;\n  outline: unset;\n}\nion-content .paymentProccess ion-grid .inputSection ion-icon {\n  margin-right: 10px;\n}\nion-content .paymentProccess ion-grid .inputSection .cardNumber {\n  border: unset;\n  width: 100%;\n  outline: unset;\n}\nion-content .paymentProccess ion-grid .inputSection .mm {\n  border: unset;\n  text-align: center;\n  width: 100%;\n  outline: unset;\n}\nion-content .paymentProccess ion-grid .inputSection .yy {\n  border: unset;\n  text-align: center;\n  width: 100%;\n  outline: unset;\n}\nion-content .paymentProccess ion-grid .inputSection .cvv {\n  border: unset;\n  text-align: center;\n  width: 100%;\n  outline: unset;\n}\nion-content .paymentProccess ion-grid .editForm h1 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: xx-large;\n  line-height: 45px;\n  color: #FF6000;\n}\nion-content .paymentProccess ion-grid .editForm label {\n  font-style: normal;\n  font-weight: normal;\n  font-size: small;\n  line-height: 18px;\n  color: #FF6000;\n}\nion-content .paymentProccess ion-grid .editForm input {\n  outline: unset;\n  width: 100%;\n  border: 1px solid #FF6000;\n  border-radius: 10px;\n  margin-top: 5px;\n  font-size: small;\n  padding: 10px;\n}\nion-content .paymentProccess ion-grid .editForm ion-button {\n  width: auto;\n  --background: linear-gradient(to right top, #FF6000, #f99958);\n  font-family: \"Geometria\";\n  color: #fff;\n  border-radius: 15px;\n  margin: 15px;\n  box-shadow: unset;\n  font-size: large;\n}\nion-content .paymentProccess .cardAvailable ion-button {\n  --background: linear-gradient(to right top, #FF6000, #f99958);\n  font-family: \"Geometria\";\n  color: #fff;\n  border-radius: 15px;\n  margin: 15px;\n  box-shadow: unset;\n  font-size: large;\n}\nion-content ion-grid .referalCodeCheckbox ion-checkbox {\n  height: 23px;\n  width: 23px;\n  margin-right: 10px;\n}\nion-content ion-grid .referalCodeCheckbox ion-label {\n  font-family: \"Geometria\";\n}\nion-content ion-grid h3 {\n  font-weight: bold;\n}\nion-content ion-grid .text {\n  font-size: small;\n  font-weight: bold;\n}\nion-content ion-grid .card-details {\n  padding: 10px;\n  background: #fff;\n  border: 1px solid #FF6000;\n  box-sizing: border-box;\n  border-radius: 10px;\n}\nion-content ion-grid .card-details h6 {\n  padding: unset;\n  margin: unset;\n  font-style: normal;\n  font-weight: 500;\n  font-size: medium;\n  line-height: 35px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  color: #000000;\n}\nion-content ion-grid .card-details ion-badge {\n  padding: 5px 10px;\n  color: white;\n  margin: 5px 15px 5px 0;\n  border-radius: 15px;\n}\nion-content ion-grid .card-details .text-contain {\n  font-size: small;\n}\nion-content ion-grid .packageAmount ion-item {\n  --background: transparent;\n}\nion-content ion-grid .packageAmount ion-item ion-label {\n  padding: unset;\n  margin: unset;\n  font-family: \"Geometria\";\n  font-size: small;\n  font-weight: bold;\n}\nion-content ion-grid .packageAmount ion-item ion-text {\n  font-size: small;\n  font-weight: bold;\n}\nion-content ion-grid .grayItem ion-item {\n  --background: transparent;\n}\nion-content ion-grid .grayItem ion-item ion-label {\n  padding: unset;\n  margin: unset;\n  color: gray;\n  font-family: \"Geometria\";\n  font-size: small;\n  font-weight: bold;\n}\nion-content ion-grid .grayItem ion-item ion-text {\n  color: gray;\n  font-size: small;\n  font-weight: bold;\n}\nion-content ion-grid .referal-card ion-item {\n  --background: transparent;\n}\nion-content ion-grid .referal-card ion-item input {\n  padding: 10px;\n  width: 100%;\n  border: 1px solid #FF6000;\n  box-sizing: border-box;\n  border-radius: 10px;\n  outline: unset;\n}\nion-content ion-grid .totalAmount ion-item {\n  --background: transparent;\n}\nion-content ion-grid .totalAmount ion-item ion-label {\n  padding: unset;\n  margin: unset;\n  color: #FF6000;\n  font-family: \"Geometria\";\n  font-size: small;\n  font-weight: bold;\n}\nion-content ion-grid .totalAmount ion-item ion-text {\n  color: #FF6000;\n  font-size: small;\n  font-weight: bold;\n}\nion-content ion-grid .checkbox-card ion-item {\n  --background: transparent;\n}\nion-content ion-grid .getBtn ion-item {\n  --background: transparent;\n  padding: 10px 5px;\n}\nion-content ion-grid .getBtn ion-item ion-icon {\n  font-size: xx-large;\n}\nion-content ion-grid .getBtn ion-item .getPackage {\n  text-align: center;\n  height: 50px;\n  width: 100%;\n  color: #fff;\n  background: #FF6000;\n  border: solid 1px #fff;\n  border-radius: 10px;\n  font-size: large;\n}\nion-footer {\n  background: white;\n}\nion-footer ion-item {\n  padding: 10px 5px;\n}\nion-footer ion-item ion-icon {\n  font-size: xx-large;\n}\nion-footer ion-item .getPackage {\n  text-align: center;\n  height: 50px;\n  width: 100%;\n  color: #fff;\n  background: linear-gradient(to right top, #FF6000, #f99958);\n  font-family: \"Geometria\";\n  border: solid 1px #fff;\n  border-radius: 10px;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkseUJBQUE7QUFBSjtBQUdNO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQURSO0FBV1U7RUFDRSx3QkFBQTtBQVJaO0FBYU07RUFDRSxlQUFBO0FBWFI7QUFhUTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFYVjtBQWFVO0VBQ0Usa0JBQUE7QUFYWjtBQWNVO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBWlo7QUFlVTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBYlo7QUFnQlU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQWRaO0FBaUJVO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFmWjtBQW9CVTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtBQW5CWjtBQXNCVTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtBQXJCWjtBQXdCVTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUF0Qlo7QUF5QlU7RUFDRSxXQUFBO0VBQ0EsNkRBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBdkJaO0FBNkJRO0VBQ0UsNkRBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBM0JWO0FBbUNRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQWpDVjtBQW9DUTtFQUNFLHdCQUFBO0FBbENWO0FBc0NNO0VBQ0UsaUJBQUE7QUFwQ1I7QUF1Q007RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBckNSO0FBd0NNO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBRUEseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBdkNSO0FBeUNRO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUVBLGlCQUFBO0VBQ0Esc0JBQUE7RUFFQSxjQUFBO0FBekNWO0FBNENRO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQTFDVjtBQTZDUTtFQUNFLGdCQUFBO0FBM0NWO0FBZ0RRO0VBQ0UseUJBQUE7QUE5Q1Y7QUFnRFU7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQTlDWjtBQWlEVTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUEvQ1o7QUFxRFE7RUFDRSx5QkFBQTtBQW5EVjtBQXFEVTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQW5EWjtBQXNEVTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBcERaO0FBMERRO0VBQ0UseUJBQUE7QUF4RFY7QUEwRFU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUF4RFo7QUE4RFE7RUFDRSx5QkFBQTtBQTVEVjtBQThEVTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQTVEWjtBQStEVTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBN0RaO0FBbUVRO0VBQ0UseUJBQUE7QUFqRVY7QUFzRVE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBcEVWO0FBc0VVO0VBQ0UsbUJBQUE7QUFwRVo7QUF1RVU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBckVaO0FBNEVFO0VBQ0UsaUJBQUE7QUF6RUo7QUEyRUk7RUFDRSxpQkFBQTtBQXpFTjtBQTJFTTtFQUNFLG1CQUFBO0FBekVSO0FBNEVNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwyREFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBMUVSIiwiZmlsZSI6ImNoZWNrb3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG5cclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gIFxyXG4gICAgLnBheW1lbnRQcm9jY2VzcyB7XHJcbiAgICAgIGlvbi1saXN0IHtcclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJHZW9tZXRyaWFcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaW9uLWdyaWQge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICBcclxuICAgICAgICAuaW5wdXRTZWN0aW9uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmNjAwMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBvdXRsaW5lOiB1bnNldDtcclxuICBcclxuICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgLmNhcmROdW1iZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IHVuc2V0O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgb3V0bGluZTogdW5zZXQ7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAubW0ge1xyXG4gICAgICAgICAgICBib3JkZXI6IHVuc2V0O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiB1bnNldDtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIC55eSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogdW5zZXQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IHVuc2V0O1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgLmN2diB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogdW5zZXQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IHVuc2V0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuZWRpdEZvcm0ge1xyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICBcclxuICAgICAgICAgICAgY29sb3I6ICNGRjYwMDA7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgXHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkY2MDAwO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiB1bnNldDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjYwMDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjRkY2MDAwLCAjZjk5OTU4KTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdHZW9tZXRyaWEnO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiB1bnNldDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmNhcmRBdmFpbGFibGUge1xyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjRkY2MDAwLCAjZjk5OTU4KTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2VvbWV0cmlhJztcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IHVuc2V0O1xyXG4gICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGlvbi1ncmlkIHtcclxuICBcclxuICAgICAgLnJlZmVyYWxDb2RlQ2hlY2tib3gge1xyXG4gICAgICAgIGlvbi1jaGVja2JveCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgICB3aWR0aDogMjNweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkdlb21ldHJpYVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmNhcmQtZGV0YWlscyB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIFxyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjYwMDA7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIFxyXG4gICAgICAgIGg2IHtcclxuICAgICAgICAgIHBhZGRpbmc6IHVuc2V0O1xyXG4gICAgICAgICAgbWFyZ2luOiB1bnNldDtcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gIFxyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xyXG4gIFxyXG4gICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGlvbi1iYWRnZSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIG1hcmdpbjogNXB4IDE1cHggNXB4IDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAudGV4dC1jb250YWluIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5wYWNrYWdlQW1vdW50IHtcclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIFxyXG4gICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgcGFkZGluZzogdW5zZXQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogdW5zZXQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkdlb21ldHJpYVwiO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIGlvbi10ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5ncmF5SXRlbSB7XHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBcclxuICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHVuc2V0O1xyXG4gICAgICAgICAgICBtYXJnaW46IHVuc2V0O1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiR2VvbWV0cmlhXCI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgaW9uLXRleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5yZWZlcmFsLWNhcmQge1xyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgXHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkY2MDAwO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBvdXRsaW5lOiB1bnNldDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnRvdGFsQW1vdW50IHtcclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIFxyXG4gICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgcGFkZGluZzogdW5zZXQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogdW5zZXQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkY2MDAwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJHZW9tZXRyaWFcIjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICBpb24tdGV4dCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkY2MDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmNoZWNrYm94LWNhcmQge1xyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5nZXRCdG4ge1xyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICBcclxuICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIC5nZXRQYWNrYWdlIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGNjAwMDtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaW9uLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgXHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5nZXRQYWNrYWdlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICNGRjYwMDAsICNmOTk5NTgpO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnR2VvbWV0cmlhJztcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0iXX0= */");

/***/ }),

/***/ 9776:
/*!************************************************************************!*\
  !*** ./src/app/package/package-details/package-details.component.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: transparent;\n}\nion-toolbar ion-button ion-icon {\n  font-size: xx-large;\n  font-weight: bold;\n}\nion-content .dicount-cart {\n  background: linear-gradient(to left bottom, #FF6000, #FFAA70);\n  background-size: contain;\n  height: 158px;\n  color: white;\n  border-radius: 20px;\n}\nion-content .dicount-cart .one_half {\n  margin: 15px 0;\n  border-right: solid 1px #fff;\n}\nion-content .dicount-cart .one_half h1 {\n  font-weight: bold;\n}\nion-content .dicount-cart .two_half {\n  margin: 20px 0;\n}\nion-content .card-details {\n  padding: 10px;\n  background: #fff;\n  border: 1px solid #FF6000;\n  box-sizing: border-box;\n  border-radius: 10px;\n}\nion-content .card-details h6 {\n  padding: unset;\n  margin: unset;\n  font-style: normal;\n  font-weight: 500;\n  font-size: medium;\n  line-height: 35px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  color: #000000;\n}\nion-content .card-details ion-badge {\n  padding: 5px 10px;\n  color: white;\n  margin: 5px 15px 5px 0;\n  border-radius: 15px;\n}\nion-content .card-details .text-contain {\n  font-size: small;\n}\nion-content .card-details ion-chip {\n  padding: 0 5px;\n  background: #fff;\n}\nion-content .card-details ion-chip img {\n  height: 25px;\n  margin-right: 8px;\n}\nion-content .card-details ion-chip ion-label {\n  font-size: small;\n}\nion-footer {\n  background: white;\n}\nion-footer ion-item {\n  padding: 10px 5px;\n}\nion-footer ion-item ion-chip {\n  --background: transparent;\n}\nion-footer ion-item ion-chip ion-icon {\n  margin: unset;\n}\nion-footer ion-item ion-icon {\n  font-size: xx-large;\n}\nion-footer ion-item .getPackage {\n  outline: unset;\n  text-align: center;\n  height: 50px;\n  width: 100%;\n  color: #fff;\n  background: linear-gradient(to right top, #FF6000, #f99958);\n  font-family: \"Geometria\";\n  border: solid 1px #fff;\n  border-radius: 10px;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2UtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlCQUFBO0FBQUo7QUFFSTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQU1JO0VBQ0ksNkRBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQUlRO0VBQ0ksY0FBQTtFQUNBLDRCQUFBO0FBRlo7QUFJWTtFQUNJLGlCQUFBO0FBRmhCO0FBTVE7RUFDSSxjQUFBO0FBSlo7QUFRSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUVBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVBSO0FBU1E7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBRUEsaUJBQUE7RUFDQSxzQkFBQTtFQUVBLGNBQUE7QUFUWjtBQVlRO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVZaO0FBYVE7RUFDSSxnQkFBQTtBQVhaO0FBY1E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFaWjtBQWNZO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBWmQ7QUFlWTtFQUNFLGdCQUFBO0FBYmQ7QUFtQkE7RUFDSSxpQkFBQTtBQWhCSjtBQWlCSTtFQUNJLGlCQUFBO0FBZlI7QUFpQlE7RUFDSSx5QkFBQTtBQWZaO0FBZ0JZO0VBQ0ksYUFBQTtBQWRoQjtBQWlCUTtFQUNJLG1CQUFBO0FBZlo7QUFrQlE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwyREFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBaEJaIiwiZmlsZSI6InBhY2thZ2UtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuXHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLmRpY291bnQtY2FydHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCBib3R0b20sICNGRjYwMDAsICNGRkFBNzApO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICBoZWlnaHQ6IDE1OHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIC5vbmVfaGFsZntcclxuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNmZmY7XHJcblxyXG4gICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudHdvX2hhbGZ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1kZXRhaWxze1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjYwMDA7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgICAgICBoNntcclxuICAgICAgICAgICAgcGFkZGluZzogdW5zZXQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogdW5zZXQ7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG5cclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1iYWRnZXtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHggMTVweCA1cHggMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZXh0LWNvbnRhaW57XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tY2hpcCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuXHJcbiAgICAgICAgaW9uLWNoaXB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiB1bnNldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5nZXRQYWNrYWdle1xyXG4gICAgICAgICAgICBvdXRsaW5lOiB1bnNldDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgI0ZGNjAwMCwgI2Y5OTk1OCk7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2VvbWV0cmlhJztcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 6266:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/package/checkout/checkout.component.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" color=\"white\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button color=\"orange\" text=\"\"></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-buttons>\r\n    <ion-title color=\"orange\">Checkout</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\" [scrollEvents]=\"true\" >\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <div class=\"card-details\">\r\n          <h5>Package Name: {{packageName}}</h5>\r\n          <h5>Package Validity: {{packageValidity}} Days</h5>\r\n          <h5>No of Check-ins Allowed: {{checkIns}}</h5>\r\n          <h5>No of Free Hours to Meeting: {{hours}} Hours</h5>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" style=\"padding: unset;\">\r\n        <div class=\"packageAmount\">\r\n          <ion-item lines=\"none\">\r\n            <ion-label>Package Amount:</ion-label>\r\n            <ion-text slot=\"end\">{{amount}} AED</ion-text>\r\n          </ion-item>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" *ngIf=\"firstUserStatus\" style=\"padding: unset;\">\r\n        <div class=\"grayItem\">\r\n          <ion-item lines=\"none\">\r\n            <ion-label>First Time Discount :</ion-label>\r\n            <ion-text slot=\"end\">-{{amounFirstDiscountDiscount}} AED</ion-text>\r\n          </ion-item>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" *ngIf=\"!firstUserStatus\" style=\"padding: unset;\">\r\n        <div class=\"grayItem\">\r\n          <ion-item lines=\"none\">\r\n            <ion-label>Flat Discount Amount:</ion-label>\r\n            <ion-text slot=\"end\">-{{amountFlatDiscount}} AED</ion-text>\r\n          </ion-item>\r\n        </div>\r\n      </ion-col>\r\n\r\n      \r\n      <ion-col size=\"12\" *ngIf=\"couponsCodeApplyDisountAmount !== 0\" style=\"padding: unset;\">\r\n        <div class=\"grayItem\">\r\n          <ion-item lines=\"none\">\r\n            <ion-label>Coupon code apply:</ion-label>\r\n            <ion-text slot=\"end\">-{{couponsCodeDisountAmount}} AED</ion-text>\r\n          </ion-item>\r\n        </div>\r\n      </ion-col>\r\n      \r\n\r\n      <ion-col size=\"12\" *ngIf=\"referralCodeApplyDisountAmount !== 0\" style=\"padding: unset;\">\r\n        <div class=\"grayItem\">\r\n          <ion-item lines=\"none\">\r\n            <ion-label>Referral code apply:</ion-label>\r\n            <ion-text slot=\"end\">-{{referralCodeDisountAmount}} AED</ion-text>\r\n          </ion-item>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" *ngIf=\"couponsCodeApplyDisountAmount === 0\">\r\n        <ion-item lines=\"none\" class=\"referalCodeCheckbox\">\r\n          <ion-checkbox mode=\"ios\" slot=\"start\" [(ngModel)]=\"couponsStatus\" (ionChange)=\"couponStatus()\"  [ngModelOptions]=\"{standalone: true}\" color=\"primary\" style=\"margin-right: 10px\" ngDefaultControl></ion-checkbox>\r\n          <ion-label>Apply Coupon</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" *ngIf=\"couponsStatus && couponsCodeApplyDisountAmount === 0\">\r\n        <div class=\"referal-card\">\r\n          <ion-item lines=\"none\" class=\"ion-no-padding\">\r\n            <input type=\"text\" [(ngModel)]=\"couponsCode\" placeholder=\"Coupon Code\" ngDefaultControl>\r\n            <ion-spinner slot=\"end\" mode=\"md\" color=\"orange\" *ngIf=\"couponsLoader\"></ion-spinner>\r\n            <ion-text slot=\"end\" color=\"orange\" *ngIf=\"!couponsLoader\" (click)=\"couponsApply()\">Apply</ion-text>\r\n          </ion-item>\r\n        </div>  \r\n      </ion-col>\r\n\r\n\r\n\r\n      \r\n      <ion-col size=\"12\" *ngIf=\"referralCodeApplyDisountAmount === 0 && amount >= minPackageAmt\">\r\n        <ion-item lines=\"none\" class=\"referalCodeCheckbox\">\r\n          <ion-checkbox mode=\"ios\" slot=\"start\" [(ngModel)]=\"referralStatus\" color=\"primary\" ngDefaultControl style=\"margin-right: 10px\"></ion-checkbox>\r\n          <ion-label>Apply Referral</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      \r\n      <ion-col size=\"12\" *ngIf=\"referralStatus && referralCodeApplyDisountAmount === 0\">\r\n        <div class=\"referal-card\">\r\n          <ion-item lines=\"none\" class=\"ion-no-padding\">\r\n            <input type=\"text\" [(ngModel)]=\"referralCode\" ngDefaultControl placeholder=\"Referral Code\">\r\n            <ion-spinner slot=\"end\" mode=\"md\" color=\"orange\" *ngIf=\"referralLoader\"></ion-spinner>\r\n            <ion-text slot=\"end\" color=\"orange\" *ngIf=\"!referralLoader\" (click)=\"referralApply()\">Apply</ion-text>\r\n          </ion-item>\r\n        </div>  \r\n      </ion-col>\r\n\r\n      \r\n      <ion-col size=\"12\" *ngIf=\"autoRenew\">\r\n        <ion-item lines=\"none\" class=\"referalCodeCheckbox\">\r\n          <ion-label>Auto Renewal</ion-label>\r\n          <ion-toggle slot=\"end\" [checked]=\"userSelectedAutoRenew\" ngDefaultControl [(ngModel)]=\"userSelectedAutoRenew\"></ion-toggle>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" style=\"padding: unset;\">\r\n        <div class=\"totalAmount\">\r\n          <ion-item lines=\"none\">\r\n            <ion-label>Final Package Amount:</ion-label>\r\n            <ion-text slot=\"end\">{{ totalAmount }} AED</ion-text>\r\n          </ion-item>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>     \r\n  \r\n  \r\n  <div class=\"paymentProccess\">\r\n    <ion-grid *ngIf=\"addNewCard\">\r\n      <ion-row style=\"background: #ffd9c14f;padding: 5px 5px;border-radius: 15px;\">\r\n        <ion-col size=\"12\">\r\n          <h3>Add Card</h3>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <ion-item class=\"inputSection\" lines=\"none\">\r\n            <ion-icon name=\"person\" slot=\"start\"></ion-icon>\r\n            <input class=\"cardNumber\" ngDefaultControl [(ngModel)]=\"cardHolderName\" type=\"text\" placeholder=\"Card Holder Name\" slot=\"start\">\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <ion-item class=\"inputSection\" lines=\"none\">\r\n            <ion-icon name=\"card\" slot=\"start\"></ion-icon>\r\n            <input class=\"cardNumber\" ngDefaultControl [(ngModel)]=\"cardNumber\" type=\"text\" placeholder=\"Card Number\" slot=\"start\">\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-item class=\"inputSection\" lines=\"none\">\r\n            <input class=\"mm\" type=\"text\" ngDefaultControl [(ngModel)]=\"expiry_month\" placeholder=\"MM\" slot=\"start\">\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-item class=\"inputSection\" lines=\"none\">\r\n            <input class=\"yy\" type=\"text\" ngDefaultControl [(ngModel)]=\"expiry_year\" placeholder=\"YYYY\" slot=\"start\">\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-item class=\"inputSection\" lines=\"none\">\r\n            <input class=\"cvv\" type=\"text\" ngDefaultControl [(ngModel)]=\"cvv\" placeholder=\"CVV\" slot=\"start\">\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <!-- TODO: Remove Item Design -->\r\n          <ion-item color=\"transparent\" lines=\"none\">\r\n            <ion-label>Securely Save Card</ion-label>\r\n            <ion-checkbox slot=\"start\" ngDefaultControl [(ngModel)]=\"saveCard\" color=\"primary\"></ion-checkbox>\r\n          </ion-item>\r\n        </ion-col>\r\n      \r\n        <ion-col size=\"6\">\r\n          <ion-button mode=\"ios\" [disabled]=\"loader\" size=\"default\" expand=\"block\" (click)=\"checkoutPayment()\"> <ng-container *ngIf=\"!loader\"> Pay AED {{payableAmount}}</ng-container> <ion-spinner mode=\"md\" *ngIf=\"loader\"></ion-spinner></ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-button mode=\"ios\" [disabled]=\"loader\" size=\"default\" expand=\"block\" fill=\"outline\" (click)=\"addNewCard = false\">CLEAR</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  \r\n  \r\n    <ion-list *ngIf=\"!addNewCard\">\r\n      <ion-radio-group ngDefaultControl [(ngModel)]=\"sourceId\">\r\n        <ion-list-header>\r\n          <ion-label style=\"font-size: x-small;\">CREDIT/DEBIT CARDS</ion-label>\r\n        </ion-list-header>\r\n        <ng-container *ngFor=\"let card of cards\">\r\n          <ion-item lines=\"none\" (click)=\"getCardDetails(card)\">\r\n            <ion-label>{{card.number}}</ion-label>\r\n            <ion-radio slot=\"start\" value=\"{{card.srcId}}\" ></ion-radio>\r\n          </ion-item>\r\n        </ng-container>  \r\n      </ion-radio-group>\r\n      <ion-item lines=\"none\" (click)=\"addNewCard = true\">\r\n        <ion-icon size=\"large\" name=\"add-circle-outline\" color=\"orange\" slot=\"start\"></ion-icon>\r\n        <ion-label color=\"orange\" style=\"color: #ff6000;\">ADD NEW CARD</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\" color=\"white\">\r\n  <div class=\"cardAvailable\" style=\"margin: 10px;\" *ngIf=\"!addNewCard && sourceId !== ''\">\r\n    <ion-button [disabled]=\"loader\" mode=\"ios\" size=\"default\" expand=\"block\" (click)=\"checkoutPayment()\">\r\n      <ng-container *ngIf=\"!loader\"> Pay AED {{payableAmount}}</ng-container> \r\n      <ion-spinner mode=\"md\" *ngIf=\"loader\"></ion-spinner>\r\n    </ion-button>\r\n  </div>\r\n  <!-- <ion-item lines=\"none\">\r\n    <button class=\"getPackage\" (click)=\"checkoutPayment()\">\r\n      <ng-container *ngIf=\"!loader\">\r\n        Continue for Payment\r\n      </ng-container>\r\n      <ion-spinner color=\"white\" *ngIf=\"loader\"></ion-spinner>\r\n    </button>\r\n  </ion-item> -->\r\n</ion-footer>");

/***/ }),

/***/ 9071:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/package/package-details/package-details.component.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" color=\"white\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-buttons slot=\"start\" [routerLink]=\"['/home']\">\r\n        <ion-back-button color=\"orange\" text=\"\"></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-buttons>\r\n    <ion-title color=\"orange\">Packages Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\" [scrollEvents]=\"true\" >\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <div class=\"dicount-cart\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"7\" class=\"ion-text-center one_half\">\r\n                <h1>{{amountWithDiscount}} AED</h1>\r\n                <h4><s>{{amount}} AED</s></h4>\r\n              </ion-col>\r\n              <ion-col size=\"5\" class=\"ion-text-center two_half\">\r\n                <h4>{{flatDiscount}}%</h4>\r\n                <h6>Flat Discount</h6>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\">\r\n        <div class=\"card-details\">\r\n          <h5>Package Name: {{packageName}}</h5>\r\n          <h5>Package Validity: {{packageValidity}} Days</h5>\r\n          <h5>No of Check-ins Allowed: {{checkIns}}</h5>\r\n          <h5>No of Free Hours to Meeting: {{hours}} Hours</h5>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" *ngIf=\"features.length !== 0\">\r\n        <div class=\"card-details\">\r\n          <h6>Amenities for selected package</h6>\r\n          <div>\r\n            <ng-container *ngFor=\"let item of features\">\r\n              <ion-badge color=\"orange\">{{item.name}}</ion-badge>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" *ngIf=\"beverage.length !== 0\">\r\n        <div class=\"card-details\">\r\n          <h6>Beverage</h6>\r\n          <div>\r\n            <ng-container *ngFor=\"let item of beverage\">\r\n              <ion-chip color=\"orange\">\r\n                <img src=\"{{item.icon}}\" alt=\"\">\r\n                <ion-label>{{item.name}}</ion-label>\r\n              </ion-chip>\r\n            </ng-container>\r\n              <!-- <ion-badge color=\"orange\">{{item.name}}</ion-badge> -->\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" *ngIf=\"information !== '' && information !== undefined\">\r\n        <div class=\"card-details\">\r\n          <h6>Additional Info</h6>\r\n          <div [innerHTML]=\"information\"></div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\" color=\"white\">\r\n  <ion-item lines=\"none\">\r\n    <ion-chip slot=\"start\" id=\"likeSection\" (click)=\"like()\">\r\n      <ion-icon color=\"orange\" class=\"ion\" name=\"heart-outline\" id=\"likeIcon\"></ion-icon>\r\n    </ion-chip>\r\n    <ion-chip slot=\"start\" id=\"unlikeSection\" style=\"display: none;\" (click)=\"unlike()\">\r\n      <ion-icon color=\"orange\" class=\"ion\" name=\"heart\" id=\"unlikeIcon\"></ion-icon>\r\n    </ion-chip> \r\n    <button class=\"getPackage\" (click)=\"checkout()\">Get Package</button>\r\n  </ion-item>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_package_package_module_ts.js.map