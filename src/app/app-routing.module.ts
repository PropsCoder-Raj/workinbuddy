import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth/splash-screen']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['home']);


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'package-details',
    loadChildren: () => import('./package/package.module').then( m => m.PackageModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then( m => m.SupportModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'venue',
    loadChildren: () => import('./venue/venue.module').then( m => m.VenueModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfileModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
