import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ReferalCodeComponent } from './referal-code/referal-code.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';

const routes: Routes = [
  {
    path:'referral-code',
    component:ReferalCodeComponent
  },
  {
    path:'faq',
    component:FaqComponent
  },
  {
    path:'terms-conditions',
    component:TermsConditionsComponent
  },
  {
    path:'privacy-policy',
    component:PrivacyPolicyComponent
  },
  {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }
