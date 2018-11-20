import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, map, mapTo, switchMap, withLatestFrom } from 'rxjs/operators';

import { TodoItem } from '../models/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  addTodoItem$ = new Subject();
  deleteByItemId$ = new Subject();
  toggleTodoItemComplete$ = new Subject();
  fetchTodoItems$ = new Subject();
  todoItems$: BehaviorSubject<TodoItem[]> = new BehaviorSubject([]);


  constructor(private http: HttpClient) {

    this.fetchTodoItems$
    .pipe(
      switchMap(() => {
        return this.http.get<TodoItem[]>(`todo-items`);
      }),
      catchError(this.handleError),
      map((todoItems: TodoItem[]) => {
        return [...todoItems];
      })
    )
    .subscribe(this.todoItems$);

    this.addTodoItem$
    .pipe(
      switchMap((newTodoItem) => {
        return this.http.post<TodoItem>(`todo-items`, newTodoItem);
      }),
      catchError(this.handleError),
      withLatestFrom(this.todoItems$),
      map(([todoItem, todoItems]) => {
        return todoItems.concat(todoItem);
      })
    )
    .subscribe(this.todoItems$);

    this.deleteByItemId$
    .pipe(
      switchMap((id) => {
        return this.http.delete(`todo-items/${id}`).pipe(mapTo(id));
      }),
      catchError(this.handleError),
      withLatestFrom(this.todoItems$),
      map(([id, todoItems]) => {
        return todoItems.filter(item => id !== item.id);
      })
    )
    .subscribe(this.todoItems$);

    this.toggleTodoItemComplete$
    .pipe(
      switchMap(id => {
        const todoItem: TodoItem = this.todoItems$.value.find(item => id === item.id);
        return this.http.put<TodoItem>(
          `todo-items/${id}`,
          {...todoItem, complete: !todoItem.complete});
      }),
      catchError(this.handleError),
      withLatestFrom(this.todoItems$),
      map(([todoItem, todoItems]) => {
        return todoItems.map(item => item.id === todoItem.id ? todoItem : item);
      })
    )
    .subscribe(this.todoItems$);
  }

  fetchTodoItems() {
    this.fetchTodoItems$.next();
  }

  toggleTodoItemComplete(id) {
    this.toggleTodoItemComplete$.next(id);
  }

  deleteByItemId(id) {
    this.deleteByItemId$.next(id);
  }

  addTodoItem(newTodoItem) {
    this.addTodoItem$.next(newTodoItem);
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
}
