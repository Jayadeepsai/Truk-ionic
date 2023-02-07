import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceBidPage } from './place-bid.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceBidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceBidPageRoutingModule {}
