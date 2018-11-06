import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { TodoItem } from '../models/todo-item';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  todoItemsUrl = 'http://localhost:3000/todo-items';
  todoItems: TodoItem[];
  error: HttpErrorResponse;

  constructor(private http: HttpClient) {
    this.fetchTodoItems()
    .subscribe((todoItems: TodoItem[]) =>
        this.todoItems = [...todoItems],
      error => this.error = error);
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
  };


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
    return this.todoItems = [...this.todoItems, newTodoItem];
  }

  fetchTodoItems() {
    return this.http.get<TodoItem[]>(this.todoItemsUrl)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
}
