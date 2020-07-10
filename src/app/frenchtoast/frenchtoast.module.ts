import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrenchtoastPageRoutingModule } from './frenchtoast-routing.module';

import { FrenchtoastPage } from './frenchtoast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrenchtoastPageRoutingModule
  ],
  declarations: [FrenchtoastPage]
})
export class FrenchtoastPageModule {}
