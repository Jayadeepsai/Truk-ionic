import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTruksPageRoutingModule } from './add-truks-routing.module';

import { AddTruksPage } from './add-truks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTruksPageRoutingModule
  ],
  declarations: [AddTruksPage]
})
export class AddTruksPageModule {}
