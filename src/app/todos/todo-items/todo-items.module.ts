import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { TodoItemsRoutingModule } from './todo-items-routing.module';
import { TodoItemsComponent } from './todo-items.component';

@NgModule({
  imports: [
    SharedModule,
    TodoItemsRoutingModule,
    FormsModule,
  ],
  declarations: [
    TodoItemsComponent
  ],
  exports: [
    TodoItemsComponent
  ]
})
export class TodoItemsModule {
}
