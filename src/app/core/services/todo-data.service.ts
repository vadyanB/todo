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
    this.todoItems = this.todoItems.filter(item => id !== item.id);
  }
  
  toggleTodoItemComplete(id) {
    this.todoItems = this.todoItems.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
  }

  addTodoItem(newTodoItem) {
     this.todoItems = [...this.todoItems, ...newTodoItem];
  }
}
