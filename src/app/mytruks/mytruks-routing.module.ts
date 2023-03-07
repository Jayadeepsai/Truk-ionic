import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MytruksPage } from './mytruks.page';

const routes: Routes = [
  {
    path: '',
    component: MytruksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MytruksPageRoutingModule {}
