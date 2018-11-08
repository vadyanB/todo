import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';


import { TodoItem } from '../models/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  todoItemsUrl = 'http://localhost:3000/todo-items/';
  todoItems: TodoItem[];
  error: HttpErrorResponse;
  todoItem: TodoItem

  constructor(private http: HttpClient) {

    this.fetchTodoItems();

  }

  private handleError(error) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  deleteByItemId(id: number) {
    const url = `${this.todoItemsUrl}/${id}`;
    this.http.delete(url)
    .subscribe(() => this.todoItems = this.todoItems.filter(item => id !== item.id));
  }

  toggleTodoItemComplete(id) {

    this.todoItem = this.todoItems.find(item => id === item.id);
    this.todoItem.complete = !this.todoItem.complete;
    console.log(this.todoItem);
    return this.http.put<TodoItem>(`${this.todoItemsUrl}/${id}`, this.todoItem)
    .subscribe();
  }

  addTodoItem(newTodoItem) {
    return this.http.post<TodoItem>(this.todoItemsUrl, newTodoItem)
    .subscribe(() => this.todoItems = [...this.todoItems, newTodoItem]);
  }

  fetchTodoItems() {
    return this.http.get<TodoItem[]>(this.todoItemsUrl)
    .subscribe((todoItems: TodoItem[]) =>
        this.todoItems = [...todoItems],
      error => this.error = error);
  }
}
