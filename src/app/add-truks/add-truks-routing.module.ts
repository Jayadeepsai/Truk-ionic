import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTruksPage } from './add-truks.page';

const routes: Routes = [
  {
    path: '',
    component: AddTruksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTruksPageRoutingModule {}
