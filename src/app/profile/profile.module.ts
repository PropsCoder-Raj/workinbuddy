import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { FormsModule } from '@angular/forms';
import { ActivePackageComponent } from './active-package/active-package.component';
import { CheckinsHistoryComponent } from './checkins-history/checkins-history.component';
import { PackageHistoryComponent } from './package-history/package-history.component';
import { WalletHistoryComponent } from './wallet-history/wallet-history.component';
import { AutoRenewalHistoryComponent } from './auto-renewal-history/auto-renewal-history.component';
import { MyFavouriteComponent } from './my-favourite/my-favourite.component';
import { IonicModule } from '@ionic/angular';
import { ActiveCheckinsComponent } from './active-checkins/active-checkins.component';



@NgModule({
  declarations: [
    ProfileComponent,
    EditProfileComponent,
    ActivePackageComponent,
    CheckinsHistoryComponent,
    PackageHistoryComponent,
    WalletHistoryComponent,
    AutoRenewalHistoryComponent,
    MyFavouriteComponent,
    ActiveCheckinsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    IonicModule
  ]
})
export class ProfileModule { }
