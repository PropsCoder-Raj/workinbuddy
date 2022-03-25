import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { ToastController } from '@ionic/angular';
import * as $ from "jquery";
import { UserService } from '../../__helper/user.service';
declare var google: any;
// declare var $:any;


@Component({
  selector: 'app-venue-details',
  templateUrl: './venue-details.component.html',
  styleUrls: ['./venue-details.component.scss'],
})
export class VenueDetailsComponent implements OnInit {

  docId = '';
  venueName = '';
  address = '';
  features = [];
  aboutVenue = '';
  starsCount = 0;
  mediaArr = [];
  reviews = [];

  lat = 0;
  long = 0;


  // Google Map
  @ViewChild("mapElement", { static: false }) mapElement;
  map;
  cityName;
  stateName;
  infoWindow;
  iconImage = {
    url: "assets/img/mapIcon.png", // url
    scaledSize: new google.maps.Size(35, 50), // scaled size
    origin: new google.maps.Point(0, 0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };


  constructor(public firestore: AngularFirestore, public router: Router, public route: ActivatedRoute, public auth: AngularFireAuth, public toastController: ToastController, public userS: UserService) { }

  like() {
    this.firestore.collection("favourite", ref => ref.where("uid", '==', this.userS.userUID).where("venueId", '==', this.docId)).get().subscribe(result => {
      if (result.size === 0) {
        const newId = this.firestore.createId()
        this.firestore.collection("favourite").doc(newId).set({
          docId: newId,
          type: 'venue',
          uid: this.userS.userUID,
          venueId: this.docId
        }).then(res => {
          $('#likeSection').hide();
          $('#unlikeSection').show();

          $('#unlikeIcon').addClass("animate__animated animate__jackInTheBox");
          $('#likeIcon').removeClass("animate__animated animate__jackInTheBox");
          this.successPresentToast("Added to favourite list");
        });
      }
    })
  }

  getDirections(){
    window.open("https://maps.google.com/?q="+this.lat+ "," +this.long+ '');
  }

  async successPresentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      mode: 'ios',
      duration: 2000
    });
    toast.present();
  }

  unlike() {
    this.firestore.collection("favourite", ref => ref.where("uid", '==', this.userS.userUID).where("venueId", '==', this.docId)).get().subscribe(result => {
      if (result.size > 0) {
        result.docs.map((docs) => {
          this.firestore.collection("favourite").doc(docs.id).delete().then(res => {
            $('#unlikeSection').hide();
            $('#likeSection').show();

            $('#likeIcon').addClass("animate__animated animate__jackInTheBox");
            $('#unlikeIcon').removeClass("animate__animated animate__jackInTheBox");
          });
        });
      }
    })
  }

  ngOnInit() {
    this.docId = this.route.snapshot.paramMap.get('id');
    // this.route.queryParams.subscribe((res) => {
    //   this.docId = res['docId'];
    // });

    this.firestore.collection("favourite", ref => ref.where("uid", '==', this.userS.userUID).where("venueId", '==', this.docId)).get().subscribe(result => {
      if (result.size > 0) {
        $('#likeSection').hide();
        $('#unlikeSection').show();

        $('#unlikeIcon').addClass("animate__animated animate__jackInTheBox");
        $('#likeIcon').removeClass("animate__animated animate__jackInTheBox");
      } else {

        $('#unlikeSection').hide();
        $('#likeSection').show();

        $('#likeIcon').addClass("animate__animated animate__jackInTheBox");
        $('#unlikeIcon').removeClass("animate__animated animate__jackInTheBox");
      }
    })


    this.firestore.collection('venue').doc(this.docId).collection('media').get().subscribe(result => {
      result.docs.map((docs: any) => {
        this.mediaArr.push(docs.data());
      })
    });

    this.firestore.collection('venue', ref => ref.where("docId", "==", this.docId)).get().subscribe(result => {
      result.docs.map((docs: any) => {
        let data = docs.data();
        this.venueName = data['name'];
        this.address = data['address'];
        this.aboutVenue = data['about_venue'];
        let flength = data['services_available'].length;
        if (flength > 0) {
          data['services_available'].forEach(element => {
            this.firestore.collection('servicesMaster', ref => ref.where("docId", "==", element['value'])).get().subscribe(result1 => {
              result1.docs.map((docs1: any) => {
                if (this.features.length != Number(flength)) {
                  this.features.push(docs1.data());
                }
              });
            });
          });
        }
        this.lat = Number(data['latitude']);
        this.long = Number(data['longitude']);
        this.loadMap(Number(data['latitude']), Number(data['longitude']));
      });
    });


  }

  loadMap(lat, lng) {
    let mapOtions = {
      center: { lat: lat, lng: lng },
      zoom: 8,
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOtions);
    const marker = new google.maps.Marker({
      position: mapOtions.center,
      map: this.map,
      icon: this.iconImage,
      zoom: 15
    });

    const contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">' + this.venueName + '</h1>' +
      '<div id="bodyContent">' +
      "<p>" + this.address + "</p>" +
      "</div>" +
      "</div>";

    const infoWindow = new google.maps.InfoWindow({
      content: contentString
    });

    marker.addListener("click", () => {
      infoWindow.open({
        anchor: marker,
        map: this.map,
        shouldFocus: false,
      });
      this.map.setZoom(15);
      this.map.setCenter(marker.getPosition());
    });
  }

}
