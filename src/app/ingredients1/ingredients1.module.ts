import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ingredients1PageRoutingModule } from './ingredients1-routing.module';

import { Ingredients1Page } from './ingredients1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ingredients1PageRoutingModule
  ],
  declarations: [Ingredients1Page]
})
export class Ingredients1PageModule {}
