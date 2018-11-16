import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosComponent } from './todos.component';
import { TodoItemsResolverService } from '../core/services/todo-items-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    children: [
      {
        path: '', loadChildren: './todo-items/todo-items.module#TodoItemsModule'
      }
    ],
    resolve: {todoItems: TodoItemsResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule {
}

