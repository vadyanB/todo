import { Injectable } from '@angular/core';

import { TODO_ITEMS } from '../mock/mock-todo-items';
import { TodoItem } from '../models/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  
  todoItems: TodoItem[] = TODO_ITEMS;
  
  constructor() {
  }
  
  deleteByItemId(id) {
    return this.todoItems = this.todoItems.filter(item => id !== item.id);
  }
  
  toggleTodoItemComplete(id) {
  console.log (this.todoItems);
    //return this.todoItems[id - 1].complete = (this.todoItems[id - 1].complete === true ) ? this.todoItems[id - 1].complete = false : this.todoItems[id - 1].complete = false;
    
  }
}
