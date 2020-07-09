import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SteponePageRoutingModule } from './stepone-routing.module';

import { SteponePage } from './stepone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SteponePageRoutingModule
  ],
  declarations: [SteponePage]
})
export class SteponePageModule {}
