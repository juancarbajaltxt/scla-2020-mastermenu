import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ingredients3Page } from './ingredients3.page';

const routes: Routes = [
  {
    path: '',
    component: Ingredients3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ingredients3PageRoutingModule {}
