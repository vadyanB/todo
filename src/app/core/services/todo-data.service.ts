import { Injectable } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { TODO_ITEMS } from '../mock/mock-todo-items';
import { TodoItem } from '../models/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  todoItems: TodoItem[] = TODO_ITEMS;
  
  constructor( ) {
  
  }
  
  getAllTodos() {
    return this.todoItems;
  }
  
  
  
}
