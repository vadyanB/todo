import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { FilterTodoItems } from '../todo-items/filter-todo-items.pipe';

@NgModule({
  imports: [
    CommonModule,
    
  ],
  declarations: [
    FooterComponent,
    FilterTodoItems
  ]
})
export class FooterModule { }
