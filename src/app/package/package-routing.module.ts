import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { PackageDetailsComponent } from './package-details/package-details.component';

const routes: Routes = [
  {
    path:'',
    component:PackageDetailsComponent
  },
  {
    path:'checkout',
    component:CheckoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackageRoutingModule { }
