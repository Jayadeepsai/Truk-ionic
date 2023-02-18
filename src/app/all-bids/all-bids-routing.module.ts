import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllBidsPage } from './all-bids.page';

const routes: Routes = [
  {
    path: '',
    component: AllBidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllBidsPageRoutingModule {}
