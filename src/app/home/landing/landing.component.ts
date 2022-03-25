
import { AfterViewInit, Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { IonSlides, LoadingController, MenuController, ModalController, ToastController } from '@ionic/angular';
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AppComponent } from '../../app.component';
import { LocalityService } from '../../__helper/locality.service';
import { DataService } from '../../__helper/data.service';
import { UserService } from '../../__helper/user.service';
import * as $ from "jquery";
import { Plugins } from "@capacitor/core";
import { PushNotificationSchema, PushNotifications, Token, ActionPerformed } from "@capacitor/push-notifications";
import { DrawervComponent } from '../../components/drawerv/drawerv.component';
import { SearchModalComponent } from '../search-modal/search-modal.component';
import { AuthService } from 'src/app/__helper/auth.service';
declare var google: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})

export class LandingComponent implements OnInit, AfterViewInit {

  map;
  address;
  cityName;
  stateName;
  infoWindow;
  iconImage = {
    url: "assets/img/mapIcon.png", // url
    scaledSize: new google.maps.Size(35, 50), // scaled size
    origin: new google.maps.Point(0, 0), // origin
    anchor: new google.maps.Point(25, 50) // anchor
  };
  locationGeo = {
    url: "assets/img/locationGeo.png", // url
    scaledSize: new google.maps.Size(35, 50), // scaled size
    origin: new google.maps.Point(0, 0), // origin
    anchor: new google.maps.Point(25, 50) // anchor
  };
  iconCurrentLocImage = {
    url: "assets/img/dot1.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0, 0), // origin
    anchor: new google.maps.Point(25, 50) // anchor
  };
  @ViewChild("mapElement", { static: false }) mapElement;
  mapOtions = {
    center: { lat: 24.2992049, lng: 54.3880679 },
    zoom: 8,
    fullscreenControl: false,
    streetViewControl: false,
    disableDefaultUI: true,
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
  locations = [];
  locStatus = false;

  slidesOptions = {
    slidesPerView: 1.6,
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
  }

  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;
  infoWindows: any = [];

  currentLocationS = false;
  place_id = '';


  markersArr: any;
  markers: any = []
  backdropVisible = false;

  logininfo: any;
  user: any;

  @ViewChild('slider') slides: IonSlides;
  count = 2;
  tokenId = '';

  cLat: any;
  cLog: any;
  currentVenuId = '';

  constructor(
    private authService: AuthService, private toastController: ToastController, private route: ActivatedRoute, public changeDetector: ChangeDetectorRef, public dataS: DataService, public loadingController: LoadingController, public router: Router, private menu: MenuController, private geolocation: Geolocation, public modalController: ModalController, public http: HttpClient, public angularFirestore: AngularFirestore, public angularFireauth: AngularFireAuth, public appC: AppComponent, public localityService: LocalityService, public userS: UserService, public drawC: DrawervComponent) {
  }

  functionSlide() {
    if (this.count === 2 || this.count === 5) {
      $("#PackageFun").click();
    } else if (this.count === 4 || this.count === 1) {
      $("#GroupFun").click();
    } else if (this.count === 3) {
      $("#VenueFun").click();
    }
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex().then(res => {
      this.count = res;
    });
  }

  toggleBackdrop(isVisible) {
    this.backdropVisible = isVisible;
    this.changeDetector.detectChanges();

    if (this.backdropVisible === true) {
      $("#menuFloatButton").hide();
      $("#searchFloatButton").hide();
      $("#qrscanFloatButton").hide();
      $("#liveFloatButton").hide();
    } else {
      $("#menuFloatButton").show();
      $("#searchFloatButton").show();
      $("#qrscanFloatButton").show();
      $("#liveFloatButton").show();
    }

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SearchModalComponent,
      cssClass: 'my-custom-class',
      mode: 'ios'
    });

    modal.onDidDismiss().then((data) => {
      if (data['data'] !== 'dismiss') {
        this.place_id = data['data'];
        this.getLagLng();
      }
    });

    return await modal.present();
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

  loadMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOtions);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: '',
      mode: 'ios'
    });
    await loading.present();
  }

  async presentLoadingFast() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: '',
      mode: 'ios',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
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
        // this.loadingController.dismiss();

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
          if(objDate.getHours() < 10){
            hours = '0'+objDate.getHours();
          }else{
            hours = objDate.getHours().toString();
          }
          var min = '';
          if(objDate.getMinutes() < 10){
            min = '0'+objDate.getMinutes();
          }else{
            min = objDate.getMinutes().toString();
          }
          
          var closeTimeString = this.get24To12(this.dataS.locations[index]['timings']['close']);
          var openTimeString = this.get24To12(this.dataS.locations[index]['timings']['open']);
            if(closeTimeString === '' && openTimeString === ''){
              dataTimeContent = '<b style="color: red">Closed</b>';
            }else{
              var openTime = this.dataS.locations[index]['timings']['open'].replace(':','');
              var closeTime = this.dataS.locations[index]['timings']['close'].replace(':','');
              var currentTime = hours+''+min;
              if(openTime > currentTime){
                dataTimeContent = '<b style="color: red;">Closed</b>' + '<br> Hours ' + openTimeString + " - " + closeTimeString;
              }else if(openTime <= currentTime && closeTime >= currentTime){
                dataTimeContent = `<b style="color: green;">Open</b> - ` + closeTimeString;
              }else if(openTime <= currentTime && closeTime < currentTime){
                dataTimeContent = `<b style="color: red;">Closed</b>`;
              }
            }

          if (this.dataS.locations[index]['image'] !== '' && this.dataS.locations[index]['image'] !== null) {
            let imageUrl = "";
            for(let i =0;i<this.dataS.locations[index]['image'].length;i++){
              if(this.dataS.locations[index]['image'][i].type.includes('image')){
                imageUrl = this.dataS.locations[index]['image'][i]['icon'];
              }
            }
            
            contentString =
              '<div id="content">' +
              '<div id="siteNotice">' +
              ' <img style="height: 100px; width: 100%;" src="' + imageUrl + '" > ' +
              "</div>"+
              '<h5 style="margin-bottom: unset">' + this.dataS.locations[index]['name'] + '</h5>' +
              `<div>
                <ion-icon color="medium" name="star"></ion-icon>
                <ion-icon color="medium" name="star"></ion-icon>
                <ion-icon color="medium" name="star"></ion-icon>
                <ion-icon color="medium" name="star"></ion-icon>
                <ion-icon color="medium" name="star"></ion-icon>
              </div>`+
              '<div id="bodyContent">' +
              "<p>" + this.dataS.locations[index]['address'] + "</p>" +
              `<p style="margin: unset">`+
              ` <ion-grid style="padding: unset">
                  <ion-row>
                    <ion-col style="padding: unset">
                      <ion-item lines="none" class="ion-no-padding ViewItem">
                        <ion-label style="font-size: small">
                        `+ dataTimeContent +`
                        </ion-label>
                        <ion-button slot="end" mode="ios" size="small" onclick="document.getElementById('viewButton').click()">View</ion-button>
                      </ion-item>
                    </ion-col>
                  </ion-row>
                </ion-grid>    
              `
              "<ng-container>"+ dataTimeContent + "</ng-container>" +
              `<ng-container><ion-button style="float: right;margin: unset" mode="ios" size="small" onclick="document.getElementById('viewButton').click()">View</ion-button></ng-container>` +
              "</p>" +
              "</div>" +
              "</div>";
          }else{
            contentString =
              '<div id="content">' +
              '<div id="siteNotice">' +
              "</div>" +
              '<h3 id="firstHeading" class="firstHeading">' + this.dataS.locations[index]['name'] + '</h2>' +
              '<div id="bodyContent">' +
              "<p>" + this.dataS.locations[index]['address'] + "</p>" +
              "<p>"+
              "<ng-container>"+ dataTimeContent + "</ng-container>" +
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

  viewVenue(){
    this.dataS.venueDetails(this.currentVenuId);
  }

  get24To12(time) {
    if(time === ''){
      return '';
    }else{
      var hourEnd = time.indexOf(":");
      var H = +time.substr(0, hourEnd);
      var h = H % 12 || 12;
      var ampm = H < 12 ? "AM" : "PM";
      time = h + time.substr(hourEnd, 3) + ampm;
      return time;
    }
  }

  getHour(time) {
    if(time === ''){
      return '';
    }else{
      var hourEnd = time.indexOf(":");
      var H = +time.substr(0, hourEnd);
      var h = H % 12 || 12;
      time = h;
      return time;
    }
  }

  handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
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

}
