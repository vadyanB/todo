import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { FilterTodoItems } from './filter-todo-items.pipe';
import { TodoItemsRoutingModule } from './todo-items-routing.module';
import { TodoItemsComponent } from './todo-items.component';

@NgModule({
  imports: [
    SharedModule,
    TodoItemsRoutingModule,
    FormsModule,
  ],
  declarations: [
    TodoItemsComponent,
    FilterTodoItems
  ],
  exports: [
    TodoItemsComponent
  ]
})
export class TodoItemsModule {
}
