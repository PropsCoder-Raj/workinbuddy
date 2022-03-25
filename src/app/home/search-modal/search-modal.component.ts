import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { IonContent, IonToolbar, ModalController } from '@ionic/angular';

declare var google : any;

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss'],
})
export class SearchModalComponent implements OnInit {

  searchTerm: String;
  placesArr = [];
   
  @ViewChild("toolbar", {static: false}) toolbar: IonToolbar;
  @ViewChild(IonContent) theContent: IonContent;

  list = [
    { img: "vlist1", title: 'Workinbuddy Park View', desc:'BTM Layout', amount: 11000, rate: 4.1, rateRound: 4 },
    { img: "vlist2", title: 'Workinbuddy Enigma', desc:'HSR Layout', amount: 10000, rate: 3.1, rateRound: 3 },
    { img: "vlist3", title: 'Workinbuddy Hermoso', desc:'Kalyan Nagar', amount: 9000, rate: 2.1, rateRound: 2 },
    { img: "vlist4", title: 'Workinbuddy Lance', desc:'Electronic City Phase 3', amount: 7000, rate: 1.1, rateRound: 1 },
  ];

  venue: any;

  constructor(public firestore: AngularFirestore, public router: Router, public modalController: ModalController) { }

  ngOnInit() {
  }

  initService() {
    if(this.searchTerm.length > 0){
      this.placesArr = [];
      let placesArr: any = [];
      let placeCount = 0;
      const displaySuggestions = function (predictions, status) {
        if (status != google.maps.places.PlacesServiceStatus.OK || !predictions) {
          alert(status);
          return;
        }
        predictions.forEach((prediction) => {
          if(placeCount < 5){
            localStorage.setItem('places' + Number( placeCount + 1 ) , JSON.stringify(prediction));
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

  async close(id = ''){
    for (let index = 1; index <= 5; index++) {
      localStorage.removeItem('places' + index);
      this.placesArr = [];
    }
    const modal = await this.modalController.getTop();
    if (modal) {
        if(id === ''){
          modal.dismiss('dismiss');
        }else{
          modal.dismiss(id);
        }
    }
  }

  getInfo(item){
    for (let index = 1; index <= 5; index++) {
      localStorage.removeItem('places' + index);
      this.placesArr = [];
    }
    this.placesArr = [];
    this.close(item.place_id);
  }

  onScroll(event) {
    this.theContent.ionScroll.subscribe((res)=>{
      if(res.detail.scrollTop === 0){
        this.toolbar.color = 'transparent';
      }else{
        this.toolbar.color = 'white';
      }
    })
  }

}

