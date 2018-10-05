import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ItemsComponent } from './items.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsComponent,
    data: { path : 'all'},
  },
  {
    path: 'completed',
    component: ItemsComponent,
    data: { path : 'completed'},
  },
  {
    path: 'active',
    component: ItemsComponent,
    data: { path : 'active'},
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }



//data: { path : 'all'},
//children: [
//  {
//    path: 'active',
//    loadChildren: './items.module#ItemsModule',
//    data: { path : 'active'}
//  },
//  {
//    path: 'completed',
//    loadChildren: './items.module#ItemsModule',
//    data: { path : 'completed'}
//  }
//]
