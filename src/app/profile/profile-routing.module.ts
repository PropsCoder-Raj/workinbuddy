import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveCheckinsComponent } from './active-checkins/active-checkins.component';
import { ActivePackageComponent } from './active-package/active-package.component';
import { AutoRenewalHistoryComponent } from './auto-renewal-history/auto-renewal-history.component';
import { CheckinsHistoryComponent } from './checkins-history/checkins-history.component';
import { MyFavouriteComponent } from './my-favourite/my-favourite.component';
import { PackageHistoryComponent } from './package-history/package-history.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { WalletHistoryComponent } from './wallet-history/wallet-history.component';

const routes: Routes = [
  {
    path:'',
    component:ProfileComponent
  },
  {
    path:'edit-profile',
    component:EditProfileComponent
  },
  {
    path:'active-package',
    component:ActivePackageComponent
  },
  {
    path:'checkins-history',
    component:CheckinsHistoryComponent
  },
  {
    path:'package-history',
    component:PackageHistoryComponent
  },
  {
    path:'wallet-history',
    component:WalletHistoryComponent
  },
  {
    path:'auto-renewal-history',
    component:AutoRenewalHistoryComponent
  },
  {
    path:'my-favourite',
    component:MyFavouriteComponent
  },
  {
    path:'active-checkins',
    component:ActiveCheckinsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
