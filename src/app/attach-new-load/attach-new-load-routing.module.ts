import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttachNewLoadPage } from './attach-new-load.page';

const routes: Routes = [
  {
    path: '',
    component: AttachNewLoadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttachNewLoadPageRoutingModule {}
