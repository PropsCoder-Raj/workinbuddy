import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './landing/landing.component';
import { SharedComponentsModule } from '../components/shared-components.module';
import { SearchModalComponent } from './search-modal/search-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { IonicModule } from '@ionic/angular';
import { DrawervComponent } from '../components/drawerv/drawerv.component';
import { LocalityService } from '../__helper/locality.service';
import { DataService } from '../__helper/data.service';
import { AuthService } from '../__helper/auth.service';

@NgModule({
  declarations: [
    LandingComponent,
    SearchModalComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  providers:[
    GooglePlus,
    DrawervComponent,
    LocalityService,
    DataService,
    AuthService,
  ]
})
export class HomeModule { }
