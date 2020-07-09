import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ingredients1Page } from './ingredients1.page';

const routes: Routes = [
  {
    path: '',
    component: Ingredients1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ingredients1PageRoutingModule {}
