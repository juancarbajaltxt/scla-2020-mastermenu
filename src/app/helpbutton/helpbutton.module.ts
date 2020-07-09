import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpbuttonPageRoutingModule } from './helpbutton-routing.module';

import { HelpbuttonPage } from './helpbutton.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpbuttonPageRoutingModule
  ],
  declarations: [HelpbuttonPage]
})
export class HelpbuttonPageModule {}
