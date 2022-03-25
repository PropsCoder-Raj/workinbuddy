import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { NgOtpInputModule } from 'ng-otp-input';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    WelcomeComponent,
    SplashScreenComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    NgOtpInputModule,
    IonicModule
  ],
  providers:[
    GooglePlus,
    Facebook
  ]
})
export class AuthModule { }
