import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmoothiesPage } from './smoothies.page';

const routes: Routes = [
  {
    path: '',
    component: SmoothiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmoothiesPageRoutingModule {}
