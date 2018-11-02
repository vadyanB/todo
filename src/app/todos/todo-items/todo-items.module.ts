import { NgModule } from '@angular/core';
import { TodoItemsRoutingModule } from './todo-items-routing.module';
import { TodoItemsComponent } from './todo-items.component';
import { FilterTodoItems } from './filter-todo-items.pipe';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


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
