import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { FetchTodoItems } from '../../store/actions/todo-items.actions';
import { TodoItemsState } from '../../store/state/todo-items.state';
import { TodoItem } from '../models/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {



  @Select(TodoItemsState.getTodoItems) todoItems$: Observable<TodoItem[]>;
  @Select(TodoItemsState.getTodoItemsId) todoItemsCount$: Observable<number>;

  constructor(private store: Store) {
  }

  fetchTodoItems() {
    this.store.dispatch(new FetchTodoItems());
  }


}
