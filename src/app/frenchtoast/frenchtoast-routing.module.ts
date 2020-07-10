import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrenchtoastPage } from './frenchtoast.page';

const routes: Routes = [
  {
    path: '',
    component: FrenchtoastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrenchtoastPageRoutingModule {}
