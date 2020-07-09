import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpbuttonPage } from './helpbutton.page';

const routes: Routes = [
  {
    path: '',
    component: HelpbuttonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpbuttonPageRoutingModule {}
