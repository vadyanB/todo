import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TodoItem } from '../models/todo-item';

@Injectable({
  providedIn: 'root'
})

export class TodoItemsRequestsService {


  constructor(private http: HttpClient) {
  }

  fetchTodoItems() {
    return this.http.get<TodoItem[]>(`todo-items`);
  }

  addTodoItem(newTodoItem: TodoItem) {
    return this.http.post<TodoItem>(`todo-items`, newTodoItem);
  }

  deleteByItemId(id) {
    return this.http.delete(`todo-items/${id}`);
  }

  toggleTodoItemComplete(id, todoItem) {
    return this.http.put<TodoItem>(
      `todo-items/${id}`,
      {...todoItem});
  }
}
