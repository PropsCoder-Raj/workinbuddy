import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { UserService } from 'src/app/__helper/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  name = '';
  photoURL = '';
  email = '';
  phoneNumber = '';
  segmentValue = '1';

  constructor(public angularAuth: AngularFireAuth, public firestore: AngularFirestore, public router: Router, public userS: UserService) {
  }

  ngOnInit() {

  }

  editProfile(){
    this.router.navigate(['/profile/edit-profile'], {
      queryParams: {  }
    })
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



}
