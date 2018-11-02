import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FormsModule } from '@angular/forms';
import { TodoItemsModule } from '../todo-items/todo-items.module';


@NgModule({
  imports: [
    CommonModule,
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
