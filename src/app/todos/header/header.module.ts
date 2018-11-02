import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { FormsModule } from '@angular/forms';
import { TodoItemsModule } from '../todo-items/todo-items.module';
import { SharedModule } from '../../shared/shared.module';


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
