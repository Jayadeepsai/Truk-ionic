import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'attach-new-load',
    loadChildren: () => import('./attach-new-load/attach-new-load.module').then( m => m.AttachNewLoadPageModule)
  },
  {
    path: 'edit-page',
    loadChildren: () => import('./edit-page/edit-page.module').then( m => m.EditPagePageModule)
  },
  {
    path: 'place-bid',
    loadChildren: () => import('./place-bid/place-bid.module').then( m => m.PlaceBidPageModule)
  },
  {
    path: 'load-details',
    loadChildren: () => import('./load-details/load-details.module').then( m => m.LoadDetailsPageModule)
  },
  {
    path: 'view-bid',
    loadChildren: () => import('./view-bid/view-bid.module').then( m => m.ViewBidPageModule)
  },
  {
    path: 'all-bids',
    loadChildren: () => import('./all-bids/all-bids.module').then( m => m.AllBidsPageModule)
  },
  {
    path: 'mytruks',
    loadChildren: () => import('./mytruks/mytruks.module').then( m => m.MytruksPageModule)
  },
  {
    path: 'add-truks',
    loadChildren: () => import('./add-truks/add-truks.module').then( m => m.AddTruksPageModule)
  },
  
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
