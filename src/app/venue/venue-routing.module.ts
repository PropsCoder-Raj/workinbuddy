import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckinComponent } from './checkin/checkin.component';
import { ScanQrComponent } from './scan-qr/scan-qr.component';
import { VenueDetailsComponent } from './venue-details/venue-details.component';

const routes: Routes = [
  {
    path:'venue-details/:id',
    component:VenueDetailsComponent
  },
  {
    path:'scan-qr',
    component:ScanQrComponent
  },
  {
    path:'checkin',
    component:CheckinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenueRoutingModule { }
