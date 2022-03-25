(self["webpackChunkworkinbuddy"] = self["webpackChunkworkinbuddy"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 201:
/*!**********************************************!*\
  !*** ./src/app/__helper/locality.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalityService": () => (/* binding */ LocalityService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);



let LocalityService = class LocalityService {
    constructor(geolocation) {
        this.geolocation = geolocation;
        this.locality = "";
        navigator.geolocation.getCurrentPosition((position) => {
            this.currentLat = position.coords.latitude;
            this.currentLog = position.coords.longitude;
        });
    }
    getLocalityFromLatLng(lat, lng) {
        const geocoder = new google.maps.Geocoder();
        geocoder
            .geocode({ location: { lat, lng } })
            .then((response) => {
            if (response.results[0]) {
                if (response.results[0].address_components.length > 0) {
                    response.results[0].address_components.forEach(element => {
                        if (element.types.indexOf('locality') !== -1) {
                            this.locality = element.short_name;
                        }
                    });
                }
            }
        }).catch((e) => { });
    }
};
LocalityService.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__.Geolocation }
];
LocalityService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LocalityService);



/***/ }),

/***/ 5875:
/*!******************************************!*\
  !*** ./src/app/__helper/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);




let UserService = class UserService {
    constructor(auth, firestore) {
        this.auth = auth;
        this.firestore = firestore;
        this.userName = '';
        this.userEmail = '';
        this.userPhoneNumber = '';
        this.userPhotoUrl = '';
        this.userProvider = '';
        this.userUID = '';
        this.userDocId = '';
        this.userReferalCode = '';
        this.auth.authState.subscribe(user => {
            if (user) {
                this.userUID = user.uid;
                this.getData();
            }
        });
    }
    getData() {
        this.firestore.collection("users", ref => ref.where("uid", "==", this.userUID)).get().subscribe(result => {
            if (result.size > 0) {
                result.docs.map((docs) => {
                    let data = docs.data();
                    console.log(data);
                    this.userName = data.name;
                    this.userEmail = data.email;
                    this.userPhoneNumber = data.phoneNumber;
                    this.userPhotoUrl = data.photoURL;
                    if (this.userPhotoUrl !== '' && this.userPhotoUrl !== null && this.userPhotoUrl !== undefined) {
                        this.userPhotoUrl = data.photoURL;
                    }
                    else {
                        this.userPhotoUrl = 'assets/img/profilePhoto.png';
                    }
                    this.userProvider = data.provider;
                    this.userDocId = data.docId;
                    this.userReferalCode = data.referalCode;
                    this.userAge = data.age;
                    this.userGender = data.gender;
                    this.userCountry = data.country;
                    this.userDob = data.dob;
                });
            }
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_0__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/compat/auth-guard */ 5049);




const redirectUnauthorizedToLogin = () => (0,_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_0__.redirectUnauthorizedTo)(['auth/splash-screen']);
const redirectLoggedInToItems = () => (0,_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_0__.redirectLoggedInTo)(['home']);
const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomeModule),
        canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
    },
    {
        path: 'package-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-src_app_profile_profile_module_ts"), __webpack_require__.e("src_app_package_package_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./package/package.module */ 3117)).then(m => m.PackageModule),
        canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
    },
    {
        path: 'filter',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_filter_filter_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./filter/filter.module */ 7655)).then(m => m.FilterPageModule),
        canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
    },
    {
        path: 'support',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_support_support_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./support/support.module */ 6758)).then(m => m.SupportModule),
        canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
    },
    {
        path: 'venue',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("src_app_venue_venue_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./venue/venue.module */ 2073)).then(m => m.VenueModule),
        canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 4523)).then(m => m.ProfileModule),
        canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
    },
    {
        path: 'auth',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_auth_auth_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 1674)).then(m => m.AuthModule),
        canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems }
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 3494);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _helper_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./__helper/user.service */ 5875);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ 1543);













const { PushNotifications, Modals, App } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__.Plugins;

let AppComponent = class AppComponent {
    constructor(changeDetector, menu, platform, alertController, location, router, statusBar, angularAuth, firestore, userS, geolocation) {
        this.changeDetector = changeDetector;
        this.menu = menu;
        this.platform = platform;
        this.alertController = alertController;
        this.location = location;
        this.router = router;
        this.statusBar = statusBar;
        this.angularAuth = angularAuth;
        this.firestore = firestore;
        this.userS = userS;
        this.geolocation = geolocation;
        this.name = 'User';
        this.photoURL = '';
        this.lastTimeBackPress = 0;
        this.timePeriodToExit = 2000;
        this.backdropVisible = false;
        this.initializeApp();
    }
    toggleBackdrop(isVisible) {
        this.backdropVisible = isVisible;
        this.changeDetector.detectChanges();
    }
    navigate(name) {
        this.router.navigate(['/' + name]);
    }
    ngOnInit() {
        this.geolocation.getCurrentPosition();
    }
    notification() {
        if (this.platform.is("android") || this.platform.is("ios")) {
            // Some issue with our setup and push will not work
            PushNotifications.addListener('registrationError', (error) => {
                // alert('Error on registration: ' + JSON.stringify(error));
                console.log('Error on registration: ' + JSON.stringify(error));
            });
            PushNotifications.addListener('pushNotificationReceived', (notification) => {
                var audio1 = new Audio('assets/audio.mp3');
                console.log('Audio');
                audio1.play();
                // alert('Push received: ' + JSON.stringify(notification));
                console.log('Push received: ', notification);
                let alertRet = Modals.alert({
                    title: notification.title,
                    message: notification.body
                });
            });
            // Method called when tapping on a notification
            PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
                console.log('Push action performed: ' + notification);
            });
        }
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
        this.platform.ready().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Platform ready");
            // await SplashScreen.hide();
            _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_6__.GoogleAuth.init();
            this.statusBar.backgroundColorByHexString('#FF6000');
            this.statusBar.styleLightContent();
        }));
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm !',
                message: 'Confirm to Exit App !',
                mode: 'ios',
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => { }
                    }, {
                        text: 'Exit',
                        handler: () => {
                            navigator["app"].exitApp();
                        }
                    }]
            });
            yield alert.present();
        });
    }
    closeFirst() {
        this.menu.close('first');
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__.StatusBar },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_12__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__.AngularFirestore },
    { type: _helper_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__.Geolocation }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 3494);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/compat/storage */ 3893);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat */ 8939);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/database */ 9978);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ 2329);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shared-components.module */ 6175);



















firebase_app__WEBPACK_IMPORTED_MODULE_5__.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebaseConfig);
let AppModule = class AppModule {
    constructor(db) {
        this.db = db;
    }
};
AppModule.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore }
];
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__.SharedComponentsModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_11__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebaseConfig),
            _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_12__.AngularFireDatabaseModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_11__.AngularFireModule,
            _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_13__.AngularFireAuthModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        ],
        providers: [
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation,
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar,
            _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore,
            _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_17__.AngularFireStorage,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient,
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 3406:
/*!*********************************************************!*\
  !*** ./src/app/components/drawerv/drawerv.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawervComponent": () => (/* binding */ DrawervComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_drawerv_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./drawerv.component.html */ 4112);
/* harmony import */ var _drawerv_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawerv.component.scss */ 7568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _helper_locality_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../__helper/locality.service */ 201);
/* harmony import */ var src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/__helper/user.service */ 5875);










let DrawervComponent = class DrawervComponent {
    constructor(toastController, gestureCtrl, platform, firestore, router, localityService, navCtrl, userS) {
        this.toastController = toastController;
        this.gestureCtrl = gestureCtrl;
        this.platform = platform;
        this.firestore = firestore;
        this.router = router;
        this.localityService = localityService;
        this.navCtrl = navCtrl;
        this.userS = userS;
        this.openState = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.parentChild = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.isOpen = false;
        this.openHeight = 0;
        this.skeletonStatus = false;
        this.venue = [];
        this.isVenue = false;
        this.name = '';
        this.packagelist = [];
        this.skeletonStatusP = false;
        this.companyName = '';
        this.officialEmail = '';
        this.mendatoryS = false;
        this.loader = false;
    }
    ngAfterViewInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    ngOnInit() {
        this.venueCall();
        this.packageCall();
    }
    packageCall() {
        this.firestore.collection("packages", ref => ref.where("group", "==", false).where("publish", "==", true)).get().subscribe(result => {
            if (result.size > 0) {
                this.skeletonStatusP = true;
                result.docs.map((docs) => {
                    docs.data().features.forEach(element => {
                        this.firestore.collection('featuresMaster', ref => ref.where("docId", "==", element['docId'])).get().subscribe(result1 => {
                            let features = [];
                            result1.docs.map((data) => {
                                if (result1.size !== features.length) {
                                    features.push({ name: data.data().name });
                                }
                            });
                            this.packagelist.push({ data: docs.data(), features: features });
                            if (result.size === this.packagelist.length) {
                                this.skeletonStatusP = false;
                            }
                        });
                    });
                });
            }
        });
    }
    packageDetails(docId) {
        this.router.navigate(['/package-details'], {
            queryParams: { docId: docId }
        });
        this.toggleDrawer(this.name);
    }
    venueCall() {
        if (this.localityService.locality === "") {
            this.getCurrentLocationNearByVenues();
        }
        else {
            this.getVenues();
        }
    }
    getVenues() {
        this.venue = [];
        this.skeletonStatus = true;
        let interval = setInterval(() => {
            if (this.localityService.locality !== "") {
                this.firestore.collection("venue", ref => ref.where("city", "==", this.localityService.locality).where('publish', "==", true)).get().subscribe(result => {
                    if (result.size > 0) {
                        this.isVenue = true;
                        result.docs.map((docs) => {
                            this.firestore.collection('venue').doc(docs.id).collection('media').get().subscribe(result1 => {
                                let service = [];
                                result1.docs.map((data) => {
                                    if (result1.size !== service.length) {
                                        service.push(data.data());
                                    }
                                });
                                this.venue.push({ data: docs.data(), services: service });
                                if (result.size === this.venue.length) {
                                    this.skeletonStatus = false;
                                }
                            });
                        });
                    }
                    else {
                        this.isVenue = false;
                        this.skeletonStatus = false;
                    }
                });
                clearInterval(interval);
            }
        }, 1000);
    }
    getCurrentLocationNearByVenues() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.localityService.getLocalityFromLatLng(position.coords.latitude, position.coords.longitude);
                this.getVenues();
                this.parentChild.emit();
            });
        }
    }
    venueDetails(docId) {
        this.navCtrl.navigateForward('/venue/venue-details/' + docId);
        this.toggleDrawer(this.name);
    }
    toggleDrawer(name) {
        this.name = name;
        if (name === 'Venue') {
            this.venueCall();
        }
        this.openHeight = (this.platform.height() / 100) * 60;
        const drawer = this.drawer.nativeElement;
        this.openState.emit(!this.isOpen);
        if (!this.isOpen) {
            drawer.style.visibility = 'visible';
            drawer.style.transition = '.4s ease-in';
            drawer.style.transform = `translateY(${-this.openHeight}px)`;
            this.isOpen = true;
        }
        else {
            drawer.style.visibility = 'hidden';
            drawer.style.transition = '.4s ease-out';
            drawer.style.transform = '';
            this.isOpen = false;
        }
    }
    successPresentToast(msg) {
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
    errorPresentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                mode: 'ios',
                duration: 2000,
                color: 'danger'
            });
            toast.present();
        });
    }
    submit() {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.companyName !== '' && this.officialEmail !== '' && this.userS.userEmail !== '' && this.userS.userPhoneNumber !== '') {
            if (re.test(this.userS.userEmail) == false) {
                this.errorPresentToast("User Email not valid");
            }
            else if (re.test(this.officialEmail) == false) {
                this.errorPresentToast("Official Email not valid");
            }
            else {
                this.loader = true;
                const newId = this.firestore.createId();
                this.firestore.collection("groupMembershipRequest").doc(newId).set({
                    docId: newId,
                    companyName: this.companyName,
                    officialEmail: this.officialEmail,
                    personalEmail: this.userS.userEmail,
                    mobileNumber: this.userS.userPhoneNumber,
                    uid: this.userS.userUID,
                    timestamp: new Date(),
                    status: 0
                }).then(res => {
                    this.loader = false;
                    this.successPresentToast("Request Send");
                    this.toggleDrawer(this.name);
                    this.firestore.collection("users").doc(this.userS.userDocId).update({
                        email: this.userS.userEmail,
                        phoneNumber: this.userS.userPhoneNumber
                    });
                });
            }
        }
        else {
            this.errorPresentToast("All fields mendatory");
        }
    }
};
DrawervComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.GestureController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _helper_locality_service__WEBPACK_IMPORTED_MODULE_2__.LocalityService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
DrawervComponent.propDecorators = {
    drawer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['drawer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef },] }],
    openState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output, args: ['openStateChanged',] }],
    parentChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output, args: ['parentChild',] }]
};
DrawervComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-drawerv',
        template: _raw_loader_drawerv_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_drawerv_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DrawervComponent);



/***/ }),

/***/ 6175:
/*!********************************************************!*\
  !*** ./src/app/components/shared-components.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedComponentsModule": () => (/* binding */ SharedComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _drawerv_drawerv_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawerv/drawerv.component */ 3406);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-search-filter */ 4981);







let SharedComponentsModule = class SharedComponentsModule {
};
SharedComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_drawerv_drawerv_component__WEBPACK_IMPORTED_MODULE_0__.DrawervComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__.Ng2SearchPipeModule
        ],
        exports: [_drawerv_drawerv_component__WEBPACK_IMPORTED_MODULE_0__.DrawervComponent]
    })
], SharedComponentsModule);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyAIWZjS-lV52pk4iC6TE9plwMAEEv-P7KE",
        authDomain: "workingbuddy-67af6.firebaseapp.com",
        projectId: "workingbuddy-67af6",
        storageBucket: "workingbuddy-67af6.appspot.com",
        messagingSenderId: "1032809104603",
        appId: "1:1032809104603:web:4d17116cb28acc303178fe",
        measurementId: "G-3RNXLVY0K4"
    },
    paymentUrl: "https://api.sandbox.checkout.com/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		2239,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backdrop {\n  width: 100%;\n  height: 100%;\n  background: #00000094;\n  z-index: 10;\n  position: absolute;\n}\n\n.fade {\n  transition: 0.5s linear all;\n  opacity: 0;\n  z-index: -1;\n}\n\n.fade-in {\n  transition: 0.5s linear all;\n  opacity: 1;\n}\n\nion-menu ion-toolbar ion-item {\n  padding: 10px 0;\n}\n\nion-menu ion-toolbar ion-item ion-avatar {\n  height: 100px;\n  width: 100px;\n}\n\nion-menu ion-toolbar ion-item ion-icon {\n  font-size: xx-large;\n}\n\nion-menu ion-toolbar .welcome-text {\n  padding: 0 10px;\n}\n\nion-menu ion-content ion-grid .img {\n  border-radius: 50%;\n  margin-top: 10px;\n  width: 36px;\n}\n\nion-menu ion-content ion-grid .center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 40%;\n}\n\nion-menu ion-content ion-grid h4 {\n  text-align: center;\n  font-weight: bold;\n}\n\nion-menu ion-content .bgTop {\n  position: fixed;\n  top: -7%;\n  height: auto;\n  z-index: -1;\n}\n\nion-menu ion-content .menu-header-bg {\n  height: 180px;\n  width: 350px;\n}\n\nion-menu ion-content .header-content {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n\nion-menu ion-content .header-content ion-label {\n  margin-left: 10px;\n}\n\nion-menu ion-content .header-content ion-label img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: solid 7px #FF6000;\n}\n\nion-menu ion-content .header-content ion-label h2 {\n  font-weight: 300;\n  color: #fff;\n}\n\nion-menu ion-content .header-content ion-label p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n}\n\nion-menu ion-content ion-item img {\n  height: 25px;\n}\n\nion-menu ion-content ion-item ion-label {\n  font-family: \"Geometria\";\n}\n\nion-menu ion-content ion-item i {\n  font-size: x-large;\n}\n\nion-menu ion-content hr {\n  background: #fff;\n  margin: 10px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLDJCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUdRO0VBQ0ksZUFBQTtBQUFaOztBQUNZO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFDaEI7O0FBQ1k7RUFDSSxtQkFBQTtBQUNoQjs7QUFFUTtFQUNJLGVBQUE7QUFBWjs7QUFPWTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBTGhCOztBQVFjO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBTmhCOztBQVNjO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQVBsQjs7QUFXUTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFUWjs7QUFZUTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBVlo7O0FBcUJRO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQW5CWjs7QUFxQlk7RUFDSSxpQkFBQTtBQW5CaEI7O0FBb0JnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQWxCcEI7O0FBcUJnQjtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQW5CcEI7O0FBc0JnQjtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQXBCcEI7O0FBMEJZO0VBQ0ksWUFBQTtBQXhCaEI7O0FBMEJZO0VBQ0ksd0JBQUE7QUF4QmhCOztBQTBCWTtFQUNJLGtCQUFBO0FBeEJoQjs7QUE0QlE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBMUJaIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZHJvcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA5NDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuXHJcbiAgLmZhZGUge1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBsaW5lYXIgYWxsO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuXHJcbiAgLmZhZGUtaW4ge1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBsaW5lYXIgYWxsO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmlvbi1tZW51e1xyXG4gICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgaW9uLWF2YXRhcntcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC53ZWxjb21lLXRleHR7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIGlvbi1jb250ZW50e1xyXG5cclxuICAgICAgICBpb24tZ3JpZHtcclxuICAgICAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAuY2VudGVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgaDR7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJnVG9wIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IC03JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1lbnUtaGVhZGVyLWJne1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICNGRjYwMDA7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0IGJvdHRvbSwgI0ZGQzI5OSwjRkY2MDAwKTtcclxuICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IHJnYmEoMjU1LCAyMjYsIDk4LCAwLjUpO1xyXG4gICAgICAgICAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xyXG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCA1MHB4O1xyXG4gICAgICAgICAgICAvLyBtYXJnaW4tbGVmdDogLTE4cHg7XHJcbiAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlci1jb250ZW50e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMzBweDtcclxuICAgICAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCA3cHggI0ZGNjAwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTRlNGU0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0dlb21ldHJpYSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaHJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 7568:
/*!***********************************************************!*\
  !*** ./src/app/components/drawerv/drawerv.component.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".drawer {\n  position: absolute;\n  box-shadow: 0 5px 10px rgba(167, 160, 185, 0.05), 0 10px 20px rgba(166, 173, 201, 0.2);\n  width: 100%;\n  border-radius: 20px;\n  bottom: calc(-76vh + env(safe-area-inset-bottom));\n  height: 80vh;\n  z-index: 11;\n  background: #fff;\n}\n.drawer ion-content .container {\n  text-align: center;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 100%;\n}\n.drawer ion-content .container img {\n  height: 4rem;\n  opacity: 0.8;\n}\n.drawer ion-content .container h5 {\n  font-size: small;\n  color: #4285F4;\n  font-weight: 800;\n  opacity: 0.8;\n}\n.drawer ion-content .packagesListClass {\n  width: 100%;\n  height: 70%;\n  overflow: scroll;\n}\n.drawer ion-content .packagesListClass h2 {\n  font-weight: bold;\n}\n.drawer ion-content .packagesListClass .packages .items {\n  padding: unset;\n}\n.drawer ion-content .packagesListClass .packages .items ion-card {\n  margin: 5px;\n  background: #FCF8F7;\n  box-shadow: unset;\n}\n.drawer ion-content .packagesListClass .packages .items ion-card ion-card-header {\n  padding: unset;\n}\n.drawer ion-content .packagesListClass .packages .items ion-card ion-card-header p {\n  text-align: center;\n  color: #FF8010;\n  font-weight: 600;\n  font-size: 16px;\n}\n.drawer ion-content .packagesListClass .packages .items ion-card ion-card-content {\n  padding: 5px;\n}\n.drawer ion-content .packagesListClass .packages .items ion-card ion-card-content p {\n  text-align: center;\n  color: #FF8010;\n  font-weight: 600;\n  font-size: 22px;\n}\n.drawer ion-content .packagesListClass .packages .items ion-card ion-card-content ion-row {\n  border-bottom: 1px solid #ffc299c4;\n}\n.drawer ion-content .packagesListClass .packages .items ion-card ion-card-content ion-row .col_1 {\n  padding: unset;\n}\n.drawer ion-content .packagesListClass .packages .items ion-card ion-card-content ion-row .col_1 ion-icon {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 50%;\n}\n.drawer ion-content .packagesListClass .package-list-search-contain {\n  --background: transparent;\n  padding: 5px 10px;\n  border-radius: 10px;\n}\n.drawer ion-content .packagesListClass .package-list-search-contain ion-icon {\n  color: white;\n  font-size: xx-large;\n}\n.drawer ion-content .packagesListClass .package-list-search-contain ion-label {\n  font-size: medium;\n  color: white;\n  font-weight: 500;\n}\n.drawer ion-content .packagesListClass .package-list-search-contain .input-container {\n  /* IE10 */\n  display: flex;\n  width: 100%;\n  border-radius: 10px;\n}\n.drawer ion-content .packagesListClass .package-list-search-contain .icon {\n  padding: 5px 10px 10px 5px;\n  background: white;\n  color: #FF6000;\n  text-align: center;\n  margin: 5px 0;\n  font-size: x-large;\n  border: solid 1px #FF6000;\n  border-left: unset;\n  border-bottom-right-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.drawer ion-content .packagesListClass .package-list-search-contain .icon1 {\n  margin: 10px 0;\n  padding-left: 20px;\n  padding-right: unset;\n  background: white;\n  color: #FF6000;\n  text-align: center;\n  font-size: x-large;\n}\n.drawer ion-content .packagesListClass .package-list-search-contain .input-field {\n  width: 100%;\n  padding: 5px;\n  margin: 5px 0;\n  outline: unset;\n  border: solid 1px #FF6000;\n  border-right: unset;\n  border-bottom-left-radius: 10px;\n  border-top-left-radius: 10px;\n  font-weight: lighter;\n}\n.drawer ion-content .packagesListClass .package-list-search-contain .input-field ::placeholder {\n  color: #BDBDBD;\n}\n.drawer ion-content .packagesListClass .package-list-title-contain {\n  --background: transparent;\n}\n.drawer ion-content .packagesListClass .package-list-title-contain ion-label {\n  font-size: large;\n  font-weight: bold;\n  font-family: \"Geometria\";\n}\n.drawer ion-content .packagesListClass .package-list-title-contain i {\n  color: #FF6000;\n  font-size: large;\n  border: solid 1px #FF6000;\n  border-radius: 5px;\n  padding: 5px;\n}\n.drawer ion-content .packagesListClass .package-list-data {\n  margin: 20px 0;\n  border: solid 1px #FF6000;\n  border-radius: 10px;\n  box-sizing: border-box;\n  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);\n}\n.drawer ion-content .packagesListClass .package-list-data div,\n.drawer ion-content .packagesListClass .package-list-data .item-native {\n  padding: unset;\n}\n.drawer ion-content .packagesListClass .package-list-data ion-avatar {\n  width: 100px;\n  height: 100px;\n  background: #FF6000;\n  border-radius: unset;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  margin: 0 20px 0 0;\n}\n.drawer ion-content .packagesListClass .package-list-data p {\n  word-break: break-all;\n}\n.drawer ion-content .packagesListClass .package-list-data h3 {\n  font-weight: bold;\n  text-align: right;\n}\n.drawer ion-content .packagesListClass .packages-card ion-item {\n  --border-radius: 20px;\n  margin: 10px 5px;\n  border-bottom: 1px solid #FF6000;\n}\n.drawer ion-content .packagesListClass .packages-card ion-item ion-avatar {\n  background: #FF6000;\n  border-radius: 5px;\n  height: 70px;\n  width: 70px;\n}\n.drawer ion-content .packagesListClass .packages-card ion-item ion-avatar img {\n  border-radius: 5px;\n}\n.drawer ion-content .packagesListClass .packages-card ion-item ion-label {\n  padding: 5px 0;\n}\n.drawer ion-content .packagesListClass .packages-card ion-item ion-label h2 {\n  font-size: small;\n  color: #FF8010;\n}\n.drawer ion-content .packagesListClass .packages-card ion-item ion-label h3 {\n  font-size: small;\n}\n.drawer ion-content .packagesListClass .packages-card ion-item ion-label p {\n  text-align: right;\n  color: black;\n  font-size: small;\n  font-weight: 800;\n}\n.drawer ion-content .packagesListClass .packages-card ion-item ion-icon {\n  color: #FCB735;\n}\n.drawer ion-content .groupMemberShip {\n  width: 100%;\n  height: 70%;\n  overflow: scroll;\n}\n.drawer ion-content .groupMemberShip h2 {\n  font-weight: bold;\n}\n.drawer ion-content .groupMemberShip .packages .items {\n  padding: unset;\n}\n.drawer ion-content .groupMemberShip .packages .items ion-card {\n  margin: 5px;\n  background: #FCF8F7;\n  box-shadow: unset;\n}\n.drawer ion-content .groupMemberShip .packages .items ion-card ion-card-header {\n  padding: unset;\n}\n.drawer ion-content .groupMemberShip .packages .items ion-card ion-card-header p {\n  text-align: center;\n  color: #FF8010;\n  font-weight: 600;\n  font-size: 16px;\n}\n.drawer ion-content .groupMemberShip .packages .items ion-card ion-card-content {\n  padding: 5px;\n}\n.drawer ion-content .groupMemberShip .packages .items ion-card ion-card-content p {\n  text-align: center;\n  color: #FF8010;\n  font-weight: 600;\n  font-size: 22px;\n}\n.drawer ion-content .groupMemberShip .packages .items ion-card ion-card-content ion-row {\n  border-bottom: 1px solid #ffc299c4;\n}\n.drawer ion-content .groupMemberShip .packages .items ion-card ion-card-content ion-row .col_1 {\n  padding: unset;\n}\n.drawer ion-content .groupMemberShip .packages .items ion-card ion-card-content ion-row .col_1 ion-icon {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 50%;\n}\n.drawer ion-content .groupMemberShip .getPackage {\n  text-align: center;\n  height: 50px;\n  width: 100%;\n  color: #fff;\n  background: linear-gradient(to right top, #FF6000, #f99958);\n  font-family: \"Geometria\";\n  border: solid 1px #fff;\n  border-radius: 10px;\n  font-size: large;\n}\n.drawer ion-content .groupMemberShip .inputs label {\n  font-style: normal;\n  font-weight: normal;\n  font-size: small;\n  line-height: 18px;\n  color: #FF6000;\n}\n.drawer ion-content .groupMemberShip .inputs input {\n  outline: unset;\n  width: 100%;\n  border: 1px solid #FF6000;\n  border-radius: 10px;\n  margin-top: 5px;\n  font-size: small;\n  padding: 10px;\n}\n.drawer ion-content .groupMemberShip .inputs .inputGroup {\n  margin-top: 10px;\n}\n.drawer ion-content h2 {\n  font-weight: bold;\n}\n.drawer ion-content .package-list-search-contain {\n  --background: transparent !important;\n  padding: 5px 10px;\n  border-radius: 10px;\n}\n.drawer ion-content .package-list-search-contain ion-icon {\n  color: white;\n  background: white;\n  font-size: xx-large;\n}\n.drawer ion-content .package-list-search-contain ion-label {\n  font-size: medium;\n  color: white;\n  font-weight: 500;\n}\n.drawer ion-content .package-list-search-contain .input-container {\n  /* IE10 */\n  display: flex;\n  width: 100%;\n  border-radius: 10px;\n}\n.drawer ion-content .package-list-search-contain .icon {\n  padding: 5px 10px 10px 5px;\n  color: #FF6000;\n  text-align: center;\n  margin: 5px 0;\n  font-size: x-large;\n  border: solid 1px #FF6000;\n  border-left: unset;\n  border-bottom-right-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.drawer ion-content .package-list-search-contain .icon1 {\n  margin: 10px 0;\n  padding-left: 20px;\n  padding-right: unset;\n  background: white;\n  color: #FF6000;\n  text-align: center;\n  font-size: x-large;\n}\n.drawer ion-content .package-list-search-contain .input-field {\n  width: 100%;\n  padding: 5px;\n  margin: 5px 0;\n  outline: unset;\n  border: solid 1px #FF6000;\n  border-right: unset;\n  border-bottom-left-radius: 10px;\n  border-top-left-radius: 10px;\n  font-weight: lighter;\n}\n.drawer ion-content .package-list-search-contain .input-field ::placeholder {\n  color: #BDBDBD;\n}\n.drawer ion-content .package-list-title-contain {\n  --background: transparent;\n}\n.drawer ion-content .package-list-title-contain ion-label {\n  font-size: large;\n  font-family: \"Geometria\";\n}\n.drawer ion-content .package-list-title-contain i {\n  color: #FF6000;\n  font-size: large;\n  border: solid 1px #FF6000;\n  border-radius: 5px;\n  padding: 5px;\n}\n.drawer ion-content .venue-cards ion-card {\n  background: #FCF8F7;\n  border-radius: 10px;\n  box-shadow: unset;\n}\n.drawer ion-content .venue-cards ion-card ion-card-header {\n  padding: unset;\n}\n.drawer ion-content .venue-cards ion-card ion-card-header .orange_Slide {\n  text-align: center;\n}\n.drawer ion-content .venue-cards ion-card ion-card-header .orange_Slide img,\n.drawer ion-content .venue-cards ion-card ion-card-header .orange_Slide video {\n  width: 100%;\n  height: 100px;\n  object-fit: unset;\n}\n.drawer ion-content .venue-cards ion-card ion-card-content {\n  padding: 5px 8px;\n}\n.drawer ion-content .venue-cards ion-card ion-card-content h2 {\n  font-size: small;\n  font-weight: 800;\n  color: #FF6000;\n  margin-bottom: unset;\n}\n.drawer ion-content .venue-cards ion-card ion-card-content div ion-icon {\n  color: #666666;\n  font-size: x-small;\n}\n.drawer ion-content .venue-cards ion-card ion-card-content h6 {\n  font-size: x-small;\n  color: #666666;\n}\n.drawer ion-content .venue-cards ion-item {\n  border-bottom: 1px solid #FFD5A8;\n  margin: 10px 5px;\n}\n.drawer ion-content .venue-cards ion-item ion-avatar {\n  height: 70px;\n  width: 70px;\n}\n.drawer ion-content .venue-cards ion-item ion-avatar img {\n  border-radius: 5px;\n}\n.drawer ion-content .venue-cards ion-item ion-label {\n  padding: 5px 0;\n}\n.drawer ion-content .venue-cards ion-item ion-label h2 {\n  font-size: small;\n  color: #FF8010;\n}\n.drawer ion-content .venue-cards ion-item ion-label h3 {\n  font-size: small;\n}\n.drawer ion-content .venue-cards ion-item ion-label p {\n  color: black;\n  font-weight: 800;\n}\n.drawer ion-content .venue-cards ion-item ion-icon {\n  color: #FCB735;\n}\n.drawer-pull {\n  background: #cccccc;\n  height: 4px;\n  width: 60px;\n  border-radius: 2px;\n}\nion-list ion-item ion-label {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyYXdlcnYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHNGQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaURBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFHSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQUROO0FBR007RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQURSO0FBSU07RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFGUjtBQVFJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQU5OO0FBT007RUFDRSxpQkFBQTtBQUxSO0FBU1E7RUFDRSxjQUFBO0FBUFY7QUFTVTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBUFo7QUFTWTtFQUNFLGNBQUE7QUFQZDtBQVNjO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBUGhCO0FBV1k7RUFDRSxZQUFBO0FBVGQ7QUFXYztFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVRoQjtBQVljO0VBQ0Usa0NBQUE7QUFWaEI7QUFZZ0I7RUFDRSxjQUFBO0FBVmxCO0FBWWtCO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtBQVZwQjtBQW1CTTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQWpCUjtBQW1CUTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQWpCVjtBQW9CUTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBbEJWO0FBcUJRO0VBRUUsU0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFuQlY7QUFzQlE7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUFwQlY7QUF1QlE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFyQlY7QUF3QlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtBQXRCVjtBQXdCVTtFQUNFLGNBQUE7QUF0Qlo7QUEyQk07RUFDRSx5QkFBQTtBQXpCUjtBQTJCUTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQXpCVjtBQTRCUTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBMUJWO0FBOEJNO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRDQUFBO0FBNUJSO0FBOEJROztFQUVFLGNBQUE7QUE1QlY7QUErQlE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUE3QlY7QUFnQ1E7RUFDRSxxQkFBQTtBQTlCVjtBQWlDUTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUEvQlY7QUFxQ1E7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFuQ1Y7QUFxQ1U7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFuQ1o7QUFxQ1k7RUFDRSxrQkFBQTtBQW5DZDtBQXVDVTtFQUNFLGNBQUE7QUFyQ1o7QUF1Q1k7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFyQ2Q7QUF3Q1k7RUFDRSxnQkFBQTtBQXRDZDtBQXlDWTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUF2Q2Q7QUEyQ1U7RUFDRSxjQUFBO0FBekNaO0FBK0NJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQTdDTjtBQThDTTtFQUNFLGlCQUFBO0FBNUNSO0FBZ0RRO0VBQ0UsY0FBQTtBQTlDVjtBQStDVTtFQUNFLFdBQUE7RUFBWSxtQkFBQTtFQUFvQixpQkFBQTtBQTNDNUM7QUE0Q1k7RUFDRSxjQUFBO0FBMUNkO0FBMkNjO0VBQ0Usa0JBQUE7RUFBbUIsY0FBQTtFQUFlLGdCQUFBO0VBQWlCLGVBQUE7QUF0Q25FO0FBeUNZO0VBQ0UsWUFBQTtBQXZDZDtBQXdDYztFQUNFLGtCQUFBO0VBQW1CLGNBQUE7RUFBZSxnQkFBQTtFQUFpQixlQUFBO0FBbkNuRTtBQXFDYztFQUNFLGtDQUFBO0FBbkNoQjtBQW9DZ0I7RUFDRSxjQUFBO0FBbENsQjtBQW1Da0I7RUFDRSxTQUFBO0VBQVUsa0JBQUE7RUFBbUIsUUFBQTtFQUFTLGdDQUFBO0VBQWlDLFNBQUE7QUE3QjNGO0FBc0NNO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwyREFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBcENWO0FBd0NRO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0FBdkNWO0FBMENRO0VBQ0UsY0FBQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQXhDWjtBQTJDUTtFQUNFLGdCQUFBO0FBekNWO0FBOENJO0VBQ0UsaUJBQUE7QUE1Q047QUErQ0k7RUFDRSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUE3Q047QUErQ007RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQTdDUjtBQWdETTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBOUNSO0FBaURNO0VBRUUsU0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUEvQ1I7QUFrRE07RUFDRSwwQkFBQTtFQUVBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FBakRSO0FBb0RNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBbERSO0FBcURNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7QUFuRFI7QUFxRFE7RUFDRSxjQUFBO0FBbkRWO0FBd0RJO0VBQ0UseUJBQUE7QUF0RE47QUF3RE07RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0FBdERSO0FBeURNO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUF2RFI7QUE2RE07RUFDRSxtQkFBQTtFQUdBLG1CQUFBO0VBQ0EsaUJBQUE7QUE3RFI7QUErRFE7RUFDRSxjQUFBO0FBN0RWO0FBK0RVO0VBQ0Usa0JBQUE7QUE3RFo7QUErRFk7O0VBRUUsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQTdEZDtBQWtFUTtFQUNFLGdCQUFBO0FBaEVWO0FBa0VVO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQWhFWjtBQW9FWTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQWxFZDtBQXNFVTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQXBFWjtBQXlFTTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7QUF2RVI7QUEwRVE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQXhFVjtBQTBFVTtFQUNFLGtCQUFBO0FBeEVaO0FBNEVRO0VBQ0UsY0FBQTtBQTFFVjtBQTRFVTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQTFFWjtBQTZFVTtFQUNFLGdCQUFBO0FBM0VaO0FBOEVVO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBNUVaO0FBZ0ZRO0VBQ0UsY0FBQTtBQTlFVjtBQXNGQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQW5GRjtBQXdGSTtFQUNFLFlBQUE7QUFyRk4iLCJmaWxlIjoiZHJhd2Vydi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcmF3ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYigxNjcgMTYwIDE4NSAvIDUlKSwgMCAxMHB4IDIwcHggcmdiKDE2NiAxNzMgMjAxIC8gMjAlKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvdHRvbTogY2FsYygtNzZ2aCArIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSk7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIHotaW5kZXg6IDExO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG4gIGlvbi1jb250ZW50IHtcclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoNXtcclxuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICAgIGNvbG9yOiAjNDI4NUY0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5wYWNrYWdlc0xpc3RDbGFzcyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDcwJTtcclxuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucGFja2FnZXMge1xyXG4gICAgICAgIC5pdGVtcyB7XHJcbiAgICAgICAgICBwYWRkaW5nOiB1bnNldDtcclxuXHJcbiAgICAgICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkNGOEY3O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiB1bnNldDtcclxuXHJcbiAgICAgICAgICAgIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogdW5zZXQ7XHJcblxyXG4gICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRjgwMTA7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG5cclxuICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkY4MDEwO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGlvbi1yb3cge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmMyOTljNDtcclxuXHJcbiAgICAgICAgICAgICAgICAuY29sXzEge1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiB1bnNldDtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnBhY2thZ2UtbGlzdC1zZWFyY2gtY29udGFpbiB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbnB1dC1jb250YWluZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgICAgICAvKiBJRTEwICovXHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggMTBweCA1cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIGNvbG9yOiAjRkY2MDAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNGRjYwMDA7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogdW5zZXQ7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmljb24xIHtcclxuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIGNvbG9yOiAjRkY2MDAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlucHV0LWZpZWxkIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICAgIG91dGxpbmU6IHVuc2V0O1xyXG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI0ZGNjAwMDtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogdW5zZXQ7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG5cclxuICAgICAgICAgIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI0JEQkRCRDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYWNrYWdlLWxpc3QtdGl0bGUtY29udGFpbiB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2VvbWV0cmlhJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgY29sb3I6ICNGRjYwMDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI0ZGNjAwMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYWNrYWdlLWxpc3QtZGF0YSB7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI0ZGNjAwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblxyXG4gICAgICAgIGRpdixcclxuICAgICAgICAuaXRlbS1uYXRpdmUge1xyXG4gICAgICAgICAgcGFkZGluZzogdW5zZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkY2MDAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogdW5zZXQ7XHJcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCAyMHB4IDAgMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYWNrYWdlcy1jYXJkIHtcclxuXHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDVweDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkY2MDAwO1xyXG5cclxuICAgICAgICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkY2MDAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG5cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNGRjgwMTA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZDQjczNTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZ3JvdXBNZW1iZXJTaGlwe1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICAgIGgye1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucGFja2FnZXN7XHJcbiAgICAgICAgLml0ZW1ze1xyXG4gICAgICAgICAgcGFkZGluZzogdW5zZXQ7XHJcbiAgICAgICAgICBpb24tY2FyZHtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHg7YmFja2dyb3VuZDogI0ZDRjhGNztib3gtc2hhZG93OiB1bnNldDtcclxuICAgICAgICAgICAgaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6dW5zZXQ7XHJcbiAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtjb2xvcjogI0ZGODAxMDtmb250LXdlaWdodDogNjAwO2ZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtjb2xvcjogI0ZGODAxMDtmb250LXdlaWdodDogNjAwO2ZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW9uLXJvd3tcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNmZmMyOTljNDtcclxuICAgICAgICAgICAgICAgIC5jb2xfMXtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiA1MCU7dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7bGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZ2V0UGFja2FnZXtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjRkY2MDAwLCAjZjk5OTU4KTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2VvbWV0cmlhJztcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNmZmY7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmlucHV0c3tcclxuICAgICAgICBsYWJlbHtcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcblxyXG4gICAgICAgICAgY29sb3I6ICNGRjYwMDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dHtcclxuICAgICAgICAgIG91dGxpbmU6IHVuc2V0O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGNjAwMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlucHV0R3JvdXB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhY2thZ2UtbGlzdC1zZWFyY2gtY29udGFpbiB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbnB1dC1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgIC8qIElFMTAgKi9cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pY29uIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweCAxMHB4IDVweDtcclxuXHJcbiAgICAgICAgY29sb3I6ICNGRjYwMDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNGRjYwMDA7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IHVuc2V0O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaWNvbjEge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogI0ZGNjAwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5wdXQtZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgIG91dGxpbmU6IHVuc2V0O1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNGRjYwMDA7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiB1bnNldDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcblxyXG4gICAgICAgIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgY29sb3I6ICNCREJEQkQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnBhY2thZ2UtbGlzdC10aXRsZS1jb250YWluIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICBmb250LWZhbWlseTogJ0dlb21ldHJpYSc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGNvbG9yOiAjRkY2MDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI0ZGNjAwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnZlbnVlLWNhcmRzIHtcclxuXHJcbiAgICAgIGlvbi1jYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkNGOEY3O1xyXG4gICAgICAgIC8vIGJvcmRlci10b3A6IHNvbGlkIDFweCBsaWdodGdyYXk7XHJcbiAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGxpZ2h0Z3JheTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHVuc2V0O1xyXG5cclxuICAgICAgICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgICAgICAgcGFkZGluZzogdW5zZXQ7XHJcblxyXG4gICAgICAgICAgLm9yYW5nZV9TbGlkZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIGltZyxcclxuICAgICAgICAgICAgdmlkZW8ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LWZpdDogdW5zZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDhweDtcclxuXHJcbiAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkY2MDAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB1bnNldDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDYge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkZENUE4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCA1cHg7XHJcblxyXG5cclxuICAgICAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG5cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuXHJcbiAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkY4MDEwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgY29sb3I6ICNGQ0I3MzU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuLmRyYXdlci1wdWxsIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <div class=\"backdrop\" [ngClass]=\"backdropVisible ? 'fade-in' : 'fade'\" tappable (click)=\"drawer.toggleDrawer('')\"></div>\r\n  <app-drawerv (openStateChanged)=\"toggleBackdrop($event)\" #drawer></app-drawerv>\r\n  \r\n  <ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\r\n    <ion-header class=\"ion-no-border\">\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <div>\r\n              <img style=\"height: 6rem;width: 6rem;\" src=\"{{userS.userPhotoUrl}}\" class=\"center img\" alt=\"\">\r\n              <h4>{{userS.userName === '' ? 'User' : userS.userName}}</h4>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <img class=\"bgTop\" src=\"assets/img/topShape.png\" alt=\"\">\r\n      <hr>\r\n      <ion-list>\r\n        <ion-item lines=\"none\" (click)=\"closeFirst();\" [routerLink]=\"['/profile']\">\r\n          <img src=\"assets/icon/_user.png\" slot=\"start\" alt=\"\">\r\n          <ion-label>Profile</ion-label>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" (click)=\"closeFirst();\" [routerLink]=\"['/profile/my-favourite']\">\r\n          <img src=\"assets/icon/_like.png\" slot=\"start\" alt=\"\">\r\n          <ion-label>My Favourite</ion-label>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" (click)=\"closeFirst(); drawer.toggleDrawer('Package')\">\r\n          <img src=\"assets/icon/_list.png\" slot=\"start\" alt=\"\">\r\n          <ion-label>Packages</ion-label>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" (click)=\"closeFirst();\" [routerLink]=\"['/support/referral-code']\">\r\n          <img src=\"assets/icon/_change.png\" slot=\"start\" alt=\"\">\r\n          <ion-label>Refer & Friend</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n      <hr>\r\n      <ion-list>\r\n        <ion-item lines=\"none\">\r\n          <img src=\"assets/icon/_faq.png\" slot=\"start\" alt=\"\">\r\n          <ion-label>FAQs</ion-label>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" (click)=\"closeFirst()\" [routerLink]=\"['/support/terms-conditions']\">\r\n          <img src=\"assets/icon/_terms.png\" slot=\"start\" alt=\"\" >\r\n          <ion-label>Terms & Conditions</ion-label>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" (click)=\"closeFirst()\" [routerLink]=\"['/support/privacy-policy']\">\r\n          <img src=\"assets/icon/_lock.png\" slot=\"start\" alt=\"\">\r\n          <ion-label>Privacy Policy</ion-label>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" (click)=\"closeFirst()\" [routerLink]=\"['/support/about-us']\">\r\n          <img src=\"assets/icon/_group.png\" slot=\"start\" alt=\"\">\r\n          <ion-label>About us</ion-label>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" (click)=\"closeFirst()\" [routerLink]=\"['/support/contact-us']\">\r\n          <img src=\"assets/img/contact-us.png\" slot=\"start\" alt=\"\">\r\n          <ion-label>Contact Us</ion-label>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" (click)=\"logout(); closeFirst();\">\r\n          <img src=\"assets/icon/_logout.png\" slot=\"start\" alt=\"\">\r\n          <ion-label>Logout</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ 4112:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/drawerv/drawerv.component.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"drawer\" #drawer style=\"visibility: hidden;\">\n  <div class=\"ion-text-center\">\n    <ion-button expand=\"full\" fill=\"clear\" (click)=\"toggleDrawer('')\">\n      <div class=\"drawer-pull\"></div>\n    </ion-button>\n  </div>\n\n  <ng-container id=\"mainContent\">\n    \n    <ion-content style=\"--padding-start: 10px;--padding-end: 10px;\">\n    \n      <ng-container *ngIf=\"name === 'Venue'\">\n        <ion-grid style=\"padding: unset;width: 100%;height: 70%;overflow: scroll;\">\n          <ion-row style=\"padding: unset;\">\n            <ion-col size=\"12\">\n              <ion-item lines=\"none\" class=\"ion-no-padding\">\n                <ion-title color=\"orange\" class=\"ion-text-center\">Explorer Venues</ion-title>\n                <ion-icon slot=\"end\" color=\"orange\" name=\"locate\" title=\"Find your near by Venues\" (click)=\"getCurrentLocationNearByVenues()\"></ion-icon>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item lines=\"none\" class=\"package-list-title-contain\">\n                <ion-label>{{ localityService.locality }} Near by Venues</ion-label>\n              </ion-item>\n            </ion-col>\n            <ng-container *ngIf=\"!skeletonStatus\">\n              <ng-container *ngIf=\"venue.length === 0 && !skeletonStatus\">\n                <div class=\"container\">\n                  <div class=\"ion-text-center\">\n                    <img src=\"assets/gif/icon3.png\"  alt=\"\" style=\"height: 6rem;\">\n                  </div>\n                  <h5>No venues in {{localityService.locality}}.</h5>\n                </div>\n              </ng-container>\n              <ng-container *ngFor=\"let item of venue\">\n                <ion-col size=\"6\">\n                  <div class=\"venue-cards\">\n                    <ion-card style=\"margin: unset;\" (click)=\"venueDetails(item.data.docId)\">\n                      <ion-card-header>\n                        <ion-slides class=\"orange_Slide\" pager=\"true\">\n                          <ng-container *ngFor=\"let service of item.services\">\n                            <ion-slide>\n                              <img *ngIf=\"service.type.includes('image')\" src=\"{{service.icon}}\" alt=\"\" class=\"bg\">\n                              <video *ngIf=\"service.type.includes('video')\" controls>\n                                <source src=\"{{item.icon}}\" type=\"video/mp4\">\n                              </video>  \n                            </ion-slide>\n                          </ng-container>\n                        </ion-slides>\n                      </ion-card-header>\n                      <ion-card-content>\n                        <h2>{{item.data.name}}</h2>\n                        <div>\n                          <ion-icon name=\"star\"></ion-icon>\n                          <ion-icon name=\"star\"></ion-icon>\n                          <ion-icon name=\"star\"></ion-icon>\n                          <ion-icon name=\"star\"></ion-icon>\n                          <ion-icon name=\"star\"></ion-icon>\n                        </div>\n                        <h6>{{item.data.address}}</h6>\n                      </ion-card-content>\n                    </ion-card>\n                  </div>\n                </ion-col>\n              </ng-container>\n            </ng-container>\n            <ng-container *ngIf=\"skeletonStatus\">\n              <ion-col size=\"6\">\n                <div class=\"venue-cards\">\n                  <ion-card>\n                    <ion-card-header>\n                      <ion-skeleton-text style=\"height: 100px;\" animated></ion-skeleton-text>\n                    </ion-card-header>\n                    <ion-card-content>\n                      <h2>\n                        <ion-skeleton-text style=\"height: 16px;\" animated></ion-skeleton-text>\n                      </h2>\n                      <div>\n                        <ion-skeleton-text style=\"height: 7px;margin-top: 17px;\" animated></ion-skeleton-text>\n                      </div>\n                      <h6>\n                        <ion-skeleton-text style=\"height: 7px;margin-top: 5px;\" animated></ion-skeleton-text>\n                      </h6>\n                    </ion-card-content>\n                  </ion-card>\n                </div>\n              </ion-col>\n              <ion-col size=\"6\">\n                <div class=\"venue-cards\">\n                  <ion-card>\n                    <ion-card-header>\n                      <ion-skeleton-text style=\"height: 100px;\" animated></ion-skeleton-text>\n                    </ion-card-header>\n                    <ion-card-content>\n                      <h2>\n                        <ion-skeleton-text style=\"height: 16px;\" animated></ion-skeleton-text>\n                      </h2>\n                      <div>\n                        <ion-skeleton-text style=\"height: 7px;margin-top: 17px;\" animated></ion-skeleton-text>\n                      </div>\n                      <h6>\n                        <ion-skeleton-text style=\"height: 7px;margin-top: 5px;\" animated></ion-skeleton-text>\n                      </h6>\n                    </ion-card-content>\n                  </ion-card>\n                </div>\n              </ion-col>\n            </ng-container>  \n          </ion-row>\n        </ion-grid>\n      </ng-container>  \n      \n      <ng-container *ngIf=\"name === 'Package'\">\n        <div class=\"packagesListClass\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-item lines=\"none\" class=\"ion-no-padding\">\n                  <ion-title color=\"orange\" class=\"ion-text-center\">Packages</ion-title>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        \n          <ion-grid class=\"packages\">\n            <ion-row>\n              <ng-container *ngIf=\"skeletonStatusP\">\n                <ion-col class=\"items\" size=\"6\">\n                  <ion-card mode=\"ios\">\n                    <ion-card-header>\n                      <p class=\"ion-text-center\"><ion-skeleton-text style=\"width: 30%;margin-left: 35%;height: 16px;\" animated></ion-skeleton-text></p>\n                    </ion-card-header>\n                    <ion-card-content>\n                      <p class=\"ion-text-center\"><ion-skeleton-text style=\"width: 60%;margin-left: 20%;height: 30px;\" animated></ion-skeleton-text></p>\n                      <br>\n                      <ion-row style=\"border: unset;\">\n                        <ion-col class=\"ion-text-center\" size=\"1\">\n                          <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\n                        </ion-col>\n                        <ion-col size=\"11\" class=\"ion-text-center\">\n                          <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\n                        </ion-col>\n                      </ion-row>\n                      \n                      <ion-row style=\"border: unset;\">\n                        <ion-col class=\"ion-text-center\" size=\"1\">\n                          <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\n                        </ion-col>\n                        <ion-col size=\"11\" class=\"ion-text-center\">\n                          <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\n                          <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\n                        </ion-col>\n                      </ion-row>\n                      \n                      <ion-row style=\"border: unset;\">\n                        <ion-col class=\"ion-text-center\" size=\"1\">\n                          <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\n                        </ion-col>\n                        <ion-col size=\"11\" class=\"ion-text-center\">\n                          <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\n                        </ion-col>\n                      </ion-row>\n                    </ion-card-content>\n                  </ion-card>  \n                </ion-col>\n                <ion-col class=\"items\" size=\"6\">\n                  <ion-card mode=\"ios\">\n                    <ion-card-header>\n                      <p class=\"ion-text-center\"><ion-skeleton-text style=\"width: 30%;margin-left: 35%;height: 16px;\" animated></ion-skeleton-text></p>\n                    </ion-card-header>\n                    <ion-card-content>\n                      <p class=\"ion-text-center\"><ion-skeleton-text style=\"width: 60%;margin-left: 20%;height: 30px;\" animated></ion-skeleton-text></p>\n                      <br>\n                      <ion-row style=\"border: unset;\">\n                        <ion-col class=\"ion-text-center\" size=\"1\">\n                          <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\n                        </ion-col>\n                        <ion-col size=\"11\" class=\"ion-text-center\">\n                          <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\n                        </ion-col>\n                      </ion-row>\n                      \n                      <ion-row style=\"border: unset;\">\n                        <ion-col class=\"ion-text-center\" size=\"1\">\n                          <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\n                        </ion-col>\n                        <ion-col size=\"11\" class=\"ion-text-center\">\n                          <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\n                          <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\n                        </ion-col>\n                      </ion-row>\n                      \n                      <ion-row style=\"border: unset;\">\n                        <ion-col class=\"ion-text-center\" size=\"1\">\n                          <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\n                        </ion-col>\n                        <ion-col size=\"11\" class=\"ion-text-center\">\n                          <ion-skeleton-text style=\"height: 10px;\" animated></ion-skeleton-text>\n                        </ion-col>\n                      </ion-row>\n                    </ion-card-content>\n                  </ion-card>  \n                </ion-col>\n              </ng-container>\n              \n              <ng-container *ngIf=\"!skeletonStatusP\">\n                <ion-col class=\"items\" size=\"6\" *ngFor=\"let item of packagelist\">\n                  <ion-card mode=\"ios\" (click)=\"packageDetails(item.data.docId)\">\n                    <ion-card-header>\n                      <p>{{item.data.name}}</p>\n                    </ion-card-header>\n                    <ion-card-content>\n                      <p>AED {{item.data.amount}}</p>\n                      <br>\n                      <ion-row>\n                        <ion-col class=\"col_1\" size=\"1\">\n                          <ion-icon size=\"small\" color=\"orange\" name=\"checkmark-circle\"></ion-icon>\n                        </ion-col>\n                        <ion-col size=\"11\">\n                          {{item.data.checkIns}} CheckIns\n                        </ion-col>\n                      </ion-row>\n                      <ion-row>\n                        <ion-col class=\"col_1\" size=\"1\">\n                          <ion-icon size=\"small\" color=\"orange\" name=\"checkmark-circle\"></ion-icon>\n                        </ion-col>\n                        <ion-col size=\"11\">\n                          Free {{item.data.hours}} Meeting Room Hours\n                        </ion-col>\n                      </ion-row>\n                      <ion-row style=\"border: unset;\">\n                        <ion-col class=\"col_1\" size=\"1\">\n                          <ion-icon size=\"small\" color=\"orange\" name=\"checkmark-circle\"></ion-icon>\n                        </ion-col>\n                        <ion-col size=\"11\">\n                          Free \n                          <ng-container *ngFor=\"let feature of item.features\">\n                            <span>{{feature.name}} &nbsp;</span>\n                          </ng-container>\n                        </ion-col>\n                      </ion-row>\n                    </ion-card-content>\n                  </ion-card>  \n                </ion-col>\n              </ng-container>\n        \n            </ion-row>\n          </ion-grid>\n        </div>\n      </ng-container>\n\n      <ng-container *ngIf=\"name === 'Group'\">\n        <ion-grid class=\"groupMemberShip\">\n          <ion-row class=\"packages\">\n            <ion-col class=\"items\" size=\"12\">\n              <ion-card mode=\"ios\">\n                <ion-card-header>\n                  <p>Group Membership Request</p>\n                </ion-card-header>\n                <ion-card-content>\n                  <div class=\"inputs\">\n                    <div class=\"inputGroup\">\n                      <label>Company Name</label>\n                      <input type=\"text\" [(ngModel)]=\"companyName\" placeholder=\"Enter Company Name\">\n                    </div>\n                    <div class=\"inputGroup\">\n                      <label>Official Email</label>\n                      <input type=\"email\" [(ngModel)]=\"officialEmail\" placeholder=\"Enter Official Email\">\n                    </div>\n                    <div class=\"inputGroup\">\n                      <label>Personal Email</label>\n                      <input type=\"email\" [disabled]=\"userS.userProvider === 'google'\" [(ngModel)]=\"userS.userEmail\" placeholder=\"Enter Personal Email\">\n                    </div>\n                    <div class=\"inputGroup\">\n                      <label>Mobile Number</label>\n                      <input type=\"text\" [disabled]=\"userS.userProvider === 'phone'\" [(ngModel)]=\"userS.userPhoneNumber\" placeholder=\"Enter Mobile Number\">\n                    </div>\n                  </div>\n                  <br>\n                  <button [disabled]=\"loader\" class=\"getPackage\" (click)=\"submit()\">\n                    <ng-container *ngIf=\"!loader\">Submit</ng-container>\n                    <ion-spinner mode=\"md\" color=\"white\" *ngIf=\"loader\"></ion-spinner>\n                  </button>\n                </ion-card-content>\n              </ion-card>  \n            </ion-col>\n            \n          </ion-row>\n        </ion-grid>\n      </ng-container>\n\n\n    </ion-content>\n  </ng-container>\n  \n</div>");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map