import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { UserService } from 'src/app/__helper/user.service';

@Component({
  selector: 'app-package-history',
  templateUrl: './package-history.component.html',
  styleUrls: ['./package-history.component.scss'],
})
export class PackageHistoryComponent implements OnInit {

  historyStatus = false;
  historyArr = [];
  skeletonStatus = false;

  constructor(public auth: AngularFireAuth, public firestore: AngularFirestore, public router: Router, public userS: UserService) { }

  ngOnInit() {
    this.firestore.collection('userHistory', ref => ref.orderBy("timestamp", "desc").where("uid", '==', this.userS.userUID).limit(50)).get().subscribe(result => {
      if(result.size > 0){
        this.skeletonStatus = true;
        result.docs.map((docs: any) => {
          let data = docs.data();
          let type = data.type;
          if (type === 'package') {
            this.firestore.collection('packages', ref => ref.where("docId", '==', data.packageId)).get().subscribe(resultPackage => {
              resultPackage.docs.map((docsPackage) => {
                this.historyStatus = true;
                let packageData = docsPackage.data();
                this.historyArr.push({ data: data, packageData: packageData });
                if(result.size === this.historyArr.length){
                  this.skeletonStatus = false;
                }
              })
            });
          }
        })
      }
    });
  }

}
