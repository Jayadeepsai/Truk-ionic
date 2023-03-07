import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MytruksPageRoutingModule } from './mytruks-routing.module';

import { MytruksPage } from './mytruks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MytruksPageRoutingModule
  ],
  declarations: [MytruksPage]
})
export class MytruksPageModule {}
