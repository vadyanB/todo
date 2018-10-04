import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsComponent,
    children: [
      {
        path: 'active', loadChildren: './items.module#ItemsModule'
      },
      {
        path: 'completed', loadChildren: './items.module#ItemsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
