import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


import { TodoItem } from '../models/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  todoItems: TodoItem[];

  constructor(private http: HttpClient) {
    this.fetchTodoItems();
  }

  private handleError(error: HttpErrorResponse) {
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

    this.http.delete(`todo-items/${id}`)
    .pipe(
      catchError(this.handleError)
    )
    .subscribe(() => {
      this.todoItems = this.todoItems.filter(item => id !== item.id);
    });
  }

  toggleTodoItemComplete(id) {
    const todoItem: TodoItem = this.todoItems.find(item => id === item.id);
    this.http.put<TodoItem>(`todo-items/${id}`, {
      ...todoItem,
      complete: !todoItem.complete
    })
    .pipe(
      catchError(this.handleError)
    )
    .subscribe((todoItem: TodoItem) =>
      this.todoItems = this.todoItems.map(item => item.id === todoItem.id ? todoItem : item)
    );
  }

  addTodoItem(newTodoItem) {
    this.http.post<TodoItem>('todo-items', newTodoItem)
    .pipe(
      catchError(this.handleError)
    )
    .subscribe((todoItem: TodoItem) => this.todoItems = [...this.todoItems, todoItem]);
  }

  fetchTodoItems() {
    this.http.get<TodoItem[]>('todo-items')
    .pipe(
      catchError(this.handleError)
    )
    .subscribe(
      (todoItems: TodoItem[]) => this.todoItems = [...todoItems]
    );
  }
}
