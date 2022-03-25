import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DrawervComponent } from "./drawerv/drawerv.component";
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [DrawervComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  exports:[DrawervComponent]
})
export class SharedComponentsModule { }
