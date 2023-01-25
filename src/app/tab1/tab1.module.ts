import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { LoadlistingComponent } from '../loadlisting/loadlisting.component';


import { Tab1PageRoutingModule } from './tab1-routing.module';



import { MybidsComponent } from '../mybids/mybids.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    
  ],
  declarations: [Tab1Page,MybidsComponent,LoadlistingComponent]
})
export class Tab1PageModule {}
