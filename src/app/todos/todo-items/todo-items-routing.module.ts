import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { TodoItemsComponent } from './todo-items.component';

const routes: Routes = [
  {
    path: '',
    component: TodoItemsComponent
  },
  {
    path: 'completed',
    component: TodoItemsComponent,
    data: { complete : true }
  },
  {
    path: 'active',
    component: TodoItemsComponent,
    data: { complete : false }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoItemsRoutingModule { }


