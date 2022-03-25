(self["webpackChunkworkinbuddy"] = self["webpackChunkworkinbuddy"] || []).push([["src_app_home_home_module_ts"],{

/***/ 4142:
/*!******************************************!*\
  !*** ./src/app/__helper/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/push-notifications */ 8748);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ 5875);







let AuthService = class AuthService {
    constructor(authState, angularFirestore, userS, router) {
        this.authState = authState;
        this.angularFirestore = angularFirestore;
        this.userS = userS;
        this.router = router;
        this.authState.onAuthStateChanged((user) => {
            if (user) {
                let tokenId = '';
                var result = '';
                var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                var charactersLength = characters.length;
                for (var i = 0; i < 6; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_0__.PushNotifications.requestPermissions().then(result => {
                    if (result.receive === 'granted') {
                        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_0__.PushNotifications.register();
                    }
                    else {
                    }
                });
                _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_0__.PushNotifications.addListener('registration', (token) => {
                    tokenId = token.value;
                });
                this.angularFirestore.collection('users', ref => ref.where("uid", '==', user.uid)).get().subscribe(res => {
                    if (res.size === 0) {
                        if (user.providerData[0]['providerId'] === 'google.com') {
                            angularFirestore.collection('users', ref => ref.where("uid", '==', user.uid)).get().subscribe(res => {
                                if (res.size === 0) {
                                    let interval = setInterval(() => {
                                        if (tokenId !== '' && tokenId !== undefined) {
                                            clearInterval(interval);
                                            const newId = angularFirestore.createId();
                                            let refCode = result;
                                            angularFirestore.collection('users').doc(newId).set({
                                                docId: newId,
                                                name: user.displayName,
                                                phoneNumber: '',
                                                provider: 'gmail',
                                                uid: user.uid,
                                                address: '',
                                                photoURL: user.photoURL,
                                                email: user.email,
                                                timestamp: new Date(),
                                                token: tokenId,
                                                referalCode: refCode,
                                                balance: 0,
                                                age: 0,
                                                gender: '',
                                                country: '',
                                                dob: ''
                                            }).then(res => {
                                                console.log("User Add usign Gmail");
                                                this.userS.userName = user.displayName;
                                                this.userS.userEmail = user.email;
                                                this.userS.userPhotoUrl = user.photoURL;
                                                this.userS.userProvider = 'gmail';
                                                this.userS.userPhoneNumber = '';
                                                this.userS.userUID = user.uid;
                                                this.userS.userReferalCode = refCode;
                                                this.userS.userDocId = newId;
                                            });
                                        }
                                    }, 1000);
                                }
                            });
                        }
                        if (user.providerData[0]['providerId'] === 'facebook.com') {
                            if (user.email !== null && user.email !== undefined && user.email !== '') {
                                angularFirestore.collection('users', ref => ref.where("uid", '==', user.uid)).get().subscribe(res => {
                                    if (res.size === 0) {
                                        let interval = setInterval(() => {
                                            if (tokenId !== '' && tokenId !== undefined) {
                                                clearInterval(interval);
                                                const newId = angularFirestore.createId();
                                                let refCode = result;
                                                angularFirestore.collection('users').doc(newId).set({
                                                    docId: newId,
                                                    name: user.displayName,
                                                    phoneNumber: '',
                                                    provider: 'facebook',
                                                    uid: user.uid,
                                                    address: '',
                                                    photoURL: user.photoURL,
                                                    email: user.email,
                                                    timestamp: new Date(),
                                                    token: tokenId,
                                                    referalCode: refCode,
                                                    balance: 0,
                                                    age: 0,
                                                    gender: '',
                                                    country: '',
                                                    dob: ''
                                                }).then(res => {
                                                    console.log("User Add using facebook");
                                                    this.userS.userName = user.displayName;
                                                    this.userS.userEmail = user.email;
                                                    this.userS.userPhotoUrl = user.photoURL;
                                                    this.userS.userProvider = 'facebook';
                                                    this.userS.userPhoneNumber = '';
                                                    this.userS.userUID = user.uid;
                                                    this.userS.userReferalCode = refCode;
                                                    this.userS.userDocId = newId;
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                            else {
                                user.delete();
                                this.authState.signOut().then(() => {
                                    this.router.navigate(['/auth/splash-screen']);
                                });
                            }
                        }
                    }
                    else {
                        this.userS.getData();
                    }
                });
            }
            else {
                console.log('User Not Logined');
            }
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_1__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 9866:
/*!******************************************!*\
  !*** ./src/app/__helper/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 476);





let DataService = class DataService {
    constructor(router, navCtrl, firestore) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.firestore = firestore;
        this.locations = [];
        this.getLocations();
    }
    getLocations() {
        let date = new Date();
        let day = date.getDay();
        let daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let currentDay = daysInWeek[day].toLocaleLowerCase();
        this.firestore.collection("venue", ref => ref.where('publish', "==", true)).get().subscribe(result => {
            this.locLength = result.size;
            result.docs.map((docs) => {
                this.firestore.collection("venue").doc(docs.id).collection("media").get().subscribe(mediaResult => {
                    if (mediaResult.size > 0) {
                        let array = [];
                        mediaResult.docs.map((docsMedia) => {
                            array.push(docsMedia.data());
                            if (array.length === mediaResult.size) {
                                let abc = { name: docs.data().name, lng: docs.data().longitude, lat: docs.data().latitude, desc: docs.data().about_venue, index: 1, docId: docs.data().docId, city: docs.data().city, address: docs.data().address, image: array, timings: docs.data().timings[currentDay] };
                                this.locations.push(abc);
                            }
                        });
                    }
                    else {
                        let abc = { name: docs.data().name, lng: docs.data().longitude, lat: docs.data().latitude, desc: docs.data().about_venue, index: 1, docId: docs.data().docId, city: docs.data().city, address: docs.data().address, image: '', timings: docs.data().timings[currentDay] };
                        this.locations.push(abc);
                    }
                });
            });
        });
    }
    venueDetails(docId) {
        this.navCtrl.navigateForward('/venue/venue-details/' + docId);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.NavController },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing/landing.component */ 4598);




const routes = [
    {
        path: '',
        component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_0__.LandingComponent
    }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomeRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing/landing.component */ 4598);
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components.module */ 6175);
/* harmony import */ var _search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-modal/search-modal.component */ 2294);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 9342);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _components_drawerv_drawerv_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/drawerv/drawerv.component */ 3406);
/* harmony import */ var _helper_locality_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../__helper/locality.service */ 201);
/* harmony import */ var _helper_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../__helper/data.service */ 9866);
/* harmony import */ var _helper_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../__helper/auth.service */ 4142);














let HomeModule = class HomeModule {
};
HomeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [
            _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__.LandingComponent,
            _search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_3__.SearchModalComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule
        ],
        providers: [
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__.GooglePlus,
            _components_drawerv_drawerv_component__WEBPACK_IMPORTED_MODULE_5__.DrawervComponent,
            _helper_locality_service__WEBPACK_IMPORTED_MODULE_6__.LocalityService,
            _helper_data_service__WEBPACK_IMPORTED_MODULE_7__.DataService,
            _helper_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService,
        ]
    })
], HomeModule);



/***/ }),

/***/ 4598:
/*!***************************************************!*\
  !*** ./src/app/home/landing/landing.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./landing.component.html */ 3600);
/* harmony import */ var _landing_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.component.scss */ 1446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.component */ 5041);
/* harmony import */ var _helper_locality_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../__helper/locality.service */ 201);
/* harmony import */ var _helper_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../__helper/data.service */ 9866);
/* harmony import */ var _helper_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../__helper/user.service */ 5875);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ 1704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_drawerv_drawerv_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/drawerv/drawerv.component */ 3406);
/* harmony import */ var _search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../search-modal/search-modal.component */ 2294);
/* harmony import */ var src_app_helper_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/__helper/auth.service */ 4142);


















let LandingComponent = class LandingComponent {
    constructor(authService, toastController, route, changeDetector, dataS, loadingController, router, menu, geolocation, modalController, http, angularFirestore, angularFireauth, appC, localityService, userS, drawC) {
        this.authService = authService;
        this.toastController = toastController;
        this.route = route;
        this.changeDetector = changeDetector;
        this.dataS = dataS;
        this.loadingController = loadingController;
        this.router = router;
        this.menu = menu;
        this.geolocation = geolocation;
        this.modalController = modalController;
        this.http = http;
        this.angularFirestore = angularFirestore;
        this.angularFireauth = angularFireauth;
        this.appC = appC;
        this.localityService = localityService;
        this.userS = userS;
        this.drawC = drawC;
        this.iconImage = {
            url: "assets/img/mapIcon.png",
            scaledSize: new google.maps.Size(35, 50),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(25, 50) // anchor
        };
        this.locationGeo = {
            url: "assets/img/locationGeo.png",
            scaledSize: new google.maps.Size(35, 50),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(25, 50) // anchor
        };
        this.iconCurrentLocImage = {
            url: "assets/img/dot1.png",
            scaledSize: new google.maps.Size(40, 40),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(25, 50) // anchor
        };
        this.mapOtions = {
            center: { lat: 24.2992049, lng: 54.3880679 },
            zoom: 8,
            styles: [{
                    "featureType": "transit",
                    "stylers": [{ "visibility": "off" }]
                }, {
                    "featureType": "poi.attraction",
                    "stylers": [{ "visibility": "off" }]
                }, {
                    "featureType": "poi.business",
                    "stylers": [{ "visibility": "off" }]
                }, {
                    "featureType": "poi.government",
                    "stylers": [{ "visibility": "off" }]
                }, {
                    "featureType": "poi.medical",
                    "stylers": [{ "visibility": "off" }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "labels",
                    "stylers": [{ "visibility": "off" }]
                }, {
                    "featureType": "poi.place_of_worship",
                    "stylers": [{ "visibility": "off" }]
                }, {
                    "featureType": "poi.school",
                    "stylers": [{ "visibility": "off" }]
                }, {
                    "featureType": "poi.sports_complex",
                    "stylers": [{ "visibility": "off" }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "visibility": "on" },
                        { "color": "#ffffff" }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "stylers": [
                        { "visibility": "on" },
                        { "color": "#fceee6" }
                    ]
                }, {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [
                        { "color": "#fceee6" },
                        { "visibility": "on" }
                    ]
                }
            ]
        };
        this.locations = [];
        this.locStatus = false;
        this.slidesOptions = {
            slidesPerView: 1.6,
            centeredSlides: true,
            spaceBetween: 10,
            loop: true,
        };
        this.infoWindows = [];
        this.currentLocationS = false;
        this.place_id = '';
        this.markers = [];
        this.backdropVisible = false;
        this.count = 2;
        this.tokenId = '';
        this.currentVenuId = '';
    }
    functionSlide() {
        if (this.count === 2 || this.count === 5) {
            jquery__WEBPACK_IMPORTED_MODULE_7__("#PackageFun").click();
        }
        else if (this.count === 4 || this.count === 1) {
            jquery__WEBPACK_IMPORTED_MODULE_7__("#GroupFun").click();
        }
        else if (this.count === 3) {
            jquery__WEBPACK_IMPORTED_MODULE_7__("#VenueFun").click();
        }
    }
    slideChanged() {
        let currentIndex = this.slides.getActiveIndex().then(res => {
            this.count = res;
            console.log(this.count);
        });
    }
    toggleBackdrop(isVisible) {
        this.backdropVisible = isVisible;
        this.changeDetector.detectChanges();
        if (this.backdropVisible === true) {
            jquery__WEBPACK_IMPORTED_MODULE_7__("#menuFloatButton").hide();
            jquery__WEBPACK_IMPORTED_MODULE_7__("#searchFloatButton").hide();
            jquery__WEBPACK_IMPORTED_MODULE_7__("#qrscanFloatButton").hide();
            jquery__WEBPACK_IMPORTED_MODULE_7__("#liveFloatButton").hide();
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_7__("#menuFloatButton").show();
            jquery__WEBPACK_IMPORTED_MODULE_7__("#searchFloatButton").show();
            jquery__WEBPACK_IMPORTED_MODULE_7__("#qrscanFloatButton").show();
            jquery__WEBPACK_IMPORTED_MODULE_7__("#liveFloatButton").show();
        }
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_9__.SearchModalComponent,
                cssClass: 'my-custom-class',
                mode: 'ios'
            });
            modal.onDidDismiss().then((data) => {
                if (data['data'] !== 'dismiss') {
                    this.place_id = data['data'];
                    this.getLagLng();
                }
            });
            return yield modal.present();
        });
    }
    groupMembership() {
        this.router.navigate(['/group-membership']);
    }
    ngAfterViewInit() {
        this.loadMap();
        this.currentLoc();
    }
    ngOnInit() {
    }
    getUser() {
    }
    liveLocation() {
        const pos = {
            lat: this.localityService.currentLat,
            lng: this.localityService.currentLog,
        };
        this.map.setZoom(15);
        this.map.setCenter(pos);
    }
    getLagLng() {
        if (this.markers.length > 0) {
            this.markers[0].setMap(null);
            this.markers.splice(0, 1);
        }
        var placeId = this.place_id;
        const geocoder = new google.maps.Geocoder();
        const marker = new google.maps.Marker({ map: this.map, icon: this.locationGeo, animation: google.maps.Animation.DROP, });
        this.markers.push(marker);
        geocoder.geocode({ placeId: this.place_id }).then(({ results }) => {
            console.log(results[0].geometry.location);
            this.map.setZoom(12);
            this.map.setCenter(results[0].geometry.location);
            marker.setPlace({
                placeId: placeId,
                location: results[0].geometry.location
            });
            marker.setVisible(true);
            const infoWindow = new google.maps.InfoWindow({
                content: 'You are here'
            });
            marker.addListener("click", () => {
                infoWindow.open({
                    anchor: marker,
                    map: this.map,
                    shouldFocus: false,
                });
                this.map.setCenter(marker.getPosition());
                this.map.setZoom(12);
            });
            this.localityService.getLocalityFromLatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
        }).catch((e) => console.log("Geocoder failed due to: " + e));
    }
    successPresentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                mode: 'ios',
                duration: 2000,
                color: 'danger'
            });
            toast.present();
        });
    }
    loadMap() {
        this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOtions);
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: '',
                mode: 'ios'
            });
            yield loading.present();
        });
    }
    presentLoadingFast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: '',
                mode: 'ios',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    currentLoc() {
        let interval = setInterval(() => {
            if (this.localityService.currentLat !== undefined && this.localityService.currentLog !== undefined) {
                clearInterval(interval);
                this.currentLocationS = true;
                const pos = {
                    lat: this.localityService.currentLat,
                    lng: this.localityService.currentLog,
                };
                const marker = new google.maps.Marker({
                    position: pos,
                    map: this.map,
                    icon: this.iconCurrentLocImage
                });
                this.map.setCenter(pos);
                this.map.setZoom(15);
                this.loadingController.dismiss().then(a => console.log('dismissed'));
                this.locStatus = true;
            }
        }, 500);
        let dataInterval = setInterval(() => {
            if (this.dataS.locations.length === this.dataS.locLength) {
                clearInterval(dataInterval);
                for (let index = 0; index < this.dataS.locations.length; index++) {
                    let docId = this.dataS.locations[index]['docId'];
                    const marker = new google.maps.Marker({
                        position: { lat: Number(this.dataS.locations[index]['lat']), lng: Number(this.dataS.locations[index]['lng']) },
                        map: this.map,
                        title: this.dataS.locations[index]['name'],
                        icon: this.iconImage,
                        animation: google.maps.Animation.DROP,
                    });
                    let contentString;
                    var dataTimeContent = '';
                    var objDate = new Date();
                    var hours = '';
                    if (objDate.getHours() < 10) {
                        hours = '0' + objDate.getHours();
                    }
                    else {
                        hours = objDate.getHours().toString();
                    }
                    var min = '';
                    if (objDate.getMinutes() < 10) {
                        min = '0' + objDate.getMinutes();
                    }
                    else {
                        min = objDate.getMinutes().toString();
                    }
                    var closeTimeString = this.get24To12(this.dataS.locations[index]['timings']['close']);
                    var openTimeString = this.get24To12(this.dataS.locations[index]['timings']['open']);
                    if (closeTimeString === '' && openTimeString === '') {
                        dataTimeContent = '<b style="color: red">Closed</b>';
                    }
                    else {
                        var openTime = this.dataS.locations[index]['timings']['open'].replace(':', '');
                        var closeTime = this.dataS.locations[index]['timings']['close'].replace(':', '');
                        var currentTime = hours + '' + min;
                        if (openTime > currentTime) {
                            dataTimeContent = '<b style="color: red;">Closed</b>' + '<br> Hours ' + openTimeString + " - " + closeTimeString;
                        }
                        else if (openTime <= currentTime && closeTime >= currentTime) {
                            dataTimeContent = `<b style="color: green;">Open</b> - ` + closeTimeString;
                        }
                        else if (openTime <= currentTime && closeTime < currentTime) {
                            dataTimeContent = `<b style="color: red;">Closed</b>`;
                        }
                    }
                    if (this.dataS.locations[index]['image'] !== '' && this.dataS.locations[index]['image'] !== null) {
                        contentString =
                            '<div id="content">' +
                                '<div id="siteNotice">' +
                                ' <img style="height: 100px; width: 100%;" src="' + this.dataS.locations[index]['image'][0]['icon'] + '" > ' +
                                "</div>" +
                                '<h5 style="margin-bottom: unset">' + this.dataS.locations[index]['name'] + '</h5>' +
                                `<div>
                <ion-icon color="medium" name="star"></ion-icon>
                <ion-icon color="medium" name="star"></ion-icon>
                <ion-icon color="medium" name="star"></ion-icon>
                <ion-icon color="medium" name="star"></ion-icon>
                <ion-icon color="medium" name="star"></ion-icon>
              </div>` +
                                '<div id="bodyContent">' +
                                "<p>" + this.dataS.locations[index]['address'] + "</p>" +
                                `<p style="margin: unset">` +
                                ` <ion-grid style="padding: unset">
                  <ion-row>
                    <ion-col style="padding: unset">
                      <ion-item lines="none" class="ion-no-padding ViewItem">
                        <ion-label style="font-size: small">
                        ` + dataTimeContent + `
                        </ion-label>
                        <ion-button slot="end" mode="ios" size="small" onclick="document.getElementById('viewButton').click()">View</ion-button>
                      </ion-item>
                    </ion-col>
                  </ion-row>
                </ion-grid>    
              `;
                        "<ng-container>" + dataTimeContent + "</ng-container>" +
                            `<ng-container><ion-button style="float: right;margin: unset" mode="ios" size="small" onclick="document.getElementById('viewButton').click()">View</ion-button></ng-container>` +
                            "</p>" +
                            "</div>" +
                            "</div>";
                    }
                    else {
                        contentString =
                            '<div id="content">' +
                                '<div id="siteNotice">' +
                                "</div>" +
                                '<h3 id="firstHeading" class="firstHeading">' + this.dataS.locations[index]['name'] + '</h2>' +
                                '<div id="bodyContent">' +
                                "<p>" + this.dataS.locations[index]['address'] + "</p>" +
                                "<p>" +
                                "<ng-container>" + dataTimeContent + "</ng-container>" +
                                `<ng-container><ion-button mode="ios"></ion-button></ng-container>` +
                                "</p>" +
                                "</div>" +
                                "</div>";
                    }
                    const infoWindow = new google.maps.InfoWindow({
                        content: contentString
                    });
                    marker.addListener("click", () => {
                        this.currentVenuId = docId;
                        infoWindow.open({
                            anchor: marker,
                            map: this.map,
                            shouldFocus: false,
                        });
                        this.map.setZoom(15);
                        this.map.setCenter(marker.getPosition());
                        // setTimeout(() => {
                        //   this.dataS.venueDetails(docId);
                        // }, 1500);
                    });
                }
            }
        }, 500);
    }
    viewVenue() {
        this.dataS.venueDetails(this.currentVenuId);
    }
    get24To12(time) {
        if (time === '') {
            return '';
        }
        else {
            var hourEnd = time.indexOf(":");
            var H = +time.substr(0, hourEnd);
            var h = H % 12 || 12;
            var ampm = H < 12 ? "AM" : "PM";
            time = h + time.substr(hourEnd, 3) + ampm;
            return time;
        }
    }
    getHour(time) {
        if (time === '') {
            return '';
        }
        else {
            var hourEnd = time.indexOf(":");
            var H = +time.substr(0, hourEnd);
            var h = H % 12 || 12;
            time = h;
            return time;
        }
    }
    handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation.");
        infoWindow.open(this.map);
    }
    venueDetails(docId) {
        this.router.navigate(['/venue/venue-details'], {
            queryParams: { docId: docId }
        });
    }
    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
};
LandingComponent.ctorParameters = () => [
    { type: src_app_helper_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef },
    { type: _helper_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.MenuController },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClient },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_16__.AngularFirestore },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_17__.AngularFireAuth },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent },
    { type: _helper_locality_service__WEBPACK_IMPORTED_MODULE_4__.LocalityService },
    { type: _helper_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService },
    { type: _components_drawerv_drawerv_component__WEBPACK_IMPORTED_MODULE_8__.DrawervComponent }
];
LandingComponent.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ["mapElement", { static: false },] }],
    mapRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ElementRef, static: false },] }],
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['slider',] }]
};
LandingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-landing',
        template: _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_landing_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LandingComponent);



/***/ }),

/***/ 2294:
/*!*************************************************************!*\
  !*** ./src/app/home/search-modal/search-modal.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchModalComponent": () => (/* binding */ SearchModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_search_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./search-modal.component.html */ 2406);
/* harmony import */ var _search_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-modal.component.scss */ 4920);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);







let SearchModalComponent = class SearchModalComponent {
    constructor(firestore, router, modalController) {
        this.firestore = firestore;
        this.router = router;
        this.modalController = modalController;
        this.placesArr = [];
        this.list = [
            { img: "vlist1", title: 'Workinbuddy Park View', desc: 'BTM Layout', amount: 11000, rate: 4.1, rateRound: 4 },
            { img: "vlist2", title: 'Workinbuddy Enigma', desc: 'HSR Layout', amount: 10000, rate: 3.1, rateRound: 3 },
            { img: "vlist3", title: 'Workinbuddy Hermoso', desc: 'Kalyan Nagar', amount: 9000, rate: 2.1, rateRound: 2 },
            { img: "vlist4", title: 'Workinbuddy Lance', desc: 'Electronic City Phase 3', amount: 7000, rate: 1.1, rateRound: 1 },
        ];
    }
    ngOnInit() {
    }
    initService() {
        if (this.searchTerm.length > 0) {
            this.placesArr = [];
            let placesArr = [];
            let placeCount = 0;
            const displaySuggestions = function (predictions, status) {
                if (status != google.maps.places.PlacesServiceStatus.OK || !predictions) {
                    alert(status);
                    return;
                }
                predictions.forEach((prediction) => {
                    if (placeCount < 5) {
                        localStorage.setItem('places' + Number(placeCount + 1), JSON.stringify(prediction));
                        placesArr.push(prediction);
                    }
                    placeCount++;
                });
            };
            const service = new google.maps.places.AutocompleteService();
            service.getQueryPredictions({ input: this.searchTerm }, displaySuggestions);
            for (let index = 1; index <= 5; index++) {
                let arr = localStorage.getItem('places' + index);
                this.placesArr.push(JSON.parse(arr));
            }
        }
    }
    close(id = '') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            for (let index = 1; index <= 5; index++) {
                localStorage.removeItem('places' + index);
                this.placesArr = [];
            }
            const modal = yield this.modalController.getTop();
            if (modal) {
                if (id === '') {
                    modal.dismiss('dismiss');
                }
                else {
                    modal.dismiss(id);
                }
            }
        });
    }
    getInfo(item) {
        for (let index = 1; index <= 5; index++) {
            localStorage.removeItem('places' + index);
            this.placesArr = [];
        }
        console.log(item);
        this.placesArr = [];
        this.close(item.place_id);
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
SearchModalComponent.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
SearchModalComponent.propDecorators = {
    toolbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["toolbar", { static: false },] }],
    theContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent,] }]
};
SearchModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-search-modal',
        template: _raw_loader_search_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_search_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SearchModalComponent);



/***/ }),

/***/ 1446:
/*!*****************************************************!*\
  !*** ./src/app/home/landing/landing.component.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: transparent;\n}\nion-toolbar img {\n  width: 130px;\n  background: white;\n  padding: 2px 5px;\n  border-radius: 50px;\n}\nion-toolbar .middleShape {\n  background: #FFFDFB;\n  border: 2px solid #FF6000;\n  box-sizing: border-box;\n  padding: 10px;\n  width: 40%;\n  margin: 0 30%;\n  border-radius: 0px 0px 10px 10px;\n}\nion-content .ViewItem .item-inner {\n  padding-right: 0px !important;\n  padding-inline-end: 0px !important;\n}\nion-content .backdrop {\n  width: 100%;\n  height: 100%;\n  background: #00000094;\n  z-index: 10;\n  position: absolute;\n}\nion-content .fade {\n  transition: 0.5s linear all;\n  opacity: 0;\n  z-index: -1;\n}\nion-content .fade-in {\n  transition: 0.5s linear all;\n  opacity: 1;\n}\nion-content .startButton_1 {\n  background: #FFFDFB;\n  padding: 5px 5px 5px 30px;\n  border: 2px solid #FF6000;\n  box-sizing: border-box;\n  border-radius: 0px 30px 30px 0px;\n  position: absolute;\n  top: 7%;\n  left: -7%;\n}\nion-content .startButton_1 ion-button, ion-content .startButton_1 button {\n  background: transparent;\n}\nion-content .startButton_1 ion-button ion-icon, ion-content .startButton_1 button ion-icon {\n  font-size: xx-large;\n}\nion-content .endButton {\n  background: #FFFDFB;\n  padding: 5px 30px 5px 5px;\n  border: 2px solid #FF6000;\n  box-sizing: border-box;\n  border-radius: 30px 0px 0px 30px;\n  position: absolute;\n  top: 17%;\n  right: -7%;\n}\nion-content .endButton ion-button, ion-content .endButton button {\n  background: transparent;\n}\nion-content .endButton ion-button ion-icon, ion-content .endButton button ion-icon {\n  font-size: xx-large;\n}\nion-content .locationButton {\n  background: #FFFDFB;\n  padding: 5px 30px 5px 5px;\n  border: 2px solid #FF6000;\n  box-sizing: border-box;\n  border-radius: 30px 0px 0px 30px;\n  position: absolute;\n  top: 42%;\n  right: -7%;\n}\nion-content .locationButton ion-button, ion-content .locationButton button {\n  background: transparent;\n}\nion-content .locationButton ion-button ion-icon, ion-content .locationButton button ion-icon {\n  font-size: xx-large;\n}\nion-content .map {\n  position: fixed;\n  top: -15%;\n  height: 1000px;\n  width: 100%;\n}\nion-content #map {\n  height: 100%;\n}\nion-content .newScanner {\n  background: linear-gradient(to right bottom, #F0750F, #FFC260);\n  border-radius: 0px 50px 50px 0px;\n  padding: 5px 0px 5px 30px;\n  position: absolute;\n  left: -7%;\n  top: 30%;\n}\nion-content .newScanner ion-button, ion-content .newScanner button {\n  background: transparent;\n}\nion-content .newScanner ion-button ion-icon, ion-content .newScanner button ion-icon {\n  font-size: xx-large;\n}\nion-content .newScanner ion-button {\n  height: auto;\n}\nion-content .bottomContain {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\nion-content .bottomContain ion-slides {\n  padding: 80px 20px 0px 20px;\n}\nion-content .bottomContain ion-slides img {\n  height: 50px;\n}\nion-content .bottomContain ion-slides .white-ecclips {\n  padding: 10px;\n  background: transparent;\n  height: 100px;\n  width: 100px;\n  position: absolute;\n  top: -15%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\nion-content .bottomContain ion-slides .white-ecclips img {\n  height: 100px;\n}\nion-content .bottomContain ion-slides .white-ecclips ion-icon {\n  font-size: xxx-large;\n}\nion-content .bottomContain ion-slides .titleCard {\n  font-size: 15px;\n  color: #fff;\n  width: 100%;\n  font-weight: bold;\n  padding: 30px 0;\n  background: linear-gradient(to left bottom, #ff6000, #ffaa70);\n  border-radius: 20px;\n}\nion-content .bottomContain ion-slides .titleCard .title {\n  margin: 10px 0;\n}\nion-content .bottomContain ion-slides .titleCard button {\n  background-color: #ffd54f;\n  /* Green */\n  border: none;\n  color: #263238;\n  padding: 7px 15px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  border-radius: 20px;\n  font-size: small;\n  margin: 5px 0;\n  font-weight: 500;\n}\nion-content .bottomContain ion-slides .titleCard ion-button {\n  margin: 5px 0;\n}\nion-content .swiper-slide-prev ion-col {\n  position: absolute;\n  top: -10px;\n}\nion-content .swiper-slide-prev ion-col div .titleCard {\n  background: lightgray;\n}\nion-content .swiper-slide-prev ion-col div .titleCard button {\n  background: gray;\n}\nion-content .swiper-slide-next ion-col {\n  position: absolute;\n  top: -10px;\n}\nion-content .swiper-slide-next ion-col div .titleCard {\n  background: lightgray;\n}\nion-content .swiper-slide-next ion-col div .titleCard button {\n  background: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ047QUFFSTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FBQU47QUFPTTtFQUNFLDZCQUFBO0VBQ0Esa0NBQUE7QUFKUjtBQVFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQU5OO0FBU0k7RUFDRSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBUE47QUFVSTtFQUNFLDJCQUFBO0VBQ0EsVUFBQTtBQVJOO0FBV0k7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQVZOO0FBWU07RUFDRSx1QkFBQTtBQVZSO0FBV1E7RUFDRSxtQkFBQTtBQVRWO0FBZUk7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQWROO0FBZ0JNO0VBQ0UsdUJBQUE7QUFkUjtBQWVRO0VBQ0UsbUJBQUE7QUFiVjtBQWtCSTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBakJOO0FBbUJNO0VBQ0UsdUJBQUE7QUFqQlI7QUFrQlE7RUFDRSxtQkFBQTtBQWhCVjtBQXFCSTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFuQk47QUFzQkk7RUFDRSxZQUFBO0FBcEJOO0FBdUJJO0VBQ0UsOERBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBRUEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQXRCTjtBQXdCTTtFQUNFLHVCQUFBO0FBdEJSO0FBdUJRO0VBQ0UsbUJBQUE7QUFyQlY7QUF5Qk07RUFDRSxZQUFBO0FBdkJSO0FBMkJJO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBekJOO0FBMkJNO0VBQ0UsMkJBQUE7QUF6QlI7QUEyQlE7RUFDRSxZQUFBO0FBekJWO0FBNEJRO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBR0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFFQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtBQTdCVjtBQW1DVTtFQUNFLGFBQUE7QUFqQ1o7QUFvQ1U7RUFDRSxvQkFBQTtBQWxDWjtBQXNDUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDZEQUFBO0VBRUEsbUJBQUE7QUFyQ1Y7QUF1Q1U7RUFDRSxjQUFBO0FBckNaO0FBd0NVO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUF0Q1o7QUF5Q1U7RUFDRSxhQUFBO0FBdkNaO0FBc0RNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBcERSO0FBdURVO0VBQ0UscUJBQUE7QUFyRFo7QUF1RFk7RUFDRSxnQkFBQTtBQXJEZDtBQTZETTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQTNEUjtBQThEVTtFQUNFLHFCQUFBO0FBNURaO0FBOERZO0VBQ0UsZ0JBQUE7QUE1RGQiLCJmaWxlIjoibGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBwYWRkaW5nOiAycHggNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1pZGRsZVNoYXBlIHtcclxuICAgICAgYmFja2dyb3VuZDogI0ZGRkRGQjtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI0ZGNjAwMDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgbWFyZ2luOiAwIDMwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb250ZW50IHtcclxuXHJcbiAgICAuVmlld0l0ZW17XHJcbiAgICAgIC5pdGVtLWlubmVyIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQgOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLmJhY2tkcm9wIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDk0O1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmZhZGUge1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjVzIGxpbmVhciBhbGw7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmZhZGUtaW4ge1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjVzIGxpbmVhciBhbGw7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc3RhcnRCdXR0b25fMSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNGRkZERkI7XHJcbiAgICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDMwcHg7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRjYwMDA7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAzMHB4IDMwcHggMHB4O1xyXG4gIFxyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNyU7XHJcbiAgICAgIGxlZnQ6IC03JTtcclxuICBcclxuICAgICAgaW9uLWJ1dHRvbiwgYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gICAgLmVuZEJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNGRkZERkI7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAzMHB4IDVweCA1cHg7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRjYwMDA7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMHB4IDBweCAzMHB4O1xyXG4gIFxyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTclO1xyXG4gICAgICByaWdodDogLTclO1xyXG4gIFxyXG4gICAgICBpb24tYnV0dG9uLCBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxvY2F0aW9uQnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZDogI0ZGRkRGQjtcclxuICAgICAgcGFkZGluZzogNXB4IDMwcHggNXB4IDVweDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI0ZGNjAwMDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweCAwcHggMHB4IDMwcHg7XHJcbiAgXHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA0MiU7XHJcbiAgICAgIHJpZ2h0OiAtNyU7XHJcbiAgXHJcbiAgICAgIGlvbi1idXR0b24sIGJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5tYXAge1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHRvcDogLTE1JTtcclxuICAgICAgaGVpZ2h0OiAxMDAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgI21hcCB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICBcclxuICAgIC5uZXdTY2FubmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI0YwNzUwRiwgI0ZGQzI2MCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweCA1MHB4IDUwcHggMHB4O1xyXG4gICAgICBwYWRkaW5nOiA1cHggMHB4IDVweCAzMHB4O1xyXG4gIFxyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IC03JTtcclxuICAgICAgdG9wOiAzMCU7XHJcblxyXG4gICAgICBpb24tYnV0dG9uLCBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLmJvdHRvbUNvbnRhaW4ge1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgICAgIGlvbi1zbGlkZXMge1xyXG4gICAgICAgIHBhZGRpbmc6IDgwcHggMjBweCAwcHggMjBweDtcclxuICBcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAud2hpdGUtZWNjbGlwcyB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjRkY2MDAwO1xyXG4gICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogLTE1JTtcclxuICAgICAgICAgIC8vIGxlZnQ6IDM3JTtcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBcclxuICAgICAgICAgIC8vIC13ZWJraXQtYm94LXNoYWRvdzogMCA2cHggNHB4IC00cHggYmxhY2s7XHJcbiAgICAgICAgICAvLyAtbW96LWJveC1zaGFkb3c6IDAgNnB4IDRweCAtNHB4IGJsYWNrO1xyXG4gICAgICAgICAgLy8gYm94LXNoYWRvdzogMCA2cHggNHB4IC00cHggYmxhY2s7XHJcbiAgXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHh4eC1sYXJnZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnRpdGxlQ2FyZCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCBib3R0b20sICNmZjYwMDAsICNmZmFhNzApO1xyXG4gICAgICAgICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQgYm90dG9tLCAjRkY2MDAwIDgwJSwgI0ZGRUZFNSk7O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBcclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDU0ZjtcclxuICAgICAgICAgICAgLyogR3JlZW4gKi9cclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogIzI2MzIzODtcclxuICAgICAgICAgICAgcGFkZGluZzogN3B4IDE1cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLy8gLndoaXRlLWVjY2xpcHM6YWZ0ZXIge1xyXG4gICAgICAgIC8vICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgLy8gICAgIGJvdHRvbToxcHg7XHJcbiAgICAgICAgLy8gICAgIHotaW5kZXg6LTE7XHJcbiAgICAgICAgLy8gICAgIHRyYW5zZm9ybTpzY2FsZSguMik7XHJcbiAgICAgICAgLy8gICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCAjMDAwMDAwO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnN3aXBlci1zbGlkZS1wcmV2IHtcclxuICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTEwcHg7XHJcbiAgXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIC50aXRsZUNhcmQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbiAgXHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogZ3JheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnN3aXBlci1zbGlkZS1uZXh0IHtcclxuICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTEwcHg7XHJcbiAgXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIC50aXRsZUNhcmQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbiAgXHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogZ3JheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0iXX0= */");

/***/ }),

/***/ 4920:
/*!***************************************************************!*\
  !*** ./src/app/home/search-modal/search-modal.component.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header ion-toolbar ion-text {\n  font-weight: bold;\n  font-size: large;\n}\nion-header ion-toolbar ion-icon {\n  font-size: x-large;\n}\nion-content h2 {\n  font-weight: bold;\n}\nion-content .package-list-search-contain {\n  --background: transparent !important;\n  padding: 5px 10px;\n  border-radius: 10px;\n}\nion-content .package-list-search-contain ion-icon {\n  color: white;\n  background: white;\n  font-size: xx-large;\n}\nion-content .package-list-search-contain ion-label {\n  font-size: medium;\n  color: white;\n  font-weight: 500;\n}\nion-content .package-list-search-contain .input-container {\n  /* IE10 */\n  display: flex;\n  width: 100%;\n  border-radius: 10px;\n}\nion-content .package-list-search-contain .icon {\n  padding: 5px 10px 10px 5px;\n  color: #FF6000;\n  text-align: center;\n  margin: 5px 0;\n  font-size: x-large;\n  border: solid 1px #FF6000;\n  border-left: unset;\n  border-bottom-right-radius: 10px;\n  border-top-right-radius: 10px;\n}\nion-content .package-list-search-contain .icon1 {\n  margin: 10px 0;\n  padding-left: 20px;\n  padding-right: unset;\n  background: white;\n  color: #FF6000;\n  text-align: center;\n  font-size: x-large;\n}\nion-content .package-list-search-contain .input-field {\n  width: 100%;\n  padding: 5px;\n  margin: 5px 0;\n  outline: unset;\n  border: solid 1px #FF6000;\n  border-right: unset;\n  border-bottom-left-radius: 10px;\n  border-top-left-radius: 10px;\n  font-weight: lighter;\n}\nion-content .package-list-search-contain .input-field ::placeholder {\n  color: #BDBDBD;\n}\nion-content .place-names ion-chip {\n  background: transparent;\n  padding: 10px 20px;\n  font-size: small;\n  font-weight: 800;\n  width: 100%;\n  height: auto;\n}\nion-content .place-names ion-chip i {\n  margin-right: 10px;\n}\nion-content .container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\nion-content .container img {\n  height: 7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFEWjtBQUdRO0VBQ0Usa0JBQUE7QUFEVjtBQU1JO0VBQ0ksaUJBQUE7QUFIUjtBQU1JO0VBQ0ksb0NBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBSlI7QUFNUTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBSlY7QUFPUTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBTFY7QUFRUTtFQUN3QixTQUFBO0VBQ3RCLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFMVjtBQVFRO0VBQ0UsMEJBQUE7RUFFQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQVBWO0FBVVE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFSWjtBQVdRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7QUFUVjtBQVdVO0VBQ0UsY0FBQTtBQVRaO0FBZU07RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBYlI7QUFlUTtFQUNFLGtCQUFBO0FBYlY7QUFrQkk7RUFDSSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFqQlI7QUFrQlE7RUFDSSxZQUFBO0FBaEJaIiwiZmlsZSI6InNlYXJjaC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgICBpb24tdG9vbGJhcntcclxuICAgICAgICBpb24tdGV4dHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5pb24tY29udGVudHtcclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWNrYWdlLWxpc3Qtc2VhcmNoLWNvbnRhaW57XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDsgLyogSUUxMCAqL1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggMTBweCA1cHg7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNvbG9yOiAjRkY2MDAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNGRjYwMDA7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogdW5zZXQ7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmljb24xIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGNjAwMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5pbnB1dC1maWVsZCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgICBvdXRsaW5lOiB1bnNldDtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNGRjYwMDA7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IHVuc2V0O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIFxyXG4gICAgICAgICAgOjpwbGFjZWhvbGRlcntcclxuICAgICAgICAgICAgY29sb3I6ICNCREJEQkQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICAucGxhY2UtbmFtZXN7XHJcbiAgICAgIGlvbi1jaGlwe1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGl7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDdyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxuXHJcbn0gICAgIl19 */");

/***/ }),

/***/ 3600:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/landing/landing.component.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar color=\"transparent\">\r\n    <div class=\"ion-text-center\">\r\n      <img src=\"assets/svg/WORKINBUDDY.svg\" alt=\"\">\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\" scrollY=\"false\">\r\n\r\n  <div class=\"backdrop\" [ngClass]=\"backdropVisible ? 'fade-in' : 'fade'\" tappable (click)=\"drawer.toggleDrawer('')\"></div>\r\n  <app-drawerv (openStateChanged)=\"toggleBackdrop($event)\" (parentChild)=\"liveLocation()\" #drawer></app-drawerv>\r\n\r\n  <ion-buttons class=\"startButton_1\" id=\"menuFloatButton\">\r\n    <button (click)=\"openFirst()\">\r\n      <ion-icon color=\"orange\" name=\"menu-outline\"></ion-icon> \r\n    </button>\r\n  </ion-buttons>\r\n\r\n  <ion-buttons class=\"endButton\" id=\"searchFloatButton\">\r\n    <button (click)=\"presentModal()\">\r\n      <ion-icon color=\"orange\" name=\"search-outline\"></ion-icon> \r\n    </button>\r\n  </ion-buttons>\r\n\r\n  \r\n  <ion-buttons class=\"locationButton\" id=\"liveFloatButton\">\r\n    <button (click)=\"liveLocation()\">\r\n      <ion-icon color=\"orange\" name=\"locate-outline\"></ion-icon>\r\n    </button>\r\n  </ion-buttons>\r\n\r\n  <button id=\"viewButton\" (click)=\"viewVenue()\"></button>\r\n  <div #mapElement class=\"map\"></div>\r\n\r\n  <div id=\"VenueFun\" (click)=\"drawer.toggleDrawer('Venue')\"></div>\r\n  <div id=\"PackageFun\" (click)=\"drawer.toggleDrawer('Package')\"></div>\r\n  <div id=\"GroupFun\" (click)=\"drawer.toggleDrawer('Group')\"></div>\r\n\r\n  <ion-buttons class=\"newScanner\" id=\"qrscanFloatButton\">\r\n    <button [routerLink]=\"['/venue/scan-qr']\">\r\n      <img src=\"assets/img/scanner.gif\" style=\"border-radius: 50%;height: 35px;\" alt=\"\">\r\n    </button>\r\n  </ion-buttons>\r\n\r\n  <div class=\"bottomContain\" *ngIf=\"locStatus\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div>\r\n            <ion-slides #slider [options]=\"slidesOptions\" (ionSlideDidChange)=\"slideChanged()\">\r\n              <ion-slide>\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-col (click)=\"drawer.toggleDrawer('Package')\">\r\n                      <div>\r\n                        <button class=\"white-ecclips\">\r\n                          <img src=\"assets/gif/icon1.png\" alt=\"\">\r\n                        </button>\r\n                        <div class=\"titleCard\">\r\n                          <div class=\"title\"> Purchase a Package </div>\r\n                          <div>\r\n                            <button>\r\n                              Activate Package\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </div>  \r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-slide>\r\n          \r\n              <ion-slide>\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-col (click)=\"drawer.toggleDrawer('Venue')\">\r\n                      <div>\r\n                        <button class=\"white-ecclips\">\r\n                          <img src=\"assets/gif/icon3.png\" alt=\"\">\r\n                        </button>\r\n                        <div class=\"titleCard\">\r\n                          <div class=\"title\"> Locate Venues </div>\r\n                          <div>\r\n                            <button>\r\n                              Explore\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </div>  \r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-slide>\r\n          \r\n              <ion-slide>\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-col (click)=\"drawer.toggleDrawer('Group') \">\r\n                      <div>\r\n                        <button class=\"white-ecclips\">\r\n                          <img src=\"assets/gif/icon2.png\" alt=\"\">\r\n                        </button>\r\n                        <div class=\"titleCard\">\r\n                          <div class=\"title\"> Group Booking </div>\r\n                          <div>\r\n                            <button>\r\n                              Start Bookings\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </div>  \r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-slide>\r\n            </ion-slides>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n\r\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"currentLoc()\" color=\"white\">\r\n      <ion-icon name=\"locate\" color=\"primary\" *ngIf=\"currentLocationS\"></ion-icon>\r\n      <ion-icon name=\"locate\" color=\"danger\" *ngIf=\"!currentLocationS\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab> -->\r\n</ion-content>\r\n");

/***/ }),

/***/ 2406:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/search-modal/search-modal.component.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" color=\"white\">\r\n    <ion-title color=\"orange\" class=\"ion-text-center\" mode=\"md\">Search Locations</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-buttons slot=\"start\" (click)=\"close()\">\r\n        <ion-icon color=\"orange\" name=\"close-outline\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\" [scrollEvents]=\"true\">\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-item lines=\"none\" class=\"package-list-search-contain ion-no-padding\">\r\n          <div class=\"input-container\">\r\n            <input class=\"input-field\" type=\"text\" placeholder=\"Search Places\" name=\"search\" [(ngModel)]=\"searchTerm\" [ngModelOptions]=\"{standalone: true}\"\r\n              id=\"seachInput\" (keyup)=\"initService()\">\r\n            <ion-icon class=\"icon\" name=\"search-outline\"></ion-icon>\r\n          </div>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"place-names\">\r\n        <ng-container *ngIf=\"searchTerm !== ''\">\r\n          <div *ngFor=\"let item of placesArr; let i = index\" id=\"chipContent{{i + 1}}\">\r\n            <ion-chip *ngIf=\"item !== null\" color=\"dark\" expand=\"full\" (click)=\"getInfo(item)\">\r\n              <ion-avatar>\r\n                <ion-icon name=\"location-outline\" style=\"font-size: x-large;\"></ion-icon>\r\n              </ion-avatar>\r\n              <ion-label>{{item.description}}</ion-label>\r\n            </ion-chip>\r\n          </div>\r\n        </ng-container>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ng-container *ngIf=\"searchTerm === undefined || searchTerm === ''\">\r\n    <div class=\"container\">\r\n      <img src=\"assets/img/searchLocation.png\" alt=\"\">\r\n      <div><b>No Search Place</b></div>\r\n    </div>\r\n  </ng-container>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map