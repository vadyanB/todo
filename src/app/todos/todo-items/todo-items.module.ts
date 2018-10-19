import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoItemsRoutingModule } from './todo-items-routing.module';
import { TodoItemsComponent } from './todo-items.component';
import { FilterTodoItems } from './filter-todo-items.pipe';

@NgModule({
  imports: [
    CommonModule,
    TodoItemsRoutingModule
  ],
  declarations: [
    TodoItemsComponent,
    FilterTodoItems,
  ]
})
export class TodoItemsModule {
}
