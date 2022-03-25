import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { UserService } from 'src/app/__helper/user.service';

@Component({
  selector: 'app-active-checkins',
  templateUrl: './active-checkins.component.html',
  styleUrls: ['./active-checkins.component.scss'],
})
export class ActiveCheckinsComponent implements OnInit {

  activecheckinsStatus = false;
  activecheckinsArr = [];
  skeletonStatus = false;

  constructor(public auth: AngularFireAuth, public firestore: AngularFirestore, public router: Router, public userS: UserService) { }

  ngOnInit() {
    this.firestore.collection('userCheckins', ref => ref.orderBy("timestamp", "desc").where("uid", '==', this.userS.userUID).limit(50)).get().subscribe(result => {
      if(result.size > 0){
        this.skeletonStatus = true;
        result.docs.map((docs: any) => {
          let data = docs.data();
          this.firestore.collection('venue', ref => ref.where("docId", '==', data.venueId)).get().subscribe(resultVenue => {
            resultVenue.docs.map((docsVenue) => {
              this.activecheckinsStatus = true;
              let venueData = docsVenue.data();
              this.activecheckinsArr.push({ data: data, venueData: venueData });
              if(result.size === this.activecheckinsArr.length){
                this.skeletonStatus = false;
              }
            })
          });
        })
      }
    });
  }

  checkin(text){
    this.router.navigate(['/venue/checkin'], {
      queryParams: {text : text}
    });
  }

}
