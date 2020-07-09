import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HamsandwichPageRoutingModule } from './hamsandwich-routing.module';

import { HamsandwichPage } from './hamsandwich.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HamsandwichPageRoutingModule
  ],
  declarations: [HamsandwichPage]
})
export class HamsandwichPageModule {}
