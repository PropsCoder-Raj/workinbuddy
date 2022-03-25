import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  locations = [];
  locLength: number;

  constructor(public router: Router, public navCtrl: NavController, public firestore: AngularFirestore) {
    this.getLocations()
  }

  getLocations(){
    let date = new Date();
    let day = date.getDay();
    let daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let currentDay = daysInWeek[day].toLocaleLowerCase();
    this.firestore.collection("venue", ref => ref.where('publish', "==", true)).get().subscribe(result => {
      this.locLength = result.size;
      result.docs.map((docs: any) => {
        this.firestore.collection("venue").doc(docs.id).collection("media").get().subscribe(mediaResult =>{
          if(mediaResult.size > 0){
            let array = []
            mediaResult.docs.map((docsMedia: any) =>{
              array.push(docsMedia.data());
              if(array.length === mediaResult.size){
                let abc = { name: docs.data().name, lng: docs.data().longitude, lat: docs.data().latitude, desc: docs.data().about_venue, index: 1, docId: docs.data().docId, city: docs.data().city, address: docs.data().address, image: array, timings: docs.data().timings[currentDay] };
                this.locations.push(abc);
              }
            });
          }else{
            let abc = { name: docs.data().name, lng: docs.data().longitude, lat: docs.data().latitude, desc: docs.data().about_venue, index: 1, docId: docs.data().docId, city: docs.data().city, address: docs.data().address, image: '', timings: docs.data().timings[currentDay] };
            this.locations.push(abc);
          }
        });
      })
    });
  }

  venueDetails(docId){
    this.navCtrl.navigateForward('/venue/venue-details/' + docId);
  }



}
