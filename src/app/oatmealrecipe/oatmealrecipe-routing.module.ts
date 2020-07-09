import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OatmealrecipePage } from './oatmealrecipe.page';

const routes: Routes = [
  {
    path: '',
    component: OatmealrecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OatmealrecipePageRoutingModule {}
