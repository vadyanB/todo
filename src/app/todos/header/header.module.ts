import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { TodoItemsModule } from '../todo-items/todo-items.module';

import { HeaderComponent } from './header.component';


@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    TodoItemsModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
