import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userName = '';
  public userEmail = '';
  public userPhoneNumber = '';
  public userPhotoUrl = '';
  public userProvider = '';
  public userUID = '';
  public userDocId = '';
  public userReferalCode = '';
  
  public userAge;
  public userGender;
  public userCountry;
  public userDob;


  constructor(public auth: AngularFireAuth, public firestore: AngularFirestore) {
    this.auth.authState.subscribe(user => {
      if (user) {
        this.userUID = user.uid;
        this.getData();
      }
    })
  }

  getData() {
    this.firestore.collection("users", ref => ref.where("uid", "==", this.userUID)).get().subscribe(result => {
      if (result.size > 0) {
        result.docs.map((docs: any) => {
          let data = docs.data();
          this.userName = data.name;
          this.userEmail = data.email;
          this.userPhoneNumber = data.phoneNumber;
          this.userPhotoUrl = data.photoURL;
          if(this.userPhotoUrl !== '' && this.userPhotoUrl !== null && this.userPhotoUrl !== undefined){
            this.userPhotoUrl = data.photoURL;
          }else{
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

}
