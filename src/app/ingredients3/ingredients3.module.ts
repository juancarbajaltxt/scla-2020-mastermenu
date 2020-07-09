import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ingredients3PageRoutingModule } from './ingredients3-routing.module';

import { Ingredients3Page } from './ingredients3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ingredients3PageRoutingModule
  ],
  declarations: [Ingredients3Page]
})
export class Ingredients3PageModule {}
