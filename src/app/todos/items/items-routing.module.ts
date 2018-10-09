import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ItemsComponent } from './items.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsComponent
  },
  {
    path: 'completed',
    component: ItemsComponent,
    data: { complete : true},
  },
  {
    path: 'active',
    component: ItemsComponent,
    data: { complete : false},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }


