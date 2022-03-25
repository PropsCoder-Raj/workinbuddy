import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path:'splash-screen',
    component:SplashScreenComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
