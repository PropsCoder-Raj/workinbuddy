import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageRoutingModule } from './package-routing.module';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfileModule } from '../profile/profile.module';


@NgModule({
  declarations: [
    PackageDetailsComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    PackageRoutingModule,
    FormsModule,
    IonicModule,
    ProfileModule
  ],
})
export class PackageModule { }
