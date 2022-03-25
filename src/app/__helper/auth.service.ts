import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { PushNotificationSchema, PushNotifications, Token, ActionPerformed } from "@capacitor/push-notifications";
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public authState: AngularFireAuth, public angularFirestore: AngularFirestore, public userS: UserService, public router: Router) {
    this.authState.onAuthStateChanged((user) => {
      if (user) {
        let tokenId = '';
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 6; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        PushNotifications.requestPermissions().then(result => {
          if (result.receive === 'granted') {
            PushNotifications.register();
          } else {
          }
        });
        PushNotifications.addListener('registration',
          (token: Token) => {
            tokenId = token.value
        });
          this.angularFirestore.collection('users', ref => ref.where("uid", '==', user.uid)).get().subscribe(res => {
            if (res.size === 0) {
              if (user.providerData[0]['providerId'] === 'google.com') {
                angularFirestore.collection('users', ref => ref.where("uid", '==', user.uid)).get().subscribe(res => {
                  if (res.size === 0) {
                    let interval = setInterval(() => {
                      if (tokenId !== '' && tokenId !== undefined) {
                        clearInterval(interval);
                        const newId = angularFirestore.createId();
                        let refCode = result;
                        angularFirestore.collection('users').doc(newId).set({
                          docId: newId,
                          name: user.displayName,
                          phoneNumber: '',
                          provider: 'gmail',
                          uid: user.uid,
                          address: '',
                          photoURL: user.photoURL,
                          email: user.email,
                          timestamp: new Date(),
                          token: tokenId,
                          referalCode: refCode,
                          balance: 0,
                          age: 0,
                          gender: '',
                          country: '',
                          dob: ''
                        }).then(res => {
                          this.userS.userName = user.displayName;
                          this.userS.userEmail = user.email;
                          this.userS.userPhotoUrl = user.photoURL;
                          this.userS.userProvider = 'gmail';
                          this.userS.userPhoneNumber = '';
                          this.userS.userUID = user.uid;
                          this.userS.userReferalCode = refCode;
                          this.userS.userDocId = newId;
                        })
                      }
                    }, 1000)
                  }
                });
              }

              if (user.providerData[0]['providerId'] === 'facebook.com') {
                if (user.email !== null && user.email !== undefined && user.email !== '') {
                  angularFirestore.collection('users', ref => ref.where("uid", '==', user.uid)).get().subscribe(res => {
                    if (res.size === 0) {
                      let interval = setInterval(() => {
                        if (tokenId !== '' && tokenId !== undefined) {
                          clearInterval(interval);
                          const newId = angularFirestore.createId();
                          let refCode = result;
                          angularFirestore.collection('users').doc(newId).set({
                            docId: newId,
                            name: user.displayName,
                            phoneNumber: '',
                            provider: 'facebook',
                            uid: user.uid,
                            address: '',
                            photoURL: user.photoURL,
                            email: user.email,
                            timestamp: new Date(),
                            token: tokenId,
                            referalCode: refCode,
                            balance: 0,
                            age: 0,
                            gender: '',
                            country: '',
                            dob: ''
                          }).then(res => {
                            this.userS.userName = user.displayName;
                            this.userS.userEmail = user.email;
                            this.userS.userPhotoUrl = user.photoURL;
                            this.userS.userProvider = 'facebook';
                            this.userS.userPhoneNumber = '';
                            this.userS.userUID = user.uid;
                            this.userS.userReferalCode = refCode;
                            this.userS.userDocId = newId;
                          })
                        }
                      });
                    }
                  });
                } else {
                  user.delete();
                  this.authState.signOut().then(() => {
                    this.router.navigate(['/auth/splash-screen']);
                  });
                }
              }
            }else{
              this.userS.getData();
            }
          });
      } else {
      }
    });
  }
}
