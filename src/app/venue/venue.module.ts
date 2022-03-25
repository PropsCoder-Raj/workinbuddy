import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenueRoutingModule } from './venue-routing.module';
import { VenueDetailsComponent } from './venue-details/venue-details.component';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { ScanQrComponent } from './scan-qr/scan-qr.component';
import { CheckinComponent } from './checkin/checkin.component';
import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule } from '../components/shared-components.module';

@NgModule({
  declarations: [
    VenueDetailsComponent,
    ScanQrComponent,
    CheckinComponent
  ],
  imports: [
    CommonModule,
    VenueRoutingModule,
    IonicModule,
    SharedComponentsModule
  ],
  providers: [
    QRScanner
  ]
})
export class VenueModule { }
