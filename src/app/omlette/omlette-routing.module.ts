import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OmlettePage } from './omlette.page';

const routes: Routes = [
  {
    path: '',
    component: OmlettePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OmlettePageRoutingModule {}
