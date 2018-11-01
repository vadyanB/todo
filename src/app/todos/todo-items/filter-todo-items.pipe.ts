import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from '../../core/models/todo-item';

@Pipe ({ name: 'filterTodoItems' })

export class FilterTodoItems implements PipeTransform {
  transform (arr: TodoItem[], complete: boolean): TodoItem[] {
    
    return arr.filter(item =>
    
    complete === undefined || complete === item.complete
    );
  }
}
