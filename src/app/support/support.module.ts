import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { ReferalCodeComponent } from './referal-code/referal-code.component';
import { FaqComponent } from './faq/faq.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    ReferalCodeComponent,
    FaqComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule,
    FormsModule,
    IonicModule
  ],
  providers: [
    SocialSharing
  ]
})
export class SupportModule { }
