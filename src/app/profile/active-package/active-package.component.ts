import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserService } from 'src/app/__helper/user.service';

@Component({
  selector: 'app-active-package',
  templateUrl: './active-package.component.html',
  styleUrls: ['./active-package.component.scss'],
})
export class ActivePackageComponent implements OnInit {

  public activePackageStatus = false;

  public amount = 0;
  public amountWithDiscount = 0
  public flatDiscount = 0;
  public packageName = '';
  public packageValidity = '';
  public checkIns = 0;
  public hours = 0;
  public features = [];
  public information = '';
  public userCheckins = '';

  constructor(public auth: AngularFireAuth, public firestore: AngularFirestore, public userS: UserService) { }

  ngOnInit() {
    this.firestore.collection("userActivePackage", ref => ref.where("uid", '==', this.userS.userUID)).get().subscribe(result => {
      if (result.size > 0) {
        this.activePackageStatus = true;
        result.docs.map((docs: any) => {
          let data = docs.data();
          this.userCheckins = data.availableCheckins;
          this.firestore.collection('packages', ref => ref.where("docId", "==", data.packageId)).get().subscribe(result => {
            result.docs.map((docs: any) => {
              let data = docs.data();
              this.amount = data['amount'];
              this.flatDiscount = data['flatDiscount'];
              if (Number(this.flatDiscount) > 0) {
                let percentage = Number(this.amount) / 100;
                let disocunt = Number(percentage) * this.flatDiscount;
                this.amountWithDiscount = Number(this.amount) - Number(disocunt);
              }
              this.packageName = data['name'];
              this.packageValidity = data['validity'];
              this.checkIns = data['checkIns'];
              this.hours = data['hours'];

              this.information = data['information'];
              let flength = data['features'].length;
              if (flength > 0) {
                data['features'].forEach(element => {
                  this.firestore.collection('featuresMaster', ref => ref.where("docId", "==", element['docId'])).get().subscribe(result1 => {
                    result1.docs.map((docs1: any) => {
                      if (this.features.length != Number(flength)) {
                        this.features.push(docs1.data());
                      }
                    });
                  });
                });
              }
            });
          })
        });
      } else {
        this.activePackageStatus = false;
      }
    });

  }

}

