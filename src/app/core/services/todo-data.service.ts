import { Injectable } from '@angular/core';
import { TODO_ITEMS } from '../mock/mock-todo-items';
import { TodoItem } from '../models/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  todoitems: TodoItem[] = TODO_ITEMS;
  
  constructor( ) { }
  
  getAllTodos() {
    return this.todoitems;
  }
  
 
}
