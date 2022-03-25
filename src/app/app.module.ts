import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import * as firebase from "firebase/app";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponentsModule } from './components/shared-components.module';
firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    SharedComponentsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFireAuthModule,
    HttpClientModule,
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  ],
  providers: [
    Geolocation,
    StatusBar,
    AngularFirestore,
    AngularFireStorage,
    HttpClient,
    AppComponent,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private db: AngularFirestore) { }
}
