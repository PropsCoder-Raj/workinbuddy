import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter, AfterViewInit } from '@angular/core';
import { GestureController, Platform, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { IonContent, IonToolbar, NavController } from '@ionic/angular';

import { LocalityService } from '../../__helper/locality.service';
import { UserService } from 'src/app/__helper/user.service';

@Component({
  selector: 'app-drawerv',
  templateUrl: './drawerv.component.html',
  styleUrls: ['./drawerv.component.scss'],
})
export class DrawervComponent implements AfterViewInit,OnInit {

  @ViewChild('drawer',{read:ElementRef}) drawer:ElementRef;
  @Output('openStateChanged') openState: EventEmitter<boolean> = new EventEmitter();
  @Output('parentChild') parentChild: EventEmitter<boolean> = new EventEmitter();

  isOpen = false;
  openHeight = 0;

  searchTerm: string;
  skeletonStatus = false;
  venue = [];
  isVenue = false;

  name = '';
  
  packagelist = [];
  skeletonStatusP = false;

  public companyName = '';
  public officialEmail = '';
  public mendatoryS = false;
  public loader = false;

  constructor(public toastController: ToastController,public gestureCtrl: GestureController, public platform: Platform,public firestore: AngularFirestore, public router: Router,public localityService: LocalityService, public navCtrl: NavController, public userS: UserService) { }

  async ngAfterViewInit() {
  }

  ngOnInit(){
    this.venueCall();
    this.packageCall();
  }

  packageCall(){

    this.firestore.collection("packages",ref=> ref.where("group","==",false).where("publish","==",true)).get().subscribe(result=>{
      if(result.size > 0){
        this.skeletonStatusP = true;
        result.docs.map((docs:any)=>{
          docs.data().features.forEach(element => {
            this.firestore.collection('featuresMaster', ref => ref.where("docId","==",element['docId'])).get().subscribe(result1 => {
              let features = [];
              result1.docs.map((data: any) => { 
                if(result1.size !== features.length){
                  features.push({name: data.data().name});
                }
              });   
              this.packagelist.push({data: docs.data(), features: features});
              if(result.size === this.packagelist.length){
                this.skeletonStatusP = false;
              }
            });  
          });
        })
      }
    });
  }

  packageDetails(docId){
    this.router.navigate(['/package-details'], {
      queryParams: {docId : docId}
    });
    this.toggleDrawer(this.name);
  }

  venueCall(){
    if(this.localityService.locality === ""){
      this.getCurrentLocationNearByVenues();
    } else {
      this.getVenues();
    }
  }

  getVenues(){
    this.venue = [];
    this.skeletonStatus = true;
    let interval = setInterval(()=>{
      if(this.localityService.locality !== ""){
        this.firestore.collection("venue",ref=> ref.where("city","==",this.localityService.locality).where('publish',"==",true)).get().subscribe(result=>{
          if(result.size > 0){
            this.isVenue = true;
            result.docs.map((docs:any)=>{
              this.firestore.collection('venue').doc(docs.id).collection('media').get().subscribe(result1 => {
                let service = [];
                result1.docs.map((data) => { 
                  if(result1.size !== service.length){
                    service.push(data.data());
                  }
                });   
                this.venue.push({data: docs.data(), services: service});
                if(result.size === this.venue.length){
                  this.skeletonStatus = false;
                }
              });
            })
          }else{
            this.isVenue = false;
            this.skeletonStatus = false;
          }
        });
        clearInterval(interval);
      }
      
    },1000);
  }

  getCurrentLocationNearByVenues(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.localityService.getLocalityFromLatLng(position.coords.latitude,position.coords.longitude);
          this.getVenues();
          this.parentChild.emit();
        });
    }


  }

  venueDetails(docId){
    this.navCtrl.navigateForward('/venue/venue-details/' + docId);
    this.toggleDrawer(this.name);
  }

  toggleDrawer(name){
    this.name = name

    if(name === 'Venue'){
      this.venueCall();
    }

    this.openHeight = (this.platform.height()/100) * 60;
    const drawer = this.drawer.nativeElement;
    this.openState.emit(!this.isOpen);

    if(!this.isOpen){
      drawer.style.visibility = 'visible';
      drawer.style.transition = '.4s ease-in';
      drawer.style.transform = `translateY(${-this.openHeight}px)`;
      this.isOpen = true;
    }else{
      drawer.style.visibility = 'hidden';
      drawer.style.transition = '.4s ease-out';
      drawer.style.transform = '';
      this.isOpen = false;
    }
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

  submit(){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(this.companyName !== '' && this.officialEmail !== '' && this.userS.userEmail !== '' && this.userS.userPhoneNumber !== ''){
      if(re.test(this.userS.userEmail) == false){
        this.errorPresentToast("User Email not valid");
      }else if(re.test(this.officialEmail) == false){
        this.errorPresentToast("Official Email not valid");
      }else{
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
        }).then(res=>{
          this.loader = false;
          this.successPresentToast("Request Send");
          this.toggleDrawer(this.name);

          this.firestore.collection("users").doc(this.userS.userDocId).update({
            email: this.userS.userEmail,
            phoneNumber: this.userS.userPhoneNumber
          })
        });
      }
    }else{
      this.errorPresentToast("All fields mendatory");
    }
  }

}
