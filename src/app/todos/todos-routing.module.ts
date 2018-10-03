import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    children: [
      {
        path: 'active', loadChildren: '/home/user/projects/todo/src/app/todos/active-items/active-items.module#ActiveItemsModule'
      },
      {
        path: 'completed', loadChildren: '/home/user/projects/todo/src/app/todos/completed-items/completed-items.module#CompletedItemsModule'
      },
      {
        path: '', loadChildren: '/home/user/projects/todo/src/app/todos/all-items/all-items.module#AllItemsModule'
      },
    ]
  },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
