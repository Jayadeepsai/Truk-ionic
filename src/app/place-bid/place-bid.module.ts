import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceBidPageRoutingModule } from './place-bid-routing.module';

import { PlaceBidPage } from './place-bid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceBidPageRoutingModule
  ],
  declarations: [PlaceBidPage]
})
export class PlaceBidPageModule {}
