import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/__helper/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {

  // @ViewChild(AppComponent) app;
  
  name = '';
  photoURL = 'assets/img/profilePhoto.png';
  email = '';
  phoneNumber = '';
  docId = '';
  provider = '';
  age = '';
  gender = '';
  country = '';
  dob = '';

  photo = '';
  countries = [ {"name": "Afghanistan", "code": "AF"}, {"name": "land Islands", "code": "AX"}, {"name": "Albania", "code": "AL"}, {"name": "Algeria", "code": "DZ"}, {"name": "American Samoa", "code": "AS"}, {"name": "AndorrA", "code": "AD"}, {"name": "Angola", "code": "AO"}, {"name": "Anguilla", "code": "AI"}, {"name": "Antarctica", "code": "AQ"}, {"name": "Antigua and Barbuda", "code": "AG"}, {"name": "Argentina", "code": "AR"}, {"name": "Armenia", "code": "AM"}, {"name": "Aruba", "code": "AW"}, {"name": "Australia", "code": "AU"}, {"name": "Austria", "code": "AT"}, {"name": "Azerbaijan", "code": "AZ"}, {"name": "Bahamas", "code": "BS"}, {"name": "Bahrain", "code": "BH"}, {"name": "Bangladesh", "code": "BD"}, {"name": "Barbados", "code": "BB"}, {"name": "Belarus", "code": "BY"}, {"name": "Belgium", "code": "BE"}, {"name": "Belize", "code": "BZ"}, {"name": "Benin", "code": "BJ"}, {"name": "Bermuda", "code": "BM"}, {"name": "Bhutan", "code": "BT"}, {"name": "Bolivia", "code": "BO"}, {"name": "Bosnia and Herzegovina", "code": "BA"}, {"name": "Botswana", "code": "BW"}, {"name": "Bouvet Island", "code": "BV"}, {"name": "Brazil", "code": "BR"}, {"name": "British Indian Ocean Territory", "code": "IO"}, {"name": "Brunei Darussalam", "code": "BN"}, {"name": "Bulgaria", "code": "BG"}, {"name": "Burkina Faso", "code": "BF"}, {"name": "Burundi", "code": "BI"}, {"name": "Cambodia", "code": "KH"}, {"name": "Cameroon", "code": "CM"}, {"name": "Canada", "code": "CA"}, {"name": "Cape Verde", "code": "CV"}, {"name": "Cayman Islands", "code": "KY"}, {"name": "Central African Republic", "code": "CF"}, {"name": "Chad", "code": "TD"}, {"name": "Chile", "code": "CL"}, {"name": "China", "code": "CN"}, {"name": "Christmas Island", "code": "CX"}, {"name": "Cocos (Keeling) Islands", "code": "CC"}, {"name": "Colombia", "code": "CO"}, {"name": "Comoros", "code": "KM"}, {"name": "Congo", "code": "CG"}, {"name": "Congo, The Democratic Republic of the", "code": "CD"}, {"name": "Cook Islands", "code": "CK"}, {"name": "Costa Rica", "code": "CR"}, {"name": "Cote D'Ivoire", "code": "CI"}, {"name": "Croatia", "code": "HR"}, {"name": "Cuba", "code": "CU"}, {"name": "Cyprus", "code": "CY"}, {"name": "Czech Republic", "code": "CZ"}, {"name": "Denmark", "code": "DK"}, {"name": "Djibouti", "code": "DJ"}, {"name": "Dominica", "code": "DM"}, {"name": "Dominican Republic", "code": "DO"}, {"name": "Ecuador", "code": "EC"}, {"name": "Egypt", "code": "EG"}, {"name": "El Salvador", "code": "SV"}, {"name": "Equatorial Guinea", "code": "GQ"}, {"name": "Eritrea", "code": "ER"}, {"name": "Estonia", "code": "EE"}, {"name": "Ethiopia", "code": "ET"}, {"name": "Falkland Islands (Malvinas)", "code": "FK"}, {"name": "Faroe Islands", "code": "FO"}, {"name": "Fiji", "code": "FJ"}, {"name": "Finland", "code": "FI"}, {"name": "France", "code": "FR"}, {"name": "French Guiana", "code": "GF"}, {"name": "French Polynesia", "code": "PF"}, {"name": "French Southern Territories", "code": "TF"}, {"name": "Gabon", "code": "GA"}, {"name": "Gambia", "code": "GM"}, {"name": "Georgia", "code": "GE"}, {"name": "Germany", "code": "DE"}, {"name": "Ghana", "code": "GH"}, {"name": "Gibraltar", "code": "GI"}, {"name": "Greece", "code": "GR"}, {"name": "Greenland", "code": "GL"}, {"name": "Grenada", "code": "GD"}, {"name": "Guadeloupe", "code": "GP"}, {"name": "Guam", "code": "GU"}, {"name": "Guatemala", "code": "GT"}, {"name": "Guernsey", "code": "GG"}, {"name": "Guinea", "code": "GN"}, {"name": "Guinea-Bissau", "code": "GW"}, {"name": "Guyana", "code": "GY"}, {"name": "Haiti", "code": "HT"}, {"name": "Heard Island and Mcdonald Islands", "code": "HM"}, {"name": "Holy See (Vatican City State)", "code": "VA"}, {"name": "Honduras", "code": "HN"}, {"name": "Hong Kong", "code": "HK"}, {"name": "Hungary", "code": "HU"}, {"name": "Iceland", "code": "IS"}, {"name": "India", "code": "IN"}, {"name": "Indonesia", "code": "ID"}, {"name": "Iran, Islamic Republic Of", "code": "IR"}, {"name": "Iraq", "code": "IQ"}, {"name": "Ireland", "code": "IE"}, {"name": "Isle of Man", "code": "IM"}, {"name": "Israel", "code": "IL"}, {"name": "Italy", "code": "IT"}, {"name": "Jamaica", "code": "JM"}, {"name": "Japan", "code": "JP"}, {"name": "Jersey", "code": "JE"}, {"name": "Jordan", "code": "JO"}, {"name": "Kazakhstan", "code": "KZ"}, {"name": "Kenya", "code": "KE"}, {"name": "Kiribati", "code": "KI"}, {"name": "Korea, Democratic People'S Republic of", "code": "KP"}, {"name": "Korea, Republic of", "code": "KR"}, {"name": "Kuwait", "code": "KW"}, {"name": "Kyrgyzstan", "code": "KG"}, {"name": "Lao People'S Democratic Republic", "code": "LA"}, {"name": "Latvia", "code": "LV"}, {"name": "Lebanon", "code": "LB"}, {"name": "Lesotho", "code": "LS"}, {"name": "Liberia", "code": "LR"}, {"name": "Libyan Arab Jamahiriya", "code": "LY"}, {"name": "Liechtenstein", "code": "LI"}, {"name": "Lithuania", "code": "LT"}, {"name": "Luxembourg", "code": "LU"}, {"name": "Macao", "code": "MO"}, {"name": "Macedonia, The Former Yugoslav Republic of", "code": "MK"}, {"name": "Madagascar", "code": "MG"}, {"name": "Malawi", "code": "MW"}, {"name": "Malaysia", "code": "MY"}, {"name": "Maldives", "code": "MV"}, {"name": "Mali", "code": "ML"}, {"name": "Malta", "code": "MT"}, {"name": "Marshall Islands", "code": "MH"}, {"name": "Martinique", "code": "MQ"}, {"name": "Mauritania", "code": "MR"}, {"name": "Mauritius", "code": "MU"}, {"name": "Mayotte", "code": "YT"}, {"name": "Mexico", "code": "MX"}, {"name": "Micronesia, Federated States of", "code": "FM"}, {"name": "Moldova, Republic of", "code": "MD"}, {"name": "Monaco", "code": "MC"}, {"name": "Mongolia", "code": "MN"}, {"name": "Montenegro", "code": "ME"},{"name": "Montserrat", "code": "MS"},{"name": "Morocco", "code": "MA"}, {"name": "Mozambique", "code": "MZ"}, {"name": "Myanmar", "code": "MM"}, {"name": "Namibia", "code": "NA"}, {"name": "Nauru", "code": "NR"}, {"name": "Nepal", "code": "NP"}, {"name": "Netherlands", "code": "NL"}, {"name": "Netherlands Antilles", "code": "AN"}, {"name": "New Caledonia", "code": "NC"}, {"name": "New Zealand", "code": "NZ"}, {"name": "Nicaragua", "code": "NI"}, {"name": "Niger", "code": "NE"}, {"name": "Nigeria", "code": "NG"}, {"name": "Niue", "code": "NU"}, {"name": "Norfolk Island", "code": "NF"}, {"name": "Northern Mariana Islands", "code": "MP"}, {"name": "Norway", "code": "NO"}, {"name": "Oman", "code": "OM"}, {"name": "Pakistan", "code": "PK"}, {"name": "Palau", "code": "PW"}, {"name": "Palestinian Territory, Occupied", "code": "PS"}, {"name": "Panama", "code": "PA"}, {"name": "Papua New Guinea", "code": "PG"}, {"name": "Paraguay", "code": "PY"}, {"name": "Peru", "code": "PE"}, {"name": "Philippines", "code": "PH"}, {"name": "Pitcairn", "code": "PN"}, {"name": "Poland", "code": "PL"}, {"name": "Portugal", "code": "PT"}, {"name": "Puerto Rico", "code": "PR"}, {"name": "Qatar", "code": "QA"}, {"name": "Reunion", "code": "RE"}, {"name": "Romania", "code": "RO"}, {"name": "Russian Federation", "code": "RU"}, {"name": "RWANDA", "code": "RW"}, {"name": "Saint Helena", "code": "SH"}, {"name": "Saint Kitts and Nevis", "code": "KN"}, {"name": "Saint Lucia", "code": "LC"}, {"name": "Saint Pierre and Miquelon", "code": "PM"}, {"name": "Saint Vincent and the Grenadines", "code": "VC"}, {"name": "Samoa", "code": "WS"}, {"name": "San Marino", "code": "SM"}, {"name": "Sao Tome and Principe", "code": "ST"}, {"name": "Saudi Arabia", "code": "SA"}, {"name": "Senegal", "code": "SN"}, {"name": "Serbia", "code": "RS"}, {"name": "Seychelles", "code": "SC"}, {"name": "Sierra Leone", "code": "SL"}, {"name": "Singapore", "code": "SG"}, {"name": "Slovakia", "code": "SK"}, {"name": "Slovenia", "code": "SI"}, {"name": "Solomon Islands", "code": "SB"}, {"name": "Somalia", "code": "SO"}, {"name": "South Africa", "code": "ZA"}, {"name": "South Georgia and the South Sandwich Islands", "code": "GS"}, {"name": "Spain", "code": "ES"}, {"name": "Sri Lanka", "code": "LK"}, {"name": "Sudan", "code": "SD"}, {"name": "Suriname", "code": "SR"}, {"name": "Svalbard and Jan Mayen", "code": "SJ"}, {"name": "Swaziland", "code": "SZ"}, {"name": "Sweden", "code": "SE"}, {"name": "Switzerland", "code": "CH"}, {"name": "Syrian Arab Republic", "code": "SY"}, {"name": "Taiwan, Province of China", "code": "TW"}, {"name": "Tajikistan", "code": "TJ"}, {"name": "Tanzania, United Republic of", "code": "TZ"}, {"name": "Thailand", "code": "TH"}, {"name": "Timor-Leste", "code": "TL"}, {"name": "Togo", "code": "TG"}, {"name": "Tokelau", "code": "TK"}, {"name": "Tonga", "code": "TO"}, {"name": "Trinidad and Tobago", "code": "TT"}, {"name": "Tunisia", "code": "TN"}, {"name": "Turkey", "code": "TR"}, {"name": "Turkmenistan", "code": "TM"}, {"name": "Turks and Caicos Islands", "code": "TC"}, {"name": "Tuvalu", "code": "TV"}, {"name": "Uganda", "code": "UG"}, {"name": "Ukraine", "code": "UA"}, {"name": "United Arab Emirates", "code": "AE"}, {"name": "United Kingdom", "code": "GB"}, {"name": "United States", "code": "US"}, {"name": "United States Minor Outlying Islands", "code": "UM"}, {"name": "Uruguay", "code": "UY"}, {"name": "Uzbekistan", "code": "UZ"}, {"name": "Vanuatu", "code": "VU"}, {"name": "Venezuela", "code": "VE"}, {"name": "Viet Nam", "code": "VN"}, {"name": "Virgin Islands, British", "code": "VG"}, {"name": "Virgin Islands, U.S.", "code": "VI"}, {"name": "Wallis and Futuna", "code": "WF"}, {"name": "Western Sahara", "code": "EH"}, {"name": "Yemen", "code": "YE"}, {"name": "Zambia", "code": "ZM"}, {"name": "Zimbabwe", "code": "ZW"} ]


  mendatory = false;
  loader= false;

  constructor(public router: Router, public angularAuth: AngularFireAuth, public firestore: AngularFirestore, public toastController: ToastController, public storage:AngularFireStorage, public loadingController: LoadingController, public appC: AppComponent, public userS: UserService, public modelController: ModalController, public navCtrl: NavController) { }

  ngOnInit() {
    if(this.userS.userUID !== ''){
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

  ionViewWillEnter(){
    this.mendatory = false;
    this.loader= false;
  }

  async successPresentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      mode: 'ios',
      duration: 2000,
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

  editProfile(){
    if(this.name !== '' && this.email !== '' && this.phoneNumber !== ''){
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(this.email) == false) {
        this.errorPresentToast("Please! Enter valid email.");
      }else{
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
        }).then(res=>{
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
            if(this.router.isActive('package-details/checkout', false)){
                  this.loader = false;
                  this.modelController.dismiss();
            }else{
              this.loader = false
              this.successPresentToast("Profile Updated");
              this.router.navigate(['/profile']);
            }
          }, 1500);
        });
      }
    }else{
      this.mendatory = true;
      this.errorPresentToast("All fields mendatory");
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Uploading Image',
      mode:'ios'
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  onImageSelected(event){
    this.photo = event.target.files[0];
    const newId = this.firestore.createId();
    let imageName = newId + "_" + this.photo['name'];
    this.presentLoading();
    let ref = this.storage.ref('profile').child(imageName);
    ref.put(this.photo).then(res=>{
      const reg = this.storage.ref('profile/' + imageName);
      reg.getDownloadURL().subscribe(val => {
        this.photoURL = val;
        this.loadingController.dismiss().then(a => console.log('dismissed'));
      })  
    })
  }

}
