import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { UserService } from 'src/app/__helper/user.service';

@Component({
  selector: 'app-wallet-history',
  templateUrl: './wallet-history.component.html',
  styleUrls: ['./wallet-history.component.scss'],
})
export class WalletHistoryComponent implements OnInit {

  historyStatus = false;
  historyArr = [];
  skeletonStatus = false;

  constructor(public auth: AngularFireAuth, public firestore: AngularFirestore, public router: Router, public userS: UserService) { }

  ngOnInit() {
    this.firestore.collection('walletHistory', ref => ref.orderBy("timestamp", "desc").where("uid", '==', this.userS.userUID).limit(50)).get().subscribe(result => {
      if(result.size > 0){
        this.skeletonStatus = true;
        result.docs.map((docs: any) => {
          let data = docs.data();
          if(data.type === 'referalCodeApply'){
            this.firestore.collection("users", ref=> ref.where('uid', '==', data.userApplyUid)).get().subscribe(resultUser=>{
              resultUser.docs.map((user: any)=>{
                this.historyStatus= true
                this.historyArr.push({time: data.timestamp, amount: data.amount, userName: user.data().name, type: data.type});
              })
              if(result.size === this.historyArr.length){
                this.skeletonStatus = false;
              }
            });
          }
        })
      }
    });
  }

}
