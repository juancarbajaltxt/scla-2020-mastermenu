import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OmlettePageRoutingModule } from './omlette-routing.module';

import { OmlettePage } from './omlette.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OmlettePageRoutingModule
  ],
  declarations: [OmlettePage]
})
export class OmlettePageModule {}
