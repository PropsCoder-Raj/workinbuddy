(self["webpackChunkworkinbuddy"] = self["webpackChunkworkinbuddy"] || []).push([["default-src_app_profile_profile_module_ts"],{

/***/ 7486:
/*!********************************************************************!*\
  !*** ./src/app/profile/active-package/active-package.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivePackageComponent": () => (/* binding */ ActivePackageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_active_package_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./active-package.component.html */ 2755);
/* harmony import */ var _active_package_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./active-package.component.scss */ 6732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/__helper/user.service */ 5875);







let ActivePackageComponent = class ActivePackageComponent {
    constructor(auth, firestore, userS) {
        this.auth = auth;
        this.firestore = firestore;
        this.userS = userS;
        this.activePackageStatus = false;
        this.amount = 0;
        this.amountWithDiscount = 0;
        this.flatDiscount = 0;
        this.packageName = '';
        this.packageValidity = '';
        this.checkIns = 0;
        this.hours = 0;
        this.features = [];
        this.information = '';
        this.userCheckins = '';
    }
    ngOnInit() {
        this.firestore.collection("userActivePackage", ref => ref.where("uid", '==', this.userS.userUID)).get().subscribe(result => {
            if (result.size > 0) {
                this.activePackageStatus = true;
                result.docs.map((docs) => {
                    let data = docs.data();
                    this.userCheckins = data.availableCheckins;
                    this.firestore.collection('packages', ref => ref.where("docId", "==", data.packageId)).get().subscribe(result => {
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
                        });
                    });
                });
            }
            else {
                this.activePackageStatus = false;
            }
        });
    }
};
ActivePackageComponent.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore },
    { type: src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
ActivePackageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-active-package',
        template: _raw_loader_active_package_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_active_package_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ActivePackageComponent);



/***/ }),

/***/ 6147:
/*!********************************************************************************!*\
  !*** ./src/app/profile/auto-renewal-history/auto-renewal-history.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoRenewalHistoryComponent": () => (/* binding */ AutoRenewalHistoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_auto_renewal_history_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./auto-renewal-history.component.html */ 8766);
/* harmony import */ var _auto_renewal_history_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auto-renewal-history.component.scss */ 1944);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/__helper/user.service */ 5875);









let AutoRenewalHistoryComponent = class AutoRenewalHistoryComponent {
    constructor(toastController, auth, firestore, router, userS) {
        this.toastController = toastController;
        this.auth = auth;
        this.firestore = firestore;
        this.router = router;
        this.userS = userS;
        this.historyStatus = false;
        this.historyArr = [];
        this.skeletonStatus = false;
        this.loader = false;
    }
    ngOnInit() {
        this.firestore.collection('autoRenewals', ref => ref.orderBy("timestamp", "desc").where("uid", '==', this.userS.userUID).limit(50)).get().subscribe(result => {
            if (result.size > 0) {
                this.skeletonStatus = true;
                result.docs.map((docs) => {
                    let data = docs.data();
                    this.firestore.collection("packages", ref => ref.where("docId", "==", data.packageId)).get().subscribe(result => {
                        if (result.size > 0) {
                            result.docs.map((docs) => {
                                docs.data().features.forEach(element => {
                                    this.firestore.collection('featuresMaster', ref => ref.where("docId", "==", element['docId'])).get().subscribe(result1 => {
                                        let features = [];
                                        result1.docs.map((data) => {
                                            if (result1.size !== features.length) {
                                                features.push({ name: data.data().name });
                                            }
                                        });
                                        this.historyArr.push({ data: data, packageData: docs.data(), features: features });
                                        if (result.size === this.historyArr.length) {
                                            this.skeletonStatus = false;
                                        }
                                    });
                                });
                            });
                        }
                    });
                });
            }
        });
    }
    errorPresentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                mode: 'ios',
                duration: 2000,
                color: "danger"
            });
            toast.present();
        });
    }
    delete(docId) {
        this.loader = true;
        this.firestore.collection('autoRenewals').doc(docId).delete().then(res => {
            this.loader = false;
            this.errorPresentToast("Cancel Auto Renewal");
            this.router.navigate(['/profile']);
        });
    }
};
AutoRenewalHistoryComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
AutoRenewalHistoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-auto-renewal-history',
        template: _raw_loader_auto_renewal_history_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_auto_renewal_history_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AutoRenewalHistoryComponent);



/***/ }),

/***/ 2375:
/*!************************************************************************!*\
  !*** ./src/app/profile/checkins-history/checkins-history.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckinsHistoryComponent": () => (/* binding */ CheckinsHistoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_checkins_history_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./checkins-history.component.html */ 8623);
/* harmony import */ var _checkins_history_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkins-history.component.scss */ 2467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/__helper/user.service */ 5875);








let CheckinsHistoryComponent = class CheckinsHistoryComponent {
    constructor(auth, firestore, router, userS) {
        this.auth = auth;
        this.firestore = firestore;
        this.router = router;
        this.userS = userS;
        this.checkinsStatus = false;
        this.checkinsArr = [];
        this.skeletonStatus = false;
    }
    ngOnInit() {
        this.firestore.collection('userCheckins', ref => ref.orderBy("timestamp", "desc").where("uid", '==', this.userS.userUID).limit(50)).get().subscribe(result => {
            if (result.size > 0) {
                this.skeletonStatus = true;
                result.docs.map((docs) => {
                    let data = docs.data();
                    this.firestore.collection('venue', ref => ref.where("docId", '==', data.venueId)).get().subscribe(resultVenue => {
                        resultVenue.docs.map((docsVenue) => {
                            this.checkinsStatus = true;
                            let venueData = docsVenue.data();
                            this.checkinsArr.push({ data: data, venueData: venueData });
                            if (result.size === this.checkinsArr.length) {
                                this.skeletonStatus = false;
                            }
                        });
                    });
                });
            }
        });
    }
};
CheckinsHistoryComponent.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
CheckinsHistoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-checkins-history',
        template: _raw_loader_checkins_history_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_checkins_history_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CheckinsHistoryComponent);



/***/ }),

/***/ 5438:
/*!****************************************************************!*\
  !*** ./src/app/profile/my-favourite/my-favourite.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyFavouriteComponent": () => (/* binding */ MyFavouriteComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_my_favourite_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-favourite.component.html */ 8238);
/* harmony import */ var _my_favourite_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-favourite.component.scss */ 6602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/__helper/user.service */ 5875);









let MyFavouriteComponent = class MyFavouriteComponent {
    constructor(renderer, firestore, auth, router, userS, navCtrl) {
        this.renderer = renderer;
        this.firestore = firestore;
        this.auth = auth;
        this.router = router;
        this.userS = userS;
        this.navCtrl = navCtrl;
        this.venue = [];
        this.package = [];
        this.segmentValue = 'Venue';
        this.scalatonV = false;
        this.scalatonP = false;
    }
    ngOnInit() {
        this.firestore.collection("favourite", ref => ref.where("uid", '==', this.userS.userUID).where("type", "==", "venue")).get().subscribe(result => {
            if (result.size > 0) {
                this.scalatonV = true;
                result.docs.map((docs) => {
                    this.firestore.collection('venue', ref => ref.where("docId", '==', docs.data().venueId)).get().subscribe(result1 => {
                        result1.docs.map((docs1) => {
                            this.firestore.collection('venue').doc(docs1.id).collection('media').get().subscribe(result2 => {
                                let service = [];
                                result2.docs.map((data) => {
                                    if (result2.size !== service.length) {
                                        service.push(data.data());
                                    }
                                });
                                this.venue.push({ data: docs1.data(), services: service });
                                if (result.size === this.venue.length) {
                                    this.scalatonV = false;
                                }
                            });
                        });
                    });
                });
            }
        });
        this.firestore.collection("favourite", ref => ref.where("uid", '==', this.userS.userUID).where("type", "==", "package")).get().subscribe(result => {
            if (result.size > 0) {
                this.scalatonP = true;
                result.docs.map((docs) => {
                    this.firestore.collection("packages", ref => ref.where("docId", "==", docs.data().packageId)).get().subscribe(result => {
                        if (result.size > 0) {
                            result.docs.map((docs) => {
                                docs.data().features.forEach(element => {
                                    this.firestore.collection('featuresMaster', ref => ref.where("docId", "==", element['docId'])).get().subscribe(result1 => {
                                        let features = [];
                                        result1.docs.map((data) => {
                                            if (result1.size !== features.length) {
                                                features.push({ name: data.data().name });
                                            }
                                        });
                                        this.package.push({ data: docs.data(), features: features });
                                        if (result.size === this.package.length) {
                                            this.scalatonP = false;
                                        }
                                    });
                                });
                            });
                        }
                    });
                });
            }
        });
    }
    packageDetails(docId) {
        this.router.navigate(['/package-details'], {
            queryParams: { docId: docId }
        });
    }
    segmentChanged(ev) {
        this.segmentValue = ev.detail.value;
    }
    venueDetails(docId) {
        this.navCtrl.navigateForward('/venue/venue-details/' + docId);
    }
};
MyFavouriteComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2 },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController }
];
MyFavouriteComponent.propDecorators = {
    toolbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ["toolbar", { static: false },] }],
    theContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent,] }]
};
MyFavouriteComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-my-favourite',
        template: _raw_loader_my_favourite_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_favourite_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyFavouriteComponent);



/***/ }),

/***/ 3041:
/*!**********************************************************************!*\
  !*** ./src/app/profile/package-history/package-history.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackageHistoryComponent": () => (/* binding */ PackageHistoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_package_history_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./package-history.component.html */ 4218);
/* harmony import */ var _package_history_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package-history.component.scss */ 8821);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/__helper/user.service */ 5875);








let PackageHistoryComponent = class PackageHistoryComponent {
    constructor(auth, firestore, router, userS) {
        this.auth = auth;
        this.firestore = firestore;
        this.router = router;
        this.userS = userS;
        this.historyStatus = false;
        this.historyArr = [];
        this.skeletonStatus = false;
    }
    ngOnInit() {
        this.firestore.collection('userHistory', ref => ref.orderBy("timestamp", "desc").where("uid", '==', this.userS.userUID).limit(50)).get().subscribe(result => {
            if (result.size > 0) {
                this.skeletonStatus = true;
                result.docs.map((docs) => {
                    let data = docs.data();
                    let type = data.type;
                    if (type === 'package') {
                        this.firestore.collection('packages', ref => ref.where("docId", '==', data.packageId)).get().subscribe(resultPackage => {
                            resultPackage.docs.map((docsPackage) => {
                                this.historyStatus = true;
                                let packageData = docsPackage.data();
                                this.historyArr.push({ data: data, packageData: packageData });
                                if (result.size === this.historyArr.length) {
                                    this.skeletonStatus = false;
                                }
                            });
                        });
                    }
                });
            }
        });
    }
};
PackageHistoryComponent.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
PackageHistoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-package-history',
        template: _raw_loader_package_history_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_package_history_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PackageHistoryComponent);



/***/ }),

/***/ 6829:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileRoutingModule": () => (/* binding */ ProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _active_package_active_package_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./active-package/active-package.component */ 7486);
/* harmony import */ var _auto_renewal_history_auto_renewal_history_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auto-renewal-history/auto-renewal-history.component */ 6147);
/* harmony import */ var _checkins_history_checkins_history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkins-history/checkins-history.component */ 2375);
/* harmony import */ var _my_favourite_my_favourite_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-favourite/my-favourite.component */ 5438);
/* harmony import */ var _package_history_package_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./package-history/package-history.component */ 3041);
/* harmony import */ var _profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/edit-profile/edit-profile.component */ 7748);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ 1480);
/* harmony import */ var _wallet_history_wallet_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wallet-history/wallet-history.component */ 573);











const routes = [
    {
        path: '',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__.ProfileComponent
    },
    {
        path: 'edit-profile',
        component: _profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_5__.EditProfileComponent
    },
    {
        path: 'active-package',
        component: _active_package_active_package_component__WEBPACK_IMPORTED_MODULE_0__.ActivePackageComponent
    },
    {
        path: 'checkins-history',
        component: _checkins_history_checkins_history_component__WEBPACK_IMPORTED_MODULE_2__.CheckinsHistoryComponent
    },
    {
        path: 'package-history',
        component: _package_history_package_history_component__WEBPACK_IMPORTED_MODULE_4__.PackageHistoryComponent
    },
    {
        path: 'wallet-history',
        component: _wallet_history_wallet_history_component__WEBPACK_IMPORTED_MODULE_7__.WalletHistoryComponent
    },
    {
        path: 'auto-renewal-history',
        component: _auto_renewal_history_auto_renewal_history_component__WEBPACK_IMPORTED_MODULE_1__.AutoRenewalHistoryComponent
    },
    {
        path: 'my-favourite',
        component: _my_favourite_my_favourite_component__WEBPACK_IMPORTED_MODULE_3__.MyFavouriteComponent
    }
];
let ProfileRoutingModule = class ProfileRoutingModule {
};
ProfileRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
    })
], ProfileRoutingModule);



/***/ }),

/***/ 4523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModule": () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 6829);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/profile.component */ 1480);
/* harmony import */ var _profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/edit-profile/edit-profile.component */ 7748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _active_package_active_package_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./active-package/active-package.component */ 7486);
/* harmony import */ var _checkins_history_checkins_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkins-history/checkins-history.component */ 2375);
/* harmony import */ var _package_history_package_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./package-history/package-history.component */ 3041);
/* harmony import */ var _wallet_history_wallet_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wallet-history/wallet-history.component */ 573);
/* harmony import */ var _auto_renewal_history_auto_renewal_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auto-renewal-history/auto-renewal-history.component */ 6147);
/* harmony import */ var _my_favourite_my_favourite_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-favourite/my-favourite.component */ 5438);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 476);














let ProfileModule = class ProfileModule {
};
ProfileModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent,
            _profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__.EditProfileComponent,
            _active_package_active_package_component__WEBPACK_IMPORTED_MODULE_3__.ActivePackageComponent,
            _checkins_history_checkins_history_component__WEBPACK_IMPORTED_MODULE_4__.CheckinsHistoryComponent,
            _package_history_package_history_component__WEBPACK_IMPORTED_MODULE_5__.PackageHistoryComponent,
            _wallet_history_wallet_history_component__WEBPACK_IMPORTED_MODULE_6__.WalletHistoryComponent,
            _auto_renewal_history_auto_renewal_history_component__WEBPACK_IMPORTED_MODULE_7__.AutoRenewalHistoryComponent,
            _my_favourite_my_favourite_component__WEBPACK_IMPORTED_MODULE_8__.MyFavouriteComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule
        ]
    })
], ProfileModule);



/***/ }),

/***/ 7748:
/*!************************************************************************!*\
  !*** ./src/app/profile/profile/edit-profile/edit-profile.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfileComponent": () => (/* binding */ EditProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_edit_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-profile.component.html */ 8284);
/* harmony import */ var _edit_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.component.scss */ 6623);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/storage */ 3893);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.component */ 5041);
/* harmony import */ var src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/__helper/user.service */ 5875);











let EditProfileComponent = class EditProfileComponent {
    constructor(router, angularAuth, firestore, toastController, storage, loadingController, appC, userS, modelController, navCtrl) {
        this.router = router;
        this.angularAuth = angularAuth;
        this.firestore = firestore;
        this.toastController = toastController;
        this.storage = storage;
        this.loadingController = loadingController;
        this.appC = appC;
        this.userS = userS;
        this.modelController = modelController;
        this.navCtrl = navCtrl;
        // @ViewChild(AppComponent) app;
        this.name = '';
        this.photoURL = 'assets/img/profilePhoto.png';
        this.email = '';
        this.phoneNumber = '';
        this.docId = '';
        this.provider = '';
        this.age = '';
        this.gender = '';
        this.country = '';
        this.dob = '';
        this.photo = '';
        this.countries = [{ "name": "Afghanistan", "code": "AF" }, { "name": "land Islands", "code": "AX" }, { "name": "Albania", "code": "AL" }, { "name": "Algeria", "code": "DZ" }, { "name": "American Samoa", "code": "AS" }, { "name": "AndorrA", "code": "AD" }, { "name": "Angola", "code": "AO" }, { "name": "Anguilla", "code": "AI" }, { "name": "Antarctica", "code": "AQ" }, { "name": "Antigua and Barbuda", "code": "AG" }, { "name": "Argentina", "code": "AR" }, { "name": "Armenia", "code": "AM" }, { "name": "Aruba", "code": "AW" }, { "name": "Australia", "code": "AU" }, { "name": "Austria", "code": "AT" }, { "name": "Azerbaijan", "code": "AZ" }, { "name": "Bahamas", "code": "BS" }, { "name": "Bahrain", "code": "BH" }, { "name": "Bangladesh", "code": "BD" }, { "name": "Barbados", "code": "BB" }, { "name": "Belarus", "code": "BY" }, { "name": "Belgium", "code": "BE" }, { "name": "Belize", "code": "BZ" }, { "name": "Benin", "code": "BJ" }, { "name": "Bermuda", "code": "BM" }, { "name": "Bhutan", "code": "BT" }, { "name": "Bolivia", "code": "BO" }, { "name": "Bosnia and Herzegovina", "code": "BA" }, { "name": "Botswana", "code": "BW" }, { "name": "Bouvet Island", "code": "BV" }, { "name": "Brazil", "code": "BR" }, { "name": "British Indian Ocean Territory", "code": "IO" }, { "name": "Brunei Darussalam", "code": "BN" }, { "name": "Bulgaria", "code": "BG" }, { "name": "Burkina Faso", "code": "BF" }, { "name": "Burundi", "code": "BI" }, { "name": "Cambodia", "code": "KH" }, { "name": "Cameroon", "code": "CM" }, { "name": "Canada", "code": "CA" }, { "name": "Cape Verde", "code": "CV" }, { "name": "Cayman Islands", "code": "KY" }, { "name": "Central African Republic", "code": "CF" }, { "name": "Chad", "code": "TD" }, { "name": "Chile", "code": "CL" }, { "name": "China", "code": "CN" }, { "name": "Christmas Island", "code": "CX" }, { "name": "Cocos (Keeling) Islands", "code": "CC" }, { "name": "Colombia", "code": "CO" }, { "name": "Comoros", "code": "KM" }, { "name": "Congo", "code": "CG" }, { "name": "Congo, The Democratic Republic of the", "code": "CD" }, { "name": "Cook Islands", "code": "CK" }, { "name": "Costa Rica", "code": "CR" }, { "name": "Cote D'Ivoire", "code": "CI" }, { "name": "Croatia", "code": "HR" }, { "name": "Cuba", "code": "CU" }, { "name": "Cyprus", "code": "CY" }, { "name": "Czech Republic", "code": "CZ" }, { "name": "Denmark", "code": "DK" }, { "name": "Djibouti", "code": "DJ" }, { "name": "Dominica", "code": "DM" }, { "name": "Dominican Republic", "code": "DO" }, { "name": "Ecuador", "code": "EC" }, { "name": "Egypt", "code": "EG" }, { "name": "El Salvador", "code": "SV" }, { "name": "Equatorial Guinea", "code": "GQ" }, { "name": "Eritrea", "code": "ER" }, { "name": "Estonia", "code": "EE" }, { "name": "Ethiopia", "code": "ET" }, { "name": "Falkland Islands (Malvinas)", "code": "FK" }, { "name": "Faroe Islands", "code": "FO" }, { "name": "Fiji", "code": "FJ" }, { "name": "Finland", "code": "FI" }, { "name": "France", "code": "FR" }, { "name": "French Guiana", "code": "GF" }, { "name": "French Polynesia", "code": "PF" }, { "name": "French Southern Territories", "code": "TF" }, { "name": "Gabon", "code": "GA" }, { "name": "Gambia", "code": "GM" }, { "name": "Georgia", "code": "GE" }, { "name": "Germany", "code": "DE" }, { "name": "Ghana", "code": "GH" }, { "name": "Gibraltar", "code": "GI" }, { "name": "Greece", "code": "GR" }, { "name": "Greenland", "code": "GL" }, { "name": "Grenada", "code": "GD" }, { "name": "Guadeloupe", "code": "GP" }, { "name": "Guam", "code": "GU" }, { "name": "Guatemala", "code": "GT" }, { "name": "Guernsey", "code": "GG" }, { "name": "Guinea", "code": "GN" }, { "name": "Guinea-Bissau", "code": "GW" }, { "name": "Guyana", "code": "GY" }, { "name": "Haiti", "code": "HT" }, { "name": "Heard Island and Mcdonald Islands", "code": "HM" }, { "name": "Holy See (Vatican City State)", "code": "VA" }, { "name": "Honduras", "code": "HN" }, { "name": "Hong Kong", "code": "HK" }, { "name": "Hungary", "code": "HU" }, { "name": "Iceland", "code": "IS" }, { "name": "India", "code": "IN" }, { "name": "Indonesia", "code": "ID" }, { "name": "Iran, Islamic Republic Of", "code": "IR" }, { "name": "Iraq", "code": "IQ" }, { "name": "Ireland", "code": "IE" }, { "name": "Isle of Man", "code": "IM" }, { "name": "Israel", "code": "IL" }, { "name": "Italy", "code": "IT" }, { "name": "Jamaica", "code": "JM" }, { "name": "Japan", "code": "JP" }, { "name": "Jersey", "code": "JE" }, { "name": "Jordan", "code": "JO" }, { "name": "Kazakhstan", "code": "KZ" }, { "name": "Kenya", "code": "KE" }, { "name": "Kiribati", "code": "KI" }, { "name": "Korea, Democratic People'S Republic of", "code": "KP" }, { "name": "Korea, Republic of", "code": "KR" }, { "name": "Kuwait", "code": "KW" }, { "name": "Kyrgyzstan", "code": "KG" }, { "name": "Lao People'S Democratic Republic", "code": "LA" }, { "name": "Latvia", "code": "LV" }, { "name": "Lebanon", "code": "LB" }, { "name": "Lesotho", "code": "LS" }, { "name": "Liberia", "code": "LR" }, { "name": "Libyan Arab Jamahiriya", "code": "LY" }, { "name": "Liechtenstein", "code": "LI" }, { "name": "Lithuania", "code": "LT" }, { "name": "Luxembourg", "code": "LU" }, { "name": "Macao", "code": "MO" }, { "name": "Macedonia, The Former Yugoslav Republic of", "code": "MK" }, { "name": "Madagascar", "code": "MG" }, { "name": "Malawi", "code": "MW" }, { "name": "Malaysia", "code": "MY" }, { "name": "Maldives", "code": "MV" }, { "name": "Mali", "code": "ML" }, { "name": "Malta", "code": "MT" }, { "name": "Marshall Islands", "code": "MH" }, { "name": "Martinique", "code": "MQ" }, { "name": "Mauritania", "code": "MR" }, { "name": "Mauritius", "code": "MU" }, { "name": "Mayotte", "code": "YT" }, { "name": "Mexico", "code": "MX" }, { "name": "Micronesia, Federated States of", "code": "FM" }, { "name": "Moldova, Republic of", "code": "MD" }, { "name": "Monaco", "code": "MC" }, { "name": "Mongolia", "code": "MN" }, { "name": "Montenegro", "code": "ME" }, { "name": "Montserrat", "code": "MS" }, { "name": "Morocco", "code": "MA" }, { "name": "Mozambique", "code": "MZ" }, { "name": "Myanmar", "code": "MM" }, { "name": "Namibia", "code": "NA" }, { "name": "Nauru", "code": "NR" }, { "name": "Nepal", "code": "NP" }, { "name": "Netherlands", "code": "NL" }, { "name": "Netherlands Antilles", "code": "AN" }, { "name": "New Caledonia", "code": "NC" }, { "name": "New Zealand", "code": "NZ" }, { "name": "Nicaragua", "code": "NI" }, { "name": "Niger", "code": "NE" }, { "name": "Nigeria", "code": "NG" }, { "name": "Niue", "code": "NU" }, { "name": "Norfolk Island", "code": "NF" }, { "name": "Northern Mariana Islands", "code": "MP" }, { "name": "Norway", "code": "NO" }, { "name": "Oman", "code": "OM" }, { "name": "Pakistan", "code": "PK" }, { "name": "Palau", "code": "PW" }, { "name": "Palestinian Territory, Occupied", "code": "PS" }, { "name": "Panama", "code": "PA" }, { "name": "Papua New Guinea", "code": "PG" }, { "name": "Paraguay", "code": "PY" }, { "name": "Peru", "code": "PE" }, { "name": "Philippines", "code": "PH" }, { "name": "Pitcairn", "code": "PN" }, { "name": "Poland", "code": "PL" }, { "name": "Portugal", "code": "PT" }, { "name": "Puerto Rico", "code": "PR" }, { "name": "Qatar", "code": "QA" }, { "name": "Reunion", "code": "RE" }, { "name": "Romania", "code": "RO" }, { "name": "Russian Federation", "code": "RU" }, { "name": "RWANDA", "code": "RW" }, { "name": "Saint Helena", "code": "SH" }, { "name": "Saint Kitts and Nevis", "code": "KN" }, { "name": "Saint Lucia", "code": "LC" }, { "name": "Saint Pierre and Miquelon", "code": "PM" }, { "name": "Saint Vincent and the Grenadines", "code": "VC" }, { "name": "Samoa", "code": "WS" }, { "name": "San Marino", "code": "SM" }, { "name": "Sao Tome and Principe", "code": "ST" }, { "name": "Saudi Arabia", "code": "SA" }, { "name": "Senegal", "code": "SN" }, { "name": "Serbia", "code": "RS" }, { "name": "Seychelles", "code": "SC" }, { "name": "Sierra Leone", "code": "SL" }, { "name": "Singapore", "code": "SG" }, { "name": "Slovakia", "code": "SK" }, { "name": "Slovenia", "code": "SI" }, { "name": "Solomon Islands", "code": "SB" }, { "name": "Somalia", "code": "SO" }, { "name": "South Africa", "code": "ZA" }, { "name": "South Georgia and the South Sandwich Islands", "code": "GS" }, { "name": "Spain", "code": "ES" }, { "name": "Sri Lanka", "code": "LK" }, { "name": "Sudan", "code": "SD" }, { "name": "Suriname", "code": "SR" }, { "name": "Svalbard and Jan Mayen", "code": "SJ" }, { "name": "Swaziland", "code": "SZ" }, { "name": "Sweden", "code": "SE" }, { "name": "Switzerland", "code": "CH" }, { "name": "Syrian Arab Republic", "code": "SY" }, { "name": "Taiwan, Province of China", "code": "TW" }, { "name": "Tajikistan", "code": "TJ" }, { "name": "Tanzania, United Republic of", "code": "TZ" }, { "name": "Thailand", "code": "TH" }, { "name": "Timor-Leste", "code": "TL" }, { "name": "Togo", "code": "TG" }, { "name": "Tokelau", "code": "TK" }, { "name": "Tonga", "code": "TO" }, { "name": "Trinidad and Tobago", "code": "TT" }, { "name": "Tunisia", "code": "TN" }, { "name": "Turkey", "code": "TR" }, { "name": "Turkmenistan", "code": "TM" }, { "name": "Turks and Caicos Islands", "code": "TC" }, { "name": "Tuvalu", "code": "TV" }, { "name": "Uganda", "code": "UG" }, { "name": "Ukraine", "code": "UA" }, { "name": "United Arab Emirates", "code": "AE" }, { "name": "United Kingdom", "code": "GB" }, { "name": "United States", "code": "US" }, { "name": "United States Minor Outlying Islands", "code": "UM" }, { "name": "Uruguay", "code": "UY" }, { "name": "Uzbekistan", "code": "UZ" }, { "name": "Vanuatu", "code": "VU" }, { "name": "Venezuela", "code": "VE" }, { "name": "Viet Nam", "code": "VN" }, { "name": "Virgin Islands, British", "code": "VG" }, { "name": "Virgin Islands, U.S.", "code": "VI" }, { "name": "Wallis and Futuna", "code": "WF" }, { "name": "Western Sahara", "code": "EH" }, { "name": "Yemen", "code": "YE" }, { "name": "Zambia", "code": "ZM" }, { "name": "Zimbabwe", "code": "ZW" }];
        this.mendatory = false;
        this.loader = false;
    }
    ngOnInit() {
        console.log(this.router.isActive('checkout', false));
        if (this.userS.userUID !== '') {
            this.name = this.userS.userName;
            this.docId = this.userS.userDocId;
            this.provider = this.userS.userProvider;
            this.photoURL = this.userS.userPhotoUrl;
            this.email = this.userS.userEmail;
            this.phoneNumber = this.userS.userPhoneNumber;
            this.age = this.userS.userAge === undefined ? '' : this.userS.userAge;
            this.gender = this.userS.userGender === undefined ? '' : this.userS.userGender;
            this.country = this.userS.userCountry === undefined ? '' : this.userS.userCountry;
            this.dob = this.userS.userDob === undefined ? '' : this.userS.userDob;
        }
    }
    ionViewWillEnter() {
        this.mendatory = false;
        this.loader = false;
    }
    successPresentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                mode: 'ios',
                duration: 2000,
            });
            toast.present();
        });
    }
    errorPresentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                mode: 'ios',
                duration: 2000,
                color: 'danger'
            });
            toast.present();
        });
    }
    editProfile() {
        if (this.name !== '' && this.email !== '' && this.phoneNumber !== '') {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(this.email) == false) {
                this.errorPresentToast("Please! Enter valid email.");
            }
            else {
                this.loader = true;
                this.firestore.collection('users').doc(this.docId).update({
                    name: this.name,
                    email: this.email,
                    photoURL: this.photoURL,
                    phoneNumber: this.phoneNumber,
                    age: Number(this.age),
                    gender: this.gender,
                    country: this.country,
                    dob: this.dob,
                }).then(res => {
                    this.userS.userPhotoUrl = this.photoURL;
                    this.userS.userName = this.name;
                    this.userS.userEmail = this.email;
                    this.userS.userPhoneNumber = this.phoneNumber;
                    this.userS.userAge = this.age,
                        this.userS.userGender = this.gender,
                        this.userS.userCountry = this.country,
                        this.userS.userDob = this.dob,
                        this.mendatory = false;
                    setTimeout(() => {
                        if (this.router.isActive('package-details/checkout', false)) {
                            this.loader = false;
                            this.modelController.dismiss();
                        }
                        else {
                            this.loader = false;
                            this.successPresentToast("Profile Updated");
                            this.router.navigate(['/profile']);
                        }
                    }, 1500);
                });
            }
        }
        else {
            this.mendatory = true;
            this.errorPresentToast("All fields mendatory");
        }
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Uploading Image',
                mode: 'ios'
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    onImageSelected(event) {
        this.photo = event.target.files[0];
        const newId = this.firestore.createId();
        let imageName = newId + "_" + this.photo['name'];
        this.presentLoading();
        let ref = this.storage.ref('profile').child(imageName);
        ref.put(this.photo).then(res => {
            const reg = this.storage.ref('profile/' + imageName);
            reg.getDownloadURL().subscribe(val => {
                this.photoURL = val;
                this.loadingController.dismiss().then(a => console.log('dismissed'));
            });
        });
    }
};
EditProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_9__.AngularFireStorage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent },
    { type: src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController }
];
EditProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-edit-profile',
        template: _raw_loader_edit_profile_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditProfileComponent);



/***/ }),

/***/ 1480:
/*!******************************************************!*\
  !*** ./src/app/profile/profile/profile.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.component.html */ 5044);
/* harmony import */ var _profile_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component.scss */ 4746);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/__helper/user.service */ 5875);








let ProfileComponent = class ProfileComponent {
    constructor(angularAuth, firestore, router, userS) {
        this.angularAuth = angularAuth;
        this.firestore = firestore;
        this.router = router;
        this.userS = userS;
        this.name = '';
        this.photoURL = '';
        this.email = '';
        this.phoneNumber = '';
        this.segmentValue = '1';
    }
    ngOnInit() {
    }
    editProfile() {
        this.router.navigate(['/profile/edit-profile'], {
            queryParams: {}
        });
    }
    segmentChanged(e) {
        this.segmentValue = e.detail.value;
    }
    logout() {
        this.angularAuth.signOut().then(() => {
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
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
ProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfileComponent);



/***/ }),

/***/ 573:
/*!********************************************************************!*\
  !*** ./src/app/profile/wallet-history/wallet-history.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletHistoryComponent": () => (/* binding */ WalletHistoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_wallet_history_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./wallet-history.component.html */ 3379);
/* harmony import */ var _wallet_history_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet-history.component.scss */ 4304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/__helper/user.service */ 5875);








let WalletHistoryComponent = class WalletHistoryComponent {
    constructor(auth, firestore, router, userS) {
        this.auth = auth;
        this.firestore = firestore;
        this.router = router;
        this.userS = userS;
        this.historyStatus = false;
        this.historyArr = [];
        this.skeletonStatus = false;
    }
    ngOnInit() {
        this.firestore.collection('walletHistory', ref => ref.orderBy("timestamp", "desc").where("uid", '==', this.userS.userUID).limit(50)).get().subscribe(result => {
            if (result.size > 0) {
                this.skeletonStatus = true;
                result.docs.map((docs) => {
                    let data = docs.data();
                    if (data.type === 'referalCodeApply') {
                        this.firestore.collection("users", ref => ref.where('uid', '==', data.userApplyUid)).get().subscribe(resultUser => {
                            resultUser.docs.map((user) => {
                                this.historyStatus = true;
                                this.historyArr.push({ time: data.timestamp, amount: data.amount, userName: user.data().name, type: data.type });
                            });
                            if (result.size === this.historyArr.length) {
                                this.skeletonStatus = false;
                            }
                        });
                    }
                });
            }
        });
    }
};
WalletHistoryComponent.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
WalletHistoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-wallet-history',
        template: _raw_loader_wallet_history_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_wallet_history_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WalletHistoryComponent);



/***/ }),

/***/ 6732:
/*!**********************************************************************!*\
  !*** ./src/app/profile/active-package/active-package.component.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header ion-toolbar ion-icon {\n  font-size: x-large;\n  font-weight: bold;\n}\nion-header ion-toolbar ion-text {\n  padding-left: 15px;\n  font-weight: bold;\n  font-size: medium;\n}\nion-content {\n  --padding-top:10px;\n}\nion-content h2 {\n  font-weight: bold;\n}\nion-content .container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\nion-content .container img {\n  height: 10rem;\n}\nion-content .container ion-icon {\n  font-size: 10rem;\n}\nion-content ion-grid .dicount-cart {\n  background: linear-gradient(to left bottom, #FF6000, #FFAA70);\n  background-size: contain;\n  height: 158px;\n  color: white;\n  border-radius: 20px;\n}\nion-content ion-grid .dicount-cart .one_half {\n  margin: 15px 0;\n  border-right: solid 1px #fff;\n}\nion-content ion-grid .dicount-cart .one_half h1 {\n  font-weight: bold;\n}\nion-content ion-grid .dicount-cart .two_half {\n  margin: 20px 0;\n}\nion-content ion-grid .card-details {\n  padding: 10px;\n  background: #fff;\n  border: 1px solid #FF6000;\n  box-sizing: border-box;\n  border-radius: 10px;\n}\nion-content ion-grid .card-details h6 {\n  padding: unset;\n  margin: unset;\n  font-style: normal;\n  font-weight: 500;\n  font-size: medium;\n  line-height: 35px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  color: #000000;\n}\nion-content ion-grid .card-details ion-badge {\n  padding: 5px 10px;\n  color: white;\n  margin: 5px 15px 5px 0;\n  border-radius: 15px;\n}\nion-content ion-grid .card-details .text-contain {\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2ZS1wYWNrYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtNO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUpSO0FBT007RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFMUjtBQVVBO0VBQ0ksa0JBQUE7QUFQSjtBQVFJO0VBQ0ksaUJBQUE7QUFOUjtBQVNJO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBUk47QUFVTTtFQUNFLGFBQUE7QUFSUjtBQVVNO0VBQ0ksZ0JBQUE7QUFSVjtBQWFRO0VBQ0ksNkRBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFYWjtBQVlZO0VBQ0ksY0FBQTtFQUNBLDRCQUFBO0FBVmhCO0FBWWdCO0VBQ0ksaUJBQUE7QUFWcEI7QUFjWTtFQUNJLGNBQUE7QUFaaEI7QUFnQlE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFFQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFmWjtBQWlCWTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFFQSxpQkFBQTtFQUNBLHNCQUFBO0VBRUEsY0FBQTtBQWpCaEI7QUFvQlk7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBbEJoQjtBQXFCWTtFQUNJLGdCQUFBO0FBbkJoQiIsImZpbGUiOiJhY3RpdmUtcGFja2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIFxyXG4gIFxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlvbi10ZXh0IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLXBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblxyXG4gICAgICBpbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgICAgfVxyXG4gICAgICBpb24taWNvbntcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTByZW07XHJcbiAgICAgIH1cclxuICAgIH0gIFxyXG5cclxuICAgIGlvbi1ncmlke1xyXG4gICAgICAgIC5kaWNvdW50LWNhcnR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0IGJvdHRvbSwgI0ZGNjAwMCwgI0ZGQUE3MCk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNThweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAub25lX2hhbGZ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNmZmY7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLnR3b19oYWxme1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuY2FyZC1kZXRhaWxze1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkY2MDAwO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIGg2e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBpb24tYmFkZ2V7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDE1cHggNXB4IDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLnRleHQtY29udGFpbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gICAgIl19 */");

/***/ }),

/***/ 1944:
/*!**********************************************************************************!*\
  !*** ./src/app/profile/auto-renewal-history/auto-renewal-history.component.scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header ion-toolbar ion-icon {\n  font-size: x-large;\n  font-weight: bold;\n}\nion-header ion-toolbar ion-text {\n  padding-left: 15px;\n  font-weight: bold;\n  font-size: medium;\n}\nion-content {\n  --padding-top:10px;\n}\nion-content h2 {\n  font-weight: bold;\n}\nion-content .packages .items {\n  padding: unset;\n}\nion-content .packages .items ion-card {\n  margin: 5px;\n  background: #FCF8F7;\n  box-shadow: unset;\n}\nion-content .packages .items ion-card ion-card-header {\n  padding: unset;\n}\nion-content .packages .items ion-card ion-card-header p {\n  text-align: center;\n  color: #FF8010;\n  font-weight: 600;\n  font-size: 16px;\n}\nion-content .packages .items ion-card ion-card-content {\n  padding: 5px;\n}\nion-content .packages .items ion-card ion-card-content p {\n  text-align: center;\n  color: #FF8010;\n  font-weight: 600;\n  font-size: 22px;\n}\nion-content .packages .items ion-card ion-card-content ion-row {\n  border-bottom: 1px solid #ffc299c4;\n}\nion-content .packages .items ion-card ion-card-content ion-row .col_1 {\n  padding: unset;\n}\nion-content .packages .items ion-card ion-card-content ion-row .col_1 ion-icon {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 50%;\n}\nion-content .container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\nion-content .container img {\n  height: 10rem;\n}\nion-content .package-list-search-contain {\n  --background: transparent !important;\n  padding: 5px 10px;\n  border-radius: 10px;\n}\nion-content .package-list-search-contain ion-icon {\n  color: white;\n  background: white;\n  font-size: xx-large;\n}\nion-content .package-list-search-contain ion-label {\n  font-size: medium;\n  color: white;\n  font-weight: 500;\n}\nion-content .package-list-search-contain .input-container {\n  /* IE10 */\n  display: flex;\n  width: 100%;\n  border-radius: 10px;\n}\nion-content .package-list-search-contain .icon {\n  padding: 5px 10px 10px 5px;\n  color: #FF6000;\n  text-align: center;\n  margin: 5px 0;\n  font-size: x-large;\n  border: solid 1px #FF6000;\n  border-left: unset;\n  border-bottom-right-radius: 10px;\n  border-top-right-radius: 10px;\n}\nion-content .package-list-search-contain .icon1 {\n  margin: 10px 0;\n  padding-left: 20px;\n  padding-right: unset;\n  background: white;\n  color: #FF6000;\n  text-align: center;\n  font-size: x-large;\n}\nion-content .package-list-search-contain .input-field {\n  width: 100%;\n  padding: 5px;\n  margin: 5px 0;\n  outline: unset;\n  border: solid 1px #FF6000;\n  border-right: unset;\n  border-bottom-left-radius: 10px;\n  border-top-left-radius: 10px;\n  font-weight: lighter;\n}\nion-content .package-list-search-contain .input-field ::placeholder {\n  color: #BDBDBD;\n}\nion-content .package-list-title-contain {\n  --background: transparent;\n}\nion-content .package-list-title-contain ion-label {\n  font-size: large;\n  font-family: \"Geometria\";\n}\nion-content .package-list-title-contain i {\n  color: #FF6000;\n  font-size: large;\n  border: solid 1px #FF6000;\n  border-radius: 5px;\n  padding: 5px;\n}\nion-content .venue-cards ion-card {\n  background: #FCF8F7;\n  border-radius: 10px;\n  box-shadow: unset;\n}\nion-content .venue-cards ion-card ion-card-header {\n  padding: unset;\n}\nion-content .venue-cards ion-card ion-card-header .orange_Slide {\n  text-align: center;\n}\nion-content .venue-cards ion-card ion-card-header .orange_Slide img, ion-content .venue-cards ion-card ion-card-header .orange_Slide video {\n  width: 100%;\n  height: 100px;\n  object-fit: unset;\n}\nion-content .venue-cards ion-card ion-card-content {\n  padding: 5px 8px;\n}\nion-content .venue-cards ion-card ion-card-content h2 {\n  font-size: small;\n  font-weight: 800;\n  color: #FF6000;\n  margin-bottom: unset;\n}\nion-content .venue-cards ion-card ion-card-content div ion-icon {\n  color: #666666;\n  font-size: x-small;\n}\nion-content .venue-cards ion-card ion-card-content h6 {\n  font-size: x-small;\n  color: #666666;\n}\nion-content .venue-cards ion-item {\n  border-bottom: 1px solid #FFD5A8;\n  margin: 10px 5px;\n}\nion-content .venue-cards ion-item ion-avatar {\n  height: 70px;\n  width: 70px;\n}\nion-content .venue-cards ion-item ion-avatar img {\n  border-radius: 5px;\n}\nion-content .venue-cards ion-item ion-label {\n  padding: 5px 0;\n}\nion-content .venue-cards ion-item ion-label h2 {\n  font-size: small;\n  color: #FF8010;\n}\nion-content .venue-cards ion-item ion-label h3 {\n  font-size: small;\n}\nion-content .venue-cards ion-item ion-label p {\n  color: black;\n  font-weight: 800;\n}\nion-content .venue-cards ion-item ion-icon {\n  color: #FCB735;\n}\nion-content ion-card {\n  background: linear-gradient(to right bottom, rgba(218, 210, 243, 0.2), rgba(251, 168, 164, 0.2) 74%);\n  border-radius: 25.5739px;\n  box-shadow: unset;\n}\nion-content ion-card img {\n  height: 156.85px;\n  width: 100%;\n}\nion-content ion-card ion-card-header {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\nion-content ion-card ion-card-header ion-card-subtitle {\n  text-align: left;\n  font-weight: bold;\n  color: #000;\n}\nion-content ion-card ion-card-content ion-col .location {\n  width: 100%;\n  display: block;\n}\nion-content ion-card ion-card-content ion-col .location ion-chip {\n  float: left;\n  padding: unset;\n  background: transparent;\n}\nion-content ion-card ion-card-content ion-col .location ion-chip i {\n  margin-right: 20px;\n  font-size: x-large;\n}\nion-content ion-card ion-card-content ion-col .star {\n  width: 100%;\n  display: block;\n}\nion-content ion-card ion-card-content ion-col .star ion-chip {\n  float: left;\n  padding-left: 5px;\n  background: transparent;\n}\nion-content ion-card ion-card-content ion-col .star ion-chip ion-icon {\n  color: #FCB735;\n  margin-right: 20px;\n  font-size: large;\n}\nion-content ion-card ion-card-content ion-col .details {\n  width: 100%;\n  display: block;\n}\nion-content ion-card ion-card-content ion-col .details ion-chip {\n  float: right;\n  padding: unset;\n  background: transparent;\n}\nion-content ion-card ion-card-content ion-col .details ion-chip i {\n  margin-right: 20px;\n  font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dG8tcmVuZXdhbC1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtNO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUpSO0FBT007RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFMUjtBQVVBO0VBQ0ksa0JBQUE7QUFQSjtBQVFJO0VBQ0ksaUJBQUE7QUFOUjtBQVVNO0VBQ0UsY0FBQTtBQVJSO0FBU1E7RUFDRSxXQUFBO0VBQVksbUJBQUE7RUFBb0IsaUJBQUE7QUFMMUM7QUFNVTtFQUNFLGNBQUE7QUFKWjtBQUtZO0VBQ0Usa0JBQUE7RUFBbUIsY0FBQTtFQUFlLGdCQUFBO0VBQWlCLGVBQUE7QUFBakU7QUFHVTtFQUNFLFlBQUE7QUFEWjtBQUVZO0VBQ0Usa0JBQUE7RUFBbUIsY0FBQTtFQUFlLGdCQUFBO0VBQWlCLGVBQUE7QUFHakU7QUFEWTtFQUNFLGtDQUFBO0FBR2Q7QUFGYztFQUNFLGNBQUE7QUFJaEI7QUFIZ0I7RUFDRSxTQUFBO0VBQVUsa0JBQUE7RUFBbUIsUUFBQTtFQUFTLGdDQUFBO0VBQWlDLFNBQUE7QUFTekY7QUFBSTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUNOO0FBQ007RUFDRSxhQUFBO0FBQ1I7QUFHSTtFQUNJLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQURSO0FBR1E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQURWO0FBSVE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUZWO0FBS1E7RUFDd0IsU0FBQTtFQUN0QixhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBRlY7QUFLUTtFQUNFLDBCQUFBO0VBRUEsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUFKVjtBQU9RO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBTFo7QUFRUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0FBTlY7QUFRVTtFQUNFLGNBQUE7QUFOWjtBQVdJO0VBQ0kseUJBQUE7QUFUUjtBQVdRO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtBQVRWO0FBWVE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVZWO0FBZ0JNO0VBQ0UsbUJBQUE7RUFHQSxtQkFBQTtFQUNBLGlCQUFBO0FBaEJSO0FBa0JRO0VBQ0UsY0FBQTtBQWhCVjtBQWlCVTtFQUNFLGtCQUFBO0FBZlo7QUFnQlk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBZGQ7QUFtQlE7RUFDRSxnQkFBQTtBQWpCVjtBQWtCVTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFoQlo7QUFtQlk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFqQmQ7QUFvQlU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFsQlo7QUF1Qk07RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0FBckJSO0FBd0JRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUF0QlY7QUF1QlU7RUFDRSxrQkFBQTtBQXJCWjtBQXdCUTtFQUNFLGNBQUE7QUF0QlY7QUF1QlU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFyQlo7QUF1QlU7RUFDRSxnQkFBQTtBQXJCWjtBQXVCVTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQXJCWjtBQXdCUTtFQUNFLGNBQUE7QUF0QlY7QUEyQkk7RUFDRSxvR0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QUF6Qk47QUEwQk07RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUF4QlY7QUEyQk07RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBekJWO0FBMEJVO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUF4QmQ7QUErQmM7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQTdCbEI7QUE4QmtCO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQTVCdEI7QUE2QnNCO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQTNCMUI7QUFnQ2M7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQTlCbEI7QUErQmtCO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUE3QnRCO0FBOEJzQjtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBNUIxQjtBQWlDYztFQUNJLFdBQUE7RUFDQSxjQUFBO0FBL0JsQjtBQWdDa0I7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBOUJ0QjtBQStCc0I7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBN0IxQiIsImZpbGUiOiJhdXRvLXJlbmV3YWwtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIFxyXG4gIFxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlvbi10ZXh0IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLXBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAucGFja2FnZXN7XHJcbiAgICAgIC5pdGVtc3tcclxuICAgICAgICBwYWRkaW5nOiB1bnNldDtcclxuICAgICAgICBpb24tY2FyZHtcclxuICAgICAgICAgIG1hcmdpbjogNXB4O2JhY2tncm91bmQ6ICNGQ0Y4Rjc7Ym94LXNoYWRvdzogdW5zZXQ7XHJcbiAgICAgICAgICBpb24tY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6dW5zZXQ7XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOiAjRkY4MDEwO2ZvbnQtd2VpZ2h0OiA2MDA7Zm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOiAjRkY4MDEwO2ZvbnQtd2VpZ2h0OiA2MDA7Zm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1yb3d7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2ZmYzI5OWM0O1xyXG4gICAgICAgICAgICAgIC5jb2xfMXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiA1MCU7dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7bGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHJcbiAgICAgIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IDEwcmVtO1xyXG4gICAgICB9XHJcbiAgICB9ICBcclxuXHJcbiAgICAucGFja2FnZS1saXN0LXNlYXJjaC1jb250YWlue1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgXHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5pbnB1dC1jb250YWluZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7IC8qIElFMTAgKi9cclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5pY29uIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDEwcHggNXB4O1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjb2xvcjogI0ZGNjAwMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjRkY2MDAwO1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IHVuc2V0O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pY29uMSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6ICNGRjYwMDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuaW5wdXQtZmllbGQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgICAgb3V0bGluZTogdW5zZXQ7XHJcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjRkY2MDAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiB1bnNldDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBcclxuICAgICAgICAgIDo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjQkRCREJEO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gIFxyXG5cclxuICAgIC5wYWNrYWdlLWxpc3QtdGl0bGUtY29udGFpbntcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdHZW9tZXRyaWEnO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBpe1xyXG4gICAgICAgICAgY29sb3I6ICNGRjYwMDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI0ZGNjAwMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnZlbnVlLWNhcmRze1xyXG5cclxuICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZDRjhGNztcclxuICAgICAgICAvLyBib3JkZXItdG9wOiBzb2xpZCAxcHggbGlnaHRncmF5O1xyXG4gICAgICAgIC8vIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBsaWdodGdyYXk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBib3gtc2hhZG93OiB1bnNldDtcclxuICAgICAgICBcclxuICAgICAgICBpb24tY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgICBwYWRkaW5nOiB1bnNldDtcclxuICAgICAgICAgIC5vcmFuZ2VfU2xpZGV7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1nLCB2aWRlb3tcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgIG9iamVjdC1maXQ6IHVuc2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDhweDtcclxuICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGNjAwMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdW5zZXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDZ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgICAgICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24taXRlbXtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZGRDVBODtcclxuICAgICAgICBtYXJnaW46IDEwcHggNXB4O1xyXG5cclxuXHJcbiAgICAgICAgaW9uLWF2YXRhcntcclxuICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkY4MDEwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwe1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgY29sb3I6ICNGQ0I3MzU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNhcmR7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICByZ2JhKCRjb2xvcjogI2RhZDJmMywgJGFscGhhOiAwLjIpICxyZ2JhKCRjb2xvcjogI2ZiYThhNCwgJGFscGhhOiAwLjIpIDc0JSkgO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyNS41NzM5cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IHVuc2V0O1xyXG4gICAgICBpbWd7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE1Ni44NXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1jYXJkLWhlYWRlcntcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgfSAgICBcclxuXHJcbiAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgICBpb24tY29se1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5sb2NhdGlvbntcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICBpb24tY2hpcHtcclxuICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLnN0YXJ7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgaW9uLWNoaXB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZDQjczNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmRldGFpbHN7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgaW9uLWNoaXB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9ICAgIFxyXG4gICAgfVxyXG5cclxufSAgICAiXX0= */");

/***/ }),

/***/ 2467:
/*!**************************************************************************!*\
  !*** ./src/app/profile/checkins-history/checkins-history.component.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: transparent;\n}\nion-toolbar ion-button ion-icon {\n  font-size: xx-large;\n  font-weight: bold;\n}\nion-content .container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\nion-content .container img {\n  height: 150px;\n  width: 150px;\n}\nion-content ion-grid ion-item h3 {\n  font-weight: 800;\n  color: black;\n}\nion-content ion-grid ion-item div {\n  font-size: x-small;\n  color: gray;\n}\nion-content ion-grid ion-item ion-icon {\n  font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNraW5zLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSx5QkFBQTtBQUFKO0FBR007RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBRFI7QUFPSTtFQUNJLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUxSO0FBT1E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUxaO0FBV1k7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFUaEI7QUFXWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQVRoQjtBQVlZO0VBQ0ksa0JBQUE7QUFWaEIiLCJmaWxlIjoiY2hlY2tpbnMtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuXHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIFxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcblxyXG4gICAgaW9uLWdyaWR7XHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 6602:
/*!******************************************************************!*\
  !*** ./src/app/profile/my-favourite/my-favourite.component.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header ion-toolbar ion-icon {\n  font-size: x-large;\n  font-weight: bold;\n}\nion-header ion-toolbar ion-text {\n  padding-left: 15px;\n  font-weight: bold;\n  font-size: medium;\n}\nion-content {\n  --padding-top:10px;\n}\nion-content h2 {\n  font-weight: bold;\n}\nion-content .packages .items {\n  padding: unset;\n}\nion-content .packages .items ion-card {\n  margin: 5px;\n  background: #FCF8F7;\n  box-shadow: unset;\n}\nion-content .packages .items ion-card ion-card-header {\n  padding: unset;\n}\nion-content .packages .items ion-card ion-card-header p {\n  text-align: center;\n  color: #FF8010;\n  font-weight: 600;\n  font-size: 16px;\n}\nion-content .packages .items ion-card ion-card-content {\n  padding: 5px;\n}\nion-content .packages .items ion-card ion-card-content p {\n  text-align: center;\n  color: #FF8010;\n  font-weight: 600;\n  font-size: 22px;\n}\nion-content .packages .items ion-card ion-card-content ion-row {\n  border-bottom: 1px solid #ffc299c4;\n}\nion-content .packages .items ion-card ion-card-content ion-row .col_1 {\n  padding: unset;\n}\nion-content .packages .items ion-card ion-card-content ion-row .col_1 ion-icon {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 50%;\n}\nion-content .container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\nion-content .container img {\n  height: 10rem;\n}\nion-content .package-list-search-contain {\n  --background: transparent !important;\n  padding: 5px 10px;\n  border-radius: 10px;\n}\nion-content .package-list-search-contain ion-icon {\n  color: white;\n  background: white;\n  font-size: xx-large;\n}\nion-content .package-list-search-contain ion-label {\n  font-size: medium;\n  color: white;\n  font-weight: 500;\n}\nion-content .package-list-search-contain .input-container {\n  /* IE10 */\n  display: flex;\n  width: 100%;\n  border-radius: 10px;\n}\nion-content .package-list-search-contain .icon {\n  padding: 5px 10px 10px 5px;\n  color: #FF6000;\n  text-align: center;\n  margin: 5px 0;\n  font-size: x-large;\n  border: solid 1px #FF6000;\n  border-left: unset;\n  border-bottom-right-radius: 10px;\n  border-top-right-radius: 10px;\n}\nion-content .package-list-search-contain .icon1 {\n  margin: 10px 0;\n  padding-left: 20px;\n  padding-right: unset;\n  background: white;\n  color: #FF6000;\n  text-align: center;\n  font-size: x-large;\n}\nion-content .package-list-search-contain .input-field {\n  width: 100%;\n  padding: 5px;\n  margin: 5px 0;\n  outline: unset;\n  border: solid 1px #FF6000;\n  border-right: unset;\n  border-bottom-left-radius: 10px;\n  border-top-left-radius: 10px;\n  font-weight: lighter;\n}\nion-content .package-list-search-contain .input-field ::placeholder {\n  color: #BDBDBD;\n}\nion-content .package-list-title-contain {\n  --background: transparent;\n}\nion-content .package-list-title-contain ion-label {\n  font-size: large;\n  font-family: \"Geometria\";\n}\nion-content .package-list-title-contain i {\n  color: #FF6000;\n  font-size: large;\n  border: solid 1px #FF6000;\n  border-radius: 5px;\n  padding: 5px;\n}\nion-content .venue-cards ion-card {\n  background: #FCF8F7;\n  border-radius: 10px;\n  box-shadow: unset;\n}\nion-content .venue-cards ion-card ion-card-header {\n  padding: unset;\n}\nion-content .venue-cards ion-card ion-card-header .orange_Slide {\n  text-align: center;\n}\nion-content .venue-cards ion-card ion-card-header .orange_Slide img, ion-content .venue-cards ion-card ion-card-header .orange_Slide video {\n  width: 100%;\n  height: 100px;\n  object-fit: unset;\n}\nion-content .venue-cards ion-card ion-card-content {\n  padding: 5px 8px;\n}\nion-content .venue-cards ion-card ion-card-content h2 {\n  font-size: small;\n  font-weight: 800;\n  color: #FF6000;\n  margin-bottom: unset;\n}\nion-content .venue-cards ion-card ion-card-content div ion-icon {\n  color: #666666;\n  font-size: x-small;\n}\nion-content .venue-cards ion-card ion-card-content h6 {\n  font-size: x-small;\n  color: #666666;\n}\nion-content .venue-cards ion-item {\n  border-bottom: 1px solid #FFD5A8;\n  margin: 10px 5px;\n}\nion-content .venue-cards ion-item ion-avatar {\n  height: 70px;\n  width: 70px;\n}\nion-content .venue-cards ion-item ion-avatar img {\n  border-radius: 5px;\n}\nion-content .venue-cards ion-item ion-label {\n  padding: 5px 0;\n}\nion-content .venue-cards ion-item ion-label h2 {\n  font-size: small;\n  color: #FF8010;\n}\nion-content .venue-cards ion-item ion-label h3 {\n  font-size: small;\n}\nion-content .venue-cards ion-item ion-label p {\n  color: black;\n  font-weight: 800;\n}\nion-content .venue-cards ion-item ion-icon {\n  color: #FCB735;\n}\nion-content ion-card {\n  background: linear-gradient(to right bottom, rgba(218, 210, 243, 0.2), rgba(251, 168, 164, 0.2) 74%);\n  border-radius: 25.5739px;\n  box-shadow: unset;\n}\nion-content ion-card img {\n  height: 156.85px;\n  width: 100%;\n}\nion-content ion-card ion-card-header {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\nion-content ion-card ion-card-header ion-card-subtitle {\n  text-align: left;\n  font-weight: bold;\n  color: #000;\n}\nion-content ion-card ion-card-content ion-col .location {\n  width: 100%;\n  display: block;\n}\nion-content ion-card ion-card-content ion-col .location ion-chip {\n  float: left;\n  padding: unset;\n  background: transparent;\n}\nion-content ion-card ion-card-content ion-col .location ion-chip i {\n  margin-right: 20px;\n  font-size: x-large;\n}\nion-content ion-card ion-card-content ion-col .star {\n  width: 100%;\n  display: block;\n}\nion-content ion-card ion-card-content ion-col .star ion-chip {\n  float: left;\n  padding-left: 5px;\n  background: transparent;\n}\nion-content ion-card ion-card-content ion-col .star ion-chip ion-icon {\n  color: #FCB735;\n  margin-right: 20px;\n  font-size: large;\n}\nion-content ion-card ion-card-content ion-col .details {\n  width: 100%;\n  display: block;\n}\nion-content ion-card ion-card-content ion-col .details ion-chip {\n  float: right;\n  padding: unset;\n  background: transparent;\n}\nion-content ion-card ion-card-content ion-col .details ion-chip i {\n  margin-right: 20px;\n  font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWZhdm91cml0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLTTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFKUjtBQU9NO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBTFI7QUFVQTtFQUNJLGtCQUFBO0FBUEo7QUFRSTtFQUNJLGlCQUFBO0FBTlI7QUFVTTtFQUNFLGNBQUE7QUFSUjtBQVNRO0VBQ0UsV0FBQTtFQUFZLG1CQUFBO0VBQW9CLGlCQUFBO0FBTDFDO0FBTVU7RUFDRSxjQUFBO0FBSlo7QUFLWTtFQUNFLGtCQUFBO0VBQW1CLGNBQUE7RUFBZSxnQkFBQTtFQUFpQixlQUFBO0FBQWpFO0FBR1U7RUFDRSxZQUFBO0FBRFo7QUFFWTtFQUNFLGtCQUFBO0VBQW1CLGNBQUE7RUFBZSxnQkFBQTtFQUFpQixlQUFBO0FBR2pFO0FBRFk7RUFDRSxrQ0FBQTtBQUdkO0FBRmM7RUFDRSxjQUFBO0FBSWhCO0FBSGdCO0VBQ0UsU0FBQTtFQUFVLGtCQUFBO0VBQW1CLFFBQUE7RUFBUyxnQ0FBQTtFQUFpQyxTQUFBO0FBU3pGO0FBQUk7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFDTjtBQUNNO0VBQ0UsYUFBQTtBQUNSO0FBR0k7RUFDSSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUdRO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFEVjtBQUlRO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFGVjtBQUtRO0VBQ3dCLFNBQUE7RUFDdEIsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUZWO0FBS1E7RUFDRSwwQkFBQTtFQUVBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FBSlY7QUFPUTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUxaO0FBUVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtBQU5WO0FBUVU7RUFDRSxjQUFBO0FBTlo7QUFXSTtFQUNJLHlCQUFBO0FBVFI7QUFXUTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7QUFUVjtBQVlRO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFWVjtBQWdCTTtFQUNFLG1CQUFBO0VBR0EsbUJBQUE7RUFDQSxpQkFBQTtBQWhCUjtBQWtCUTtFQUNFLGNBQUE7QUFoQlY7QUFpQlU7RUFDRSxrQkFBQTtBQWZaO0FBZ0JZO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQWRkO0FBbUJRO0VBQ0UsZ0JBQUE7QUFqQlY7QUFrQlU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBaEJaO0FBbUJZO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBakJkO0FBb0JVO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBbEJaO0FBdUJNO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtBQXJCUjtBQXdCUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBdEJWO0FBdUJVO0VBQ0Usa0JBQUE7QUFyQlo7QUF3QlE7RUFDRSxjQUFBO0FBdEJWO0FBdUJVO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBckJaO0FBdUJVO0VBQ0UsZ0JBQUE7QUFyQlo7QUF1QlU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFyQlo7QUF3QlE7RUFDRSxjQUFBO0FBdEJWO0FBMkJJO0VBQ0Usb0dBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FBekJOO0FBMEJNO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBeEJWO0FBMkJNO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQXpCVjtBQTBCVTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBeEJkO0FBK0JjO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUE3QmxCO0FBOEJrQjtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUE1QnRCO0FBNkJzQjtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUEzQjFCO0FBZ0NjO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUE5QmxCO0FBK0JrQjtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBN0J0QjtBQThCc0I7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQTVCMUI7QUFpQ2M7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQS9CbEI7QUFnQ2tCO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQTlCdEI7QUErQnNCO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQTdCMUIiLCJmaWxlIjoibXktZmF2b3VyaXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgXHJcbiAgXHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaW9uLXRleHQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAgIC0tcGFkZGluZy10b3A6MTBweDtcclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWNrYWdlc3tcclxuICAgICAgLml0ZW1ze1xyXG4gICAgICAgIHBhZGRpbmc6IHVuc2V0O1xyXG4gICAgICAgIGlvbi1jYXJke1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7YmFja2dyb3VuZDogI0ZDRjhGNztib3gtc2hhZG93OiB1bnNldDtcclxuICAgICAgICAgIGlvbi1jYXJkLWhlYWRlcntcclxuICAgICAgICAgICAgcGFkZGluZzp1bnNldDtcclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7Y29sb3I6ICNGRjgwMTA7Zm9udC13ZWlnaHQ6IDYwMDtmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7Y29sb3I6ICNGRjgwMTA7Zm9udC13ZWlnaHQ6IDYwMDtmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLXJvd3tcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZmZjMjk5YzQ7XHJcbiAgICAgICAgICAgICAgLmNvbF8xe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDUwJTt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cclxuICAgICAgaW1ne1xyXG4gICAgICAgIGhlaWdodDogMTByZW07XHJcbiAgICAgIH1cclxuICAgIH0gIFxyXG5cclxuICAgIC5wYWNrYWdlLWxpc3Qtc2VhcmNoLWNvbnRhaW57XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDsgLyogSUUxMCAqL1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggMTBweCA1cHg7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNvbG9yOiAjRkY2MDAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNGRjYwMDA7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogdW5zZXQ7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmljb24xIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGNjAwMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5pbnB1dC1maWVsZCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgICBvdXRsaW5lOiB1bnNldDtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNGRjYwMDA7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IHVuc2V0O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIFxyXG4gICAgICAgICAgOjpwbGFjZWhvbGRlcntcclxuICAgICAgICAgICAgY29sb3I6ICNCREJEQkQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAgXHJcblxyXG4gICAgLnBhY2thZ2UtbGlzdC10aXRsZS1jb250YWlue1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0dlb21ldHJpYSc7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGl7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGNjAwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjRkY2MDAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudmVudWUtY2FyZHN7XHJcblxyXG4gICAgICBpb24tY2FyZHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkNGOEY3O1xyXG4gICAgICAgIC8vIGJvcmRlci10b3A6IHNvbGlkIDFweCBsaWdodGdyYXk7XHJcbiAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGxpZ2h0Z3JheTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHVuc2V0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1jYXJkLWhlYWRlcntcclxuICAgICAgICAgIHBhZGRpbmc6IHVuc2V0O1xyXG4gICAgICAgICAgLm9yYW5nZV9TbGlkZXtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBpbWcsIHZpZGVve1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LWZpdDogdW5zZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggOHB4O1xyXG4gICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkY2MDAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB1bnNldDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRpdntcclxuICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoNntcclxuICAgICAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgICAgICAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkZENUE4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCA1cHg7XHJcblxyXG5cclxuICAgICAgICBpb24tYXZhdGFye1xyXG4gICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICAgICAgY29sb3I6ICNGRjgwMTA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICBjb2xvcjogI0ZDQjczNTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tY2FyZHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgIHJnYmEoJGNvbG9yOiAjZGFkMmYzLCAkYWxwaGE6IDAuMikgLHJnYmEoJGNvbG9yOiAjZmJhOGE0LCAkYWxwaGE6IDAuMikgNzQlKSA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1LjU3MzlweDtcclxuICAgICAgYm94LXNoYWRvdzogdW5zZXQ7XHJcbiAgICAgIGltZ3tcclxuICAgICAgICAgIGhlaWdodDogMTU2Ljg1cHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICBpb24tY2FyZC1zdWJ0aXRsZXtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9ICAgIFxyXG5cclxuICAgICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLmxvY2F0aW9ue1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIGlvbi1jaGlwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuc3RhcntcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICBpb24tY2hpcHtcclxuICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkNCNzM1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuZGV0YWlsc3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICBpb24tY2hpcHtcclxuICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0gICAgXHJcbiAgICB9XHJcblxyXG59ICAgICJdfQ== */");

/***/ }),

/***/ 8821:
/*!************************************************************************!*\
  !*** ./src/app/profile/package-history/package-history.component.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: transparent;\n}\nion-toolbar ion-button ion-icon {\n  font-size: xx-large;\n  font-weight: bold;\n}\nion-content .container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\nion-content .container img {\n  height: 150px;\n  width: 150px;\n}\nion-content ion-grid ion-item h3 {\n  font-weight: 800;\n  color: black;\n}\nion-content ion-grid ion-item div {\n  font-size: x-small;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2UtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlCQUFBO0FBQUo7QUFHTTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFEUjtBQU9JO0VBQ0ksa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBTFI7QUFPUTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBTFo7QUFXWTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQVRoQjtBQVdZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBVGhCIiwiZmlsZSI6InBhY2thZ2UtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuXHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIFxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcblxyXG4gICAgaW9uLWdyaWR7XHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 6623:
/*!**************************************************************************!*\
  !*** ./src/app/profile/profile/edit-profile/edit-profile.component.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content ion-grid {\n  padding: 0 20px;\n}\nion-content ion-grid .profilePhoto {\n  border-radius: 50%;\n  height: 8rem;\n}\nion-content ion-grid .upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n}\nion-content ion-grid .upload-btn-wrapper input[type=file] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}\nion-content ion-grid .btn-upload {\n  color: #6a8dfa;\n  background-color: white;\n  font-size: 12px;\n  font-weight: bold;\n}\nion-content ion-grid .editForm h1 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: xx-large;\n  line-height: 45px;\n  color: #FF6000;\n}\nion-content ion-grid .editForm label {\n  font-style: normal;\n  font-weight: normal;\n  font-size: small;\n  line-height: 18px;\n  color: #FF6000;\n}\nion-content ion-grid .editForm input, ion-content ion-grid .editForm select, ion-content ion-grid .editForm ion-item {\n  width: 100%;\n  border: 1px solid #FF6000;\n  border-radius: 10px;\n  font-size: small;\n  margin-top: 5px;\n  outline: unset;\n  height: 3rem;\n}\nion-content ion-grid .editForm input, ion-content ion-grid .editForm select {\n  width: 100%;\n  border: 1px solid #FF6000;\n  border-radius: 10px;\n  margin-top: 5px;\n  font-size: small;\n  padding: 10px;\n  outline: unset;\n  height: 3rem;\n}\nion-content ion-grid .editForm ion-button {\n  width: auto;\n  --background: linear-gradient(to left bottom, #ff6000, #ffaa70);\n  color: #fff;\n  border-radius: 15px;\n  margin: 15px;\n  box-shadow: unset;\n  font-size: large;\n}\nion-footer ion-button {\n  --background: linear-gradient(to right top, #FF6000, #f99958);\n  font-family: \"Geometria\";\n  color: #fff;\n  border-radius: 15px;\n  margin: 15px;\n  box-shadow: unset;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGVBQUE7QUFBUjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBQ1o7QUFDUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUNaO0FBQ1E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FBQ1o7QUFDUTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNaO0FBR1k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUFGaEI7QUFLWTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtBQUpoQjtBQU9ZO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUxoQjtBQVFZO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFOaEI7QUFTZ0I7RUFDSSxXQUFBO0VBQ0EsK0RBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVBwQjtBQWNJO0VBQ1EsNkRBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBWFoiLCJmaWxlIjoiZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBpb24tZ3JpZHtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgLnByb2ZpbGVQaG90b3tcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDhyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51cGxvYWQtYnRuLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVwbG9hZC1idG4td3JhcHBlciBpbnB1dFt0eXBlPWZpbGVdIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tdXBsb2FkIHtcclxuICAgICAgICAgICAgY29sb3I6ICM2YThkZmE7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgICBcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICAuZWRpdEZvcm17XHJcbiAgICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZGNjAwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRjYwMDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0LCBzZWxlY3QsIGlvbi1pdGVte1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkY2MDAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiB1bnNldDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIGlucHV0LCBzZWxlY3R7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjYwMDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiB1bnNldDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCBib3R0b20sICNmZjYwMDAsICNmZmFhNzApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWZvb3RlcntcclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgI0ZGNjAwMCwgI2Y5OTk1OCk7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2VvbWV0cmlhJztcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogdW5zZXQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 4746:
/*!********************************************************!*\
  !*** ./src/app/profile/profile/profile.component.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  background: linear-gradient(to left top, #ff6000, #ffaa70);\n}\n\nion-content ion-toolbar {\n  --background: transparent;\n}\n\nion-content ion-toolbar ion-button ion-icon {\n  color: #fff;\n  font-size: xx-large;\n  font-weight: bold;\n}\n\nion-content ion-toolbar ion-button ion-title {\n  color: #fff;\n  text-align: center;\n}\n\nion-content ion-segment {\n  margin: 0 10px;\n}\n\nion-content ion-segment-button {\n  text-transform: capitalize;\n  transform: scale(0.8, 0.8);\n  --indicator-color: transparent;\n  color: #fff;\n}\n\nion-content ion-segment-button ion-label {\n  font-size: medium;\n  position: relative;\n  text-align: center;\n  font-weight: bolder;\n}\n\nion-content .segment-button-checked {\n  color: #fff;\n  font-weight: 800;\n}\n\nion-content .segment-button-checked:before {\n  content: \"\";\n  position: absolute;\n  left: 10%;\n  bottom: -11%;\n  width: 80%;\n  border-bottom: 4px solid #fff;\n}\n\nion-content .mainBody {\n  background: linear-gradient(to left bottom, #ff6000, #ffaa70);\n  height: auto;\n}\n\nion-content .profileFields h2 {\n  font-size: medium;\n  font-weight: 800;\n  color: #fff;\n}\n\nion-content .profileFields h5 {\n  font-size: small;\n  color: #fff;\n}\n\nion-content .bgTop {\n  position: fixed;\n  top: -7%;\n  height: auto;\n  z-index: -1;\n}\n\nion-content .img {\n  border-radius: 50%;\n  margin-top: 10px;\n  width: 36px;\n}\n\nion-content .center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 40%;\n}\n\nion-content h1 {\n  font-weight: bold;\n  color: #fff;\n}\n\nion-content h4 {\n  text-align: center;\n  font-weight: bold;\n}\n\nion-content .topContent .card ion-item {\n  background: #FFFFFF;\n  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.15);\n  border-radius: 10px;\n  margin: 10px 0;\n}\n\nion-content .topContent .card ion-item ion-label {\n  font-family: \"Geometria\";\n  font-weight: bold;\n}\n\nion-content hr {\n  background: #000;\n  margin: 40px 15px 10px 15px;\n}\n\nion-content .supportContent {\n  padding: 10px;\n}\n\nion-content .supportContent h4 {\n  text-align: left;\n  font-weight: bold;\n}\n\nion-content .supportContent .card ion-item {\n  background: #FFFFFF;\n}\n\nion-content .supportContent .card ion-item ion-label {\n  font-family: \"Geometria\";\n  color: #000;\n}\n\nion-content .supportContent ion-list .card ion-item {\n  background: #FFFFFF;\n}\n\nion-content .supportContent ion-list .card ion-item ion-label {\n  font-family: \"Geometria\";\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwREFBQTtBQUNKOztBQUtJO0VBRUUseUJBQUE7QUFITjs7QUFLUTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBSFY7O0FBS1E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFIVjs7QUFRSTtFQUNFLGNBQUE7QUFOTjs7QUFTSTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFQTjs7QUFTTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0FBUlI7O0FBWUk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFWTjs7QUFhSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FBWE47O0FBZUk7RUFDRSw2REFBQTtFQUNBLFlBQUE7QUFiTjs7QUFpQk07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQWZSOztBQWlCTTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQWZSOztBQW1CSTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFqQk47O0FBb0JJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFsQk47O0FBcUJJO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBbkJOOztBQXNCSTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQXBCTjs7QUF1Qkk7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBckJOOztBQTBCUTtFQUNFLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUF4QlY7O0FBMEJVO0VBQ0Usd0JBQUE7RUFDQSxpQkFBQTtBQXhCWjs7QUE4Qkk7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0FBNUJOOztBQStCSTtFQUNFLGFBQUE7QUE3Qk47O0FBK0JNO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQTdCUjs7QUFpQ1E7RUFDRSxtQkFBQTtBQS9CVjs7QUFpQ1U7RUFDRSx3QkFBQTtFQUNBLFdBQUE7QUEvQlo7O0FBc0NVO0VBQ0UsbUJBQUE7QUFwQ1o7O0FBc0NZO0VBQ0Usd0JBQUE7RUFDQSxXQUFBO0FBcENkIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQgdG9wLCAjZmY2MDAwLCAjZmZhYTcwKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gIFxyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gIFxyXG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXRpdGxle1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tc2VnbWVudCB7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOCwuOCk7XHJcbiAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICBcclxuICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLy8gbGVmdDogLTE3cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQ6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAxMCU7XHJcbiAgICAgIGJvdHRvbTogLTExJTtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmZmY7XHJcbiAgICBcclxuICAgIH1cclxuICBcclxuICAgIC5tYWluQm9keXtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQgYm90dG9tLCAjZmY2MDAwLCAjZmZhYTcwKTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnByb2ZpbGVGaWVsZHN7XHJcbiAgICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgICAgaDV7XHJcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLmJnVG9wIHtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB0b3A6IC03JTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICBcclxuICAgIC5pbWcge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNlbnRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaDEge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBoNCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAudG9wQ29udGVudCB7XHJcbiAgICAgIC5jYXJkIHtcclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgXHJcbiAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0dlb21ldHJpYSc7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgaHIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICBtYXJnaW46IDQwcHggMTVweCAxMHB4IDE1cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc3VwcG9ydENvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIFxyXG4gICAgICBoNCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuY2FyZCB7XHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBcclxuICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2VvbWV0cmlhJztcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlvbi1saXN0IHtcclxuICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgXHJcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdHZW9tZXRyaWEnO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 4304:
/*!**********************************************************************!*\
  !*** ./src/app/profile/wallet-history/wallet-history.component.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: transparent;\n}\nion-toolbar ion-button ion-icon {\n  font-size: xx-large;\n  font-weight: bold;\n}\nion-content .container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\nion-content .container ion-icon {\n  font-size: 150px;\n}\nion-content .container img {\n  height: 150px;\n  width: 150px;\n}\nion-content ion-grid ion-item h3 {\n  font-weight: 800;\n  color: black;\n}\nion-content ion-grid ion-item div {\n  font-size: x-small;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbGxldC1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkseUJBQUE7QUFBSjtBQUdNO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQURSO0FBT0k7RUFDSSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFMUjtBQU9RO0VBQ0ksZ0JBQUE7QUFMWjtBQVFRO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFOWjtBQVlZO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBVmhCO0FBWVk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFWaEIiLCJmaWxlIjoid2FsbGV0LWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcblxyXG4gICAgaW9uLWdyaWR7XHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 2755:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/active-package/active-package.component.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" color=\"white\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button>\r\n        <ion-back-button color=\"orange\" text=\"\"></ion-back-button>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"orange\" mode=\"md\">Active Package</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\" [scrollEvents]=\"true\">\r\n\r\n   <div class=\"container\" *ngIf=\"!activePackageStatus\">\r\n    <div class=\"ion-text-center\">\r\n      <ion-icon name=\"albums\" color=\"orange\"></ion-icon>\r\n    </div>\r\n    <div><b>No Active Package</b></div>\r\n  </div>\r\n\r\n\r\n  <ion-grid *ngIf=\"activePackageStatus\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <div class=\"dicount-cart\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"7\" class=\"ion-text-center one_half\">\r\n                <h1>{{amountWithDiscount}} AED</h1>\r\n                <h4><s>{{amount}} AED</s></h4>\r\n              </ion-col>\r\n              <ion-col size=\"5\" class=\"ion-text-center two_half\">\r\n                <h4>{{flatDiscount}}%</h4>\r\n                <h6>Flat Discount</h6>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\">\r\n        <div class=\"card-details\">\r\n          <h5>Package Name: {{packageName}}</h5>\r\n          <h5>Package Validity: {{packageValidity}} Days</h5>\r\n          <h5>No of Check-ins Allowed: {{checkIns}}</h5>\r\n          <h5>Available Check-ins: {{userCheckins}}</h5>\r\n          <h5>No of Free Hours to Meeting: {{hours}} Hours</h5>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\">\r\n        <div class=\"card-details\">\r\n          <h6>Amenities for selected package</h6>\r\n          <div>\r\n            <ng-container *ngFor=\"let item of features\">\r\n              <ion-badge color=\"orange\">{{item.name}}</ion-badge>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\">\r\n        <div class=\"card-details\">\r\n          <h6>Additional Info</h6>\r\n          <div [innerHTML]=\"information\"></div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n</ion-content>  ");

/***/ }),

/***/ 8766:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/auto-renewal-history/auto-renewal-history.component.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" color=\"white\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button color=\"orange\" text=\"\"></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-buttons>\r\n    <ion-title color=\"orange\" mode=\"md\">Auto Renewal Packages</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ng-container>\r\n\r\n    <div class=\"container\" *ngIf=\"historyArr.length === 0 && !skeletonStatus\">\r\n      <div class=\"ion-text-center\">\r\n        <img src=\"assets/img/history.png\" alt=\"\">\r\n      </div>\r\n      <div><b>No Auto Renewal <br> Package History</b></div>\r\n    </div>\r\n\r\n    \r\n\r\n    <ion-grid>\r\n      <ion-row class=\"packages\">\r\n        \r\n      <ng-container *ngIf=\"skeletonStatus\">\r\n        <ion-col class=\"items\" size=\"6\">\r\n          <ion-card mode=\"ios\">\r\n            <ion-card-header>\r\n              <p class=\"ion-text-center\"><ion-skeleton-text style=\"width: 30%;margin-left: 35%;height: 16px;\" animated></ion-skeleton-text></p>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <p class=\"ion-text-center\"><ion-skeleton-text style=\"width: 60%;margin-left: 20%;height: 30px;\" animated></ion-skeleton-text></p>\r\n              <br>\r\n              <ion-row style=\"border: unset;\">\r\n                <ion-col class=\"ion-text-center\" size=\"1\">\r\n                  <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                </ion-col>\r\n                <ion-col size=\"11\" class=\"ion-text-center\">\r\n                  <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                </ion-col>\r\n              </ion-row>\r\n              \r\n              <ion-row style=\"border: unset;\">\r\n                <ion-col class=\"ion-text-center\" size=\"1\">\r\n                  <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                </ion-col>\r\n                <ion-col size=\"11\" class=\"ion-text-center\">\r\n                  <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                  <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                </ion-col>\r\n              </ion-row>\r\n              \r\n              <ion-row style=\"border: unset;\">\r\n                <ion-col class=\"ion-text-center\" size=\"1\">\r\n                  <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                </ion-col>\r\n                <ion-col size=\"11\" class=\"ion-text-center\">\r\n                  <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-card-content>\r\n          </ion-card>  \r\n        </ion-col>\r\n        <ion-col class=\"items\" size=\"6\">\r\n          <ion-card mode=\"ios\">\r\n            <ion-card-header>\r\n              <p class=\"ion-text-center\"><ion-skeleton-text style=\"width: 30%;margin-left: 35%;height: 16px;\" animated></ion-skeleton-text></p>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <p class=\"ion-text-center\"><ion-skeleton-text style=\"width: 60%;margin-left: 20%;height: 30px;\" animated></ion-skeleton-text></p>\r\n              <br>\r\n              <ion-row style=\"border: unset;\">\r\n                <ion-col class=\"ion-text-center\" size=\"1\">\r\n                  <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                </ion-col>\r\n                <ion-col size=\"11\" class=\"ion-text-center\">\r\n                  <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                </ion-col>\r\n              </ion-row>\r\n              \r\n              <ion-row style=\"border: unset;\">\r\n                <ion-col class=\"ion-text-center\" size=\"1\">\r\n                  <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                </ion-col>\r\n                <ion-col size=\"11\" class=\"ion-text-center\">\r\n                  <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                  <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                </ion-col>\r\n              </ion-row>\r\n              \r\n              <ion-row style=\"border: unset;\">\r\n                <ion-col class=\"ion-text-center\" size=\"1\">\r\n                  <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                </ion-col>\r\n                <ion-col size=\"11\" class=\"ion-text-center\">\r\n                  <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-card-content>\r\n          </ion-card>  \r\n        </ion-col>\r\n      </ng-container>\r\n\r\n        <ng-container>\r\n          <ion-col class=\"items\" size=\"6\" *ngFor=\"let item of historyArr\">\r\n            <ion-card mode=\"ios\">\r\n              <ion-card-header>\r\n                <p>{{item.packageData.name}}</p>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n                <p>AED {{item.packageData.amount}}</p>\r\n                <div style=\"font-size: x-small;font-weight: 800;line-height: inherit;text-align: center;\">Next Renewal: <br> {{ item.data.autoRenewalDate.toDate() | date: 'dd/MM/yyyy hh:mm a'}}</div>\r\n                <br>\r\n                <ion-row>\r\n                  <ion-col class=\"col_1\" size=\"1\">\r\n                    <ion-icon size=\"small\" color=\"orange\" name=\"checkmark-circle\"></ion-icon>\r\n                  </ion-col>\r\n                  <ion-col size=\"11\">\r\n                    {{item.packageData.checkIns}} CheckIns\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col class=\"col_1\" size=\"1\">\r\n                    <ion-icon size=\"small\" color=\"orange\" name=\"checkmark-circle\"></ion-icon>\r\n                  </ion-col>\r\n                  <ion-col size=\"11\">\r\n                    Free {{item.packageData.hours}} Meeting Room Hours\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row style=\"border: unset;\">\r\n                  <ion-col class=\"col_1\" size=\"1\">\r\n                    <ion-icon size=\"small\" color=\"orange\" name=\"checkmark-circle\"></ion-icon>\r\n                  </ion-col>\r\n                  <ion-col size=\"11\">\r\n                    Free \r\n                    <ng-container *ngFor=\"let feature of item.features\">\r\n                      <span>{{feature.name}} &nbsp;</span>\r\n                    </ng-container>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-text-center\">\r\n                    <ion-chip color=\"danger\" outline=\"true\" (click)=\"delete(item.data.docId)\">\r\n                      <ng-container *ngIf=\"!loader\"> Cancel </ng-container>\r\n                      <ion-spinner color=\"danger\" *ngIf=\"loader\"></ion-spinner>\r\n                    </ion-chip>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-card-content>\r\n            </ion-card>  \r\n          </ion-col>\r\n        </ng-container>\r\n      </ion-row>\r\n    </ion-grid>\r\n    \r\n  </ng-container>\r\n</ion-content>");

/***/ }),

/***/ 8623:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/checkins-history/checkins-history.component.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\"  mode=\"ios\">\r\n  <ion-toolbar color=\"white\"  mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button color=\"orange\" text=\"\"></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-buttons>\r\n    <ion-title color=\"orange\" mode=\"md\">Check-Ins History</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\" *ngIf=\"!checkinsStatus && !skeletonStatus\">\r\n    <img src=\"assets/img/venueCheckIn.png\" alt=\"\">\r\n    <h5>No check-ins</h5>\r\n  </div>\r\n  \r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ng-container *ngIf=\"skeletonStatus\">\r\n          <ion-item lines=\"full\">\r\n            <ion-label>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <h3><ion-skeleton-text style=\"height: 13px;\" animated></ion-skeleton-text></h3>\r\n                  <div><ion-skeleton-text style=\"height: 7px;margin-top: 5px;\" animated></ion-skeleton-text></div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-label>\r\n            <ion-icon slot=\"end\" name=\"ellipse\" color=\"medium\"></ion-icon>\r\n          </ion-item>\r\n          <ion-item lines=\"full\">\r\n            <ion-label>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <h3><ion-skeleton-text style=\"height: 13px;\" animated></ion-skeleton-text></h3>\r\n                  <div><ion-skeleton-text style=\"height: 7px;margin-top: 5px;\" animated></ion-skeleton-text></div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-label>\r\n            <ion-icon slot=\"end\" name=\"ellipse\" color=\"medium\"></ion-icon>\r\n          </ion-item>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!skeletonStatus && checkinsStatus\">\r\n          <ng-container *ngFor=\"let item of checkinsArr\">\r\n            <ion-item lines=\"full\">\r\n              <ion-label>\r\n                <ion-row>\r\n                  <ion-col>\r\n                    <h3><ion-text color=\"orange\">{{item.venueData.name}}</ion-text></h3>\r\n                    <div>{{item.data.timestamp.toDate() | date : 'dd/MM/yyyy hh:mm a'}}</div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-label>\r\n              <ion-icon *ngIf=\"item.data.status === 0\" slot=\"end\" name=\"time\" color=\"warning\"></ion-icon>\r\n              <ion-icon *ngIf=\"item.data.status === 1\" slot=\"end\" name=\"shield-checkmark\" color=\"success\"></ion-icon>\r\n              <ion-icon *ngIf=\"item.data.status === 2\" slot=\"end\" name=\"close-circle\" color=\"danger\"></ion-icon>\r\n            </ion-item>\r\n          </ng-container>\r\n        </ng-container>  \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 8238:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/my-favourite/my-favourite.component.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" color=\"white\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button color=\"orange\" text=\"\"></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-buttons>\r\n    <ion-title color=\"orange\" mode=\"md\">My Favourite</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\" [scrollEvents]=\"true\">\r\n\r\n  <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"{{segmentValue}}\">\r\n    <ion-segment-button value=\"Venue\">\r\n      <ion-label>Venue</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"Package\">\r\n      <ion-label>Package</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <ng-container *ngIf=\"segmentValue === 'Venue'\">\r\n\r\n    <div class=\"container\" *ngIf=\"venue.length === 0 && !scalatonP\">\r\n      <div class=\"ion-text-center\">\r\n        <img src=\"assets/img/favoriteList.png\" alt=\"\">\r\n      </div>\r\n      <div><b>No Favourites Venue</b></div>\r\n    </div>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n\r\n        <ng-container *ngIf=\"scalatonP && segmentValue === 'Venue'\">\r\n          <ion-col size=\"6\">\r\n            <div class=\"venue-cards\">\r\n              <ion-card>\r\n                <ion-card-header>\r\n                  <ion-skeleton-text style=\"height: 100px;\" animated></ion-skeleton-text>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                  <h2>\r\n                    <ion-skeleton-text style=\"height: 16px;\" animated></ion-skeleton-text>\r\n                  </h2>\r\n                  <div>\r\n                    <ion-skeleton-text style=\"height: 7px;margin-top: 17px;\" animated></ion-skeleton-text>\r\n                  </div>\r\n                  <h6>\r\n                    <ion-skeleton-text style=\"height: 7px;margin-top: 5px;\" animated></ion-skeleton-text>\r\n                  </h6>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <div class=\"venue-cards\">\r\n              <ion-card>\r\n                <ion-card-header>\r\n                  <ion-skeleton-text style=\"height: 100px;\" animated></ion-skeleton-text>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                  <h2>\r\n                    <ion-skeleton-text style=\"height: 16px;\" animated></ion-skeleton-text>\r\n                  </h2>\r\n                  <div>\r\n                    <ion-skeleton-text style=\"height: 7px;margin-top: 17px;\" animated></ion-skeleton-text>\r\n                  </div>\r\n                  <h6>\r\n                    <ion-skeleton-text style=\"height: 7px;margin-top: 5px;\" animated></ion-skeleton-text>\r\n                  </h6>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </div>\r\n          </ion-col>\r\n        </ng-container>  \r\n\r\n        <ng-container *ngIf=\"venue.length > 0\">\r\n          <ng-container *ngFor=\"let item of venue\">\r\n            <ion-col size=\"6\">\r\n              <div class=\"venue-cards\">\r\n                <ion-card (click)=\"venueDetails(item.data.docId)\">\r\n                  <ion-card-header>\r\n                    <ion-slides class=\"orange_Slide\" pager=\"true\">\r\n                      <ng-container *ngFor=\"let service of item.services\">\r\n                        <ion-slide>\r\n                          <img *ngIf=\"service.type.includes('image')\" src=\"{{service.icon}}\" alt=\"\" class=\"bg\">\r\n                        </ion-slide>\r\n                      </ng-container>\r\n                    </ion-slides>\r\n                  </ion-card-header>\r\n                  <ion-card-content>\r\n                    <h2>{{item.data.name}}</h2>\r\n                    <div>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                    </div>\r\n                    <h6>{{item.data.address}}</h6>\r\n                  </ion-card-content>\r\n                </ion-card>\r\n              </div>\r\n            </ion-col>  \r\n          </ng-container>\r\n        </ng-container>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ng-container>\r\n\r\n\r\n  <ng-container *ngIf=\"segmentValue === 'Package'\">\r\n\r\n    <div class=\"container\" *ngIf=\"package.length === 0 && !scalatonP\">\r\n      <div class=\"ion-text-center\">\r\n        <img src=\"assets/img/favoriteList.png\" alt=\"\">\r\n      </div>\r\n      <div><b>No Favourites Package</b></div>\r\n    </div>\r\n\r\n    <ion-grid>\r\n      <ion-row class=\"packages\">\r\n\r\n        <ng-container *ngIf=\"scalatonP && segmentValue === 'Venue'\">\r\n          <ion-col class=\"items\" size=\"6\">\r\n            <ion-card mode=\"ios\">\r\n              <ion-card-header>\r\n                <p class=\"ion-text-center\"><ion-skeleton-text style=\"width: 30%;margin-left: 35%;height: 16px;\" animated></ion-skeleton-text></p>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n                <p class=\"ion-text-center\"><ion-skeleton-text style=\"width: 60%;margin-left: 20%;height: 30px;\" animated></ion-skeleton-text></p>\r\n                <br>\r\n                <ion-row style=\"border: unset;\">\r\n                  <ion-col class=\"ion-text-center\" size=\"1\">\r\n                    <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"11\" class=\"ion-text-center\">\r\n                    <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                  </ion-col>\r\n                </ion-row>\r\n                \r\n                <ion-row style=\"border: unset;\">\r\n                  <ion-col class=\"ion-text-center\" size=\"1\">\r\n                    <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"11\" class=\"ion-text-center\">\r\n                    <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                    <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                  </ion-col>\r\n                </ion-row>\r\n                \r\n                <ion-row style=\"border: unset;\">\r\n                  <ion-col class=\"ion-text-center\" size=\"1\">\r\n                    <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"11\" class=\"ion-text-center\">\r\n                    <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-card-content>\r\n            </ion-card>  \r\n          </ion-col>\r\n          <ion-col class=\"items\" size=\"6\">\r\n            <ion-card mode=\"ios\">\r\n              <ion-card-header>\r\n                <p class=\"ion-text-center\"><ion-skeleton-text style=\"width: 30%;margin-left: 35%;height: 16px;\" animated></ion-skeleton-text></p>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n                <p class=\"ion-text-center\"><ion-skeleton-text style=\"width: 60%;margin-left: 20%;height: 30px;\" animated></ion-skeleton-text></p>\r\n                <br>\r\n                <ion-row style=\"border: unset;\">\r\n                  <ion-col class=\"ion-text-center\" size=\"1\">\r\n                    <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"11\" class=\"ion-text-center\">\r\n                    <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                  </ion-col>\r\n                </ion-row>\r\n                \r\n                <ion-row style=\"border: unset;\">\r\n                  <ion-col class=\"ion-text-center\" size=\"1\">\r\n                    <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"11\" class=\"ion-text-center\">\r\n                    <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                    <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                  </ion-col>\r\n                </ion-row>\r\n                \r\n                <ion-row style=\"border: unset;\">\r\n                  <ion-col class=\"ion-text-center\" size=\"1\">\r\n                    <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"11\" class=\"ion-text-center\">\r\n                    <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-card-content>\r\n            </ion-card>  \r\n          </ion-col>\r\n        </ng-container>\r\n\r\n        <ng-container>\r\n          <ion-col class=\"items\" size=\"6\" *ngFor=\"let item of package\">\r\n            <ion-card mode=\"ios\" (click)=\"packageDetails(item.data.docId)\">\r\n              <ion-card-header>\r\n                <p>{{item.data.name}}</p>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n                <p>AED {{item.data.amount}}</p>\r\n                <br>\r\n                <ion-row>\r\n                  <ion-col class=\"col_1\" size=\"1\">\r\n                    <ion-icon size=\"small\" color=\"orange\" name=\"checkmark-circle\"></ion-icon>\r\n                  </ion-col>\r\n                  <ion-col size=\"11\">\r\n                    {{item.data.checkIns}} CheckIns\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col class=\"col_1\" size=\"1\">\r\n                    <ion-icon size=\"small\" color=\"orange\" name=\"checkmark-circle\"></ion-icon>\r\n                  </ion-col>\r\n                  <ion-col size=\"11\">\r\n                    Free {{item.data.hours}} Meeting Room Hours\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row style=\"border: unset;\">\r\n                  <ion-col class=\"col_1\" size=\"1\">\r\n                    <ion-icon size=\"small\" color=\"orange\" name=\"checkmark-circle\"></ion-icon>\r\n                  </ion-col>\r\n                  <ion-col size=\"11\">\r\n                    Free \r\n                    <ng-container *ngFor=\"let feature of item.features\">\r\n                      <span>{{feature.name}} &nbsp;</span>\r\n                    </ng-container>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-card-content>\r\n            </ion-card>  \r\n          </ion-col>\r\n        </ng-container>\r\n      </ion-row>\r\n    </ion-grid>\r\n    \r\n  </ng-container>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 4218:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/package-history/package-history.component.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" color=\"white\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button color=\"orange\" text=\"\"></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-buttons>\r\n    <ion-title color=\"orange\" mode=\"md\">Package History</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\" *ngIf=\"!historyStatus && !skeletonStatus\">\r\n    <img src=\"assets/img/history.png\" alt=\"\">\r\n    <h5>No history</h5>\r\n  </div>\r\n  \r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ng-container *ngIf=\"skeletonStatus\">\r\n          <ion-item lines=\"full\">\r\n            <ion-label>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <h3><ion-skeleton-text style=\"height: 13px;\" animated></ion-skeleton-text></h3>\r\n                  <div><ion-skeleton-text style=\"height: 7px;margin-top: 5px;\" animated></ion-skeleton-text></div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item lines=\"full\">\r\n            <ion-label>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <h3><ion-skeleton-text style=\"height: 13px;\" animated></ion-skeleton-text></h3>\r\n                  <div><ion-skeleton-text style=\"height: 7px;margin-top: 5px;\" animated></ion-skeleton-text></div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!skeletonStatus && historyStatus\">\r\n          <ng-container *ngFor=\"let item of historyArr\">\r\n            <ion-item lines=\"full\" *ngIf=\"item.data.type === 'package'\">\r\n              <ion-label>\r\n                <ion-row>\r\n                  <ion-col size=\"6\">\r\n                    <h3><ion-text color=\"orange\">{{item.packageData.name}} Package</ion-text></h3>\r\n                    <div>{{item.data.timestamp.toDate() | date : 'dd/MM/yyyy hh:mm a'}}</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"6\">\r\n                    <h3 class=\"ion-text-right\">AED {{item.data.amount}}</h3>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ng-container>\r\n        </ng-container>  \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ 8284:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile/edit-profile/edit-profile.component.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar color=\"white\" mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"orange\" text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"orange\" mode=\"md\" class=\"ion-text-center\">Edit Profile</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      &nbsp;&nbsp;&nbsp;\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <img style=\"height: 8rem; width: 8rem\" class=\"profilePhoto\" src=\"{{photoURL}}\" alt=\"\">\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <div class=\"upload-btn-wrapper\">\r\n          <button class=\"btn-upload\">Change Photo</button>\r\n          <input type=\"file\" (change)=\"onImageSelected($event);\" accept=\"image/*\" name=\"myfile\" />\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"editForm\">\r\n        <div style=\"margin-bottom: 20px;\">\r\n          <label>Name <b style=\"color: red;\" *ngIf=\"mendatory\">*</b></label>\r\n          <input type=\"text\" [(ngModel)]=\"name\" placeholder=\"Enter Name\">\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"editForm\">\r\n        <div style=\"margin-bottom: 20px;\">\r\n          <label>Email <b style=\"color: red;\" *ngIf=\"mendatory\">*</b></label>\r\n          <input type=\"text\" [(ngModel)]=\"email\" placeholder=\"Enter Email\" [disabled]=\"provider === 'gmail' || provider === 'facebook'\">\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"editForm\">\r\n        <div style=\"margin-bottom: 20px;\">\r\n          <label>Mobile Number <b style=\"color: red;\" *ngIf=\"mendatory\">*</b></label>\r\n          <input type=\"text\" [(ngModel)]=\"phoneNumber\" [disabled]=\"provider === 'phone'\" placeholder=\"Enter Mobile No.\">\r\n        </div>\r\n      </ion-col>\r\n      \r\n      <ion-col size=\"6\" class=\"editForm\">\r\n        <div style=\"margin-bottom: 20px;\">\r\n          <label>Age</label>\r\n          <input type=\"number\" placeholder=\"Enter Age\" [(ngModel)]=\"age\">\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\" class=\"editForm\">\r\n        <div style=\"margin-bottom: 20px;\">\r\n          <label>Gender</label>\r\n          <ion-item lines=\"none\" mode=\"ios\">\r\n            <ion-select placeholder=\"Select One\" [(ngModel)]=\"gender\">\r\n              <ion-select-option disabled=\"\" value=\"\">--select--</ion-select-option>\r\n              <ion-select-option value=\"male\">Male</ion-select-option>\r\n              <ion-select-option value=\"female\">Female</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"editForm\">\r\n        <div style=\"margin-bottom: 20px;\">\r\n          <label>Country</label>\r\n          <ion-item lines=\"none\" mode=\"ios\">\r\n            <ion-select style=\"width: 100%\" placeholder=\"Select One\" [(ngModel)]=\"country\">\r\n              <ion-select-option disabled=\"\" value=\"\">--select--</ion-select-option>\r\n              <ng-container *ngFor=\"let item of countries\">\r\n                <ion-select-option value=\"{{item.name}}\">{{item.name}}</ion-select-option>\r\n              </ng-container>\r\n            </ion-select>\r\n          </ion-item>\r\n        </div>\r\n      </ion-col>\r\n      \r\n      <ion-col size=\"12\" class=\"editForm\">\r\n        <div style=\"margin-bottom: 20px;\">\r\n          <label>Date of Birth</label>\r\n          <ion-item lines=\"none\" mode=\"ios\">\r\n            <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"Select Date\" [(ngModel)]=\"dob\"></ion-datetime>\r\n          </ion-item>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n<!-- \r\nwhile(n>0)    \r\n{    \r\nm=n%10;    \r\nsum=sum+m;    \r\nn=n/10;    \r\n}\r\n-->\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-button expand=\"block\" mode=\"ios\" class=\"getPackage\" (click)=\"editProfile()\">\r\n    <ng-container *ngIf=\"!loader\">Update Profile</ng-container>\r\n    <ion-spinner *ngIf=\"loader\" mode=\"md\"></ion-spinner>\r\n  </ion-button>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 5044:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile/profile.component.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar color=\"transparent\" mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button [routerLink]=\"['/home']\">\r\n        <ion-back-button text=\"\" color=\"white\"></ion-back-button>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"white\" class=\"ion-text-center\" mode=\"md\">Profile</ion-title>\r\n    <ion-buttons slot=\"end\" mode=\"ios\">\r\n      <ion-button>\r\n        &nbsp;&nbsp;&nbsp;\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n  <div class=\"mainBody\">\r\n    <ion-grid style=\"padding-bottom: unset;\">\r\n      <ion-row style=\"padding-bottom: unset;\">\r\n        <ion-col size=\"12\">\r\n          <div>\r\n            <img style=\"height: 9rem;width: 9rem;\" src=\"{{userS.userPhotoUrl}}\" class=\"center img\" alt=\"\">\r\n            <h4 style=\"color: white;\">{{userS.userName === '' ? 'User' : userS.userName}}</h4>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"7\">\r\n          <ion-item class=\"profileFields ion-no-padding\" color=\"transparent\" lines=\"none\">\r\n            <ion-label>\r\n              <h2>Email</h2>\r\n              <h5>{{userS.userEmail === '' ? '-' : userS.userEmail}}</h5>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n          <ion-item class=\"profileFields ion-no-padding\" color=\"transparent\" lines=\"none\">\r\n            <ion-label>\r\n              <h2>Mobile Number</h2>\r\n              <h5>{{userS.userPhoneNumber === '' ? '-' : userS.userPhoneNumber}}</h5>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n  <div>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <div class=\"supportContent\" *ngIf=\"segmentValue === '1'\">\r\n\r\n            <h4>General</h4>\r\n            <div class=\"card\">\r\n              <ion-item lines=\"none\" class=\"ion-no-padding\" [routerLink]=\"['/profile/edit-profile']\">\r\n                <ion-icon name=\"aperture-outline\" slot=\"start\"></ion-icon>\r\n                <ion-label>Account Setting</ion-label>\r\n              </ion-item>\r\n            </div>\r\n\r\n            <div class=\"card\">\r\n              <ion-item lines=\"none\" class=\"ion-no-padding\" [routerLink]=\"['/profile/active-package']\">\r\n                <ion-icon name=\"diamond-outline\" slot=\"start\"></ion-icon>\r\n                <ion-label>My Active Package</ion-label>\r\n              </ion-item>\r\n            </div>\r\n\r\n            <div class=\"card\">\r\n              <ion-item lines=\"none\" class=\"ion-no-padding\" [routerLink]=\"['/profile/checkins-history']\">\r\n                <ion-icon name=\"shield-checkmark-outline\" slot=\"start\"></ion-icon>\r\n                <ion-label>Check-Ins History</ion-label>\r\n              </ion-item>\r\n            </div>\r\n\r\n            <div class=\"card\">\r\n              <ion-item lines=\"none\" class=\"ion-no-padding\" [routerLink]=\"['/profile/package-history']\">\r\n                <ion-icon name=\"albums-outline\" slot=\"start\"></ion-icon>\r\n                <ion-label>Package History</ion-label>\r\n              </ion-item>\r\n            </div>\r\n\r\n            <div class=\"card\">\r\n              <ion-item lines=\"none\" class=\"ion-no-padding\" [routerLink]=\"['/profile/wallet-history']\">\r\n                <ion-icon name=\"wallet-outline\" slot=\"start\"></ion-icon>\r\n                <ion-label>Wallet History</ion-label>\r\n              </ion-item>\r\n            </div>\r\n\r\n            \r\n            <div class=\"card\">\r\n              <ion-item lines=\"none\" class=\"ion-no-padding\" [routerLink]=\"['/profile/auto-renewal-history']\">\r\n                <ion-icon name=\"repeat-outline\" slot=\"start\"></ion-icon>\r\n                <ion-label>Auto Renewal Packages</ion-label>\r\n              </ion-item>\r\n            </div>\r\n\r\n            <div class=\"card\">\r\n              <ion-item lines=\"none\" class=\"ion-no-padding\" (click)=\"logout()\">\r\n                <ion-icon name=\"power\" slot=\"start\"></ion-icon>\r\n                <ion-label>Logout</ion-label>\r\n              </ion-item>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 3379:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/wallet-history/wallet-history.component.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" color=\"white\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button color=\"orange\" text=\"\"></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-buttons>\r\n    <ion-title color=\"orange\" mode=\"md\">Wallet History</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\" *ngIf=\"!historyStatus && !skeletonStatus\">\r\n    <ion-icon name=\"wallet\" color=\"orange\"></ion-icon>\r\n    <h5>No Wallet History</h5>\r\n  </div>\r\n  \r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ng-container *ngIf=\"skeletonStatus\">\r\n          <ion-item lines=\"full\">\r\n            <ion-label>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <h3><ion-skeleton-text style=\"height: 13px;\" animated></ion-skeleton-text></h3>\r\n                  <div><ion-skeleton-text style=\"height: 7px;margin-top: 5px;\" animated></ion-skeleton-text></div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item lines=\"full\">\r\n            <ion-label>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <h3><ion-skeleton-text style=\"height: 13px;\" animated></ion-skeleton-text></h3>\r\n                  <div><ion-skeleton-text style=\"height: 7px;margin-top: 5px;\" animated></ion-skeleton-text></div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!skeletonStatus && historyStatus\">\r\n          <ng-container *ngFor=\"let item of historyArr\">\r\n            <ion-item lines=\"full\" *ngIf=\"item.type === 'referalCodeApply'\">\r\n              <ion-label>\r\n                <ion-row>\r\n                  <ion-col size=\"6\">\r\n                    <h3><ion-text color=\"orange\">{{item.userName}} Apply Referral Code</ion-text></h3>\r\n                    <div>{{item.time.toDate() | date : 'dd/MM/yyyy hh:mm a'}}</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"6\">\r\n                    <h3 class=\"ion-text-right\">AED {{item.amount}}</h3>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ng-container>\r\n        </ng-container>  \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_profile_profile_module_ts.js.map