import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    children: [
      {
        path: '', loadChildren: './items/items.module#ItemsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }

