import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoItemsRoutingModule } from './todo-items-routing.module';
import { TodoItemsComponent } from './todo-items.component';
import { FilterTodoItems } from './filter-todo-items.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    TodoItemsRoutingModule,
    FormsModule
  ],
  declarations: [
    TodoItemsComponent,
    FilterTodoItems,
  ]
})
export class TodoItemsModule {
}
