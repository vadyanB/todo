import { HttpErrorResponse } from '@angular/common/http';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { TodoItem } from '../../core/models/todo-item';
import { TodoItemsRequestsService } from '../../core/services/todo-items-requests.service';
import * as todoItemsActions from '../actions/todo-items.actions';

export interface TodoItemsStateModel {
  todoItems: { [id: number]: TodoItem };
  todoItemsId: number[];
}

@State<TodoItemsStateModel>({
  name: 'TodoItems',
  defaults: {
    todoItems: {},
    todoItemsId: []
  }
})

export class TodoItemsState {
  constructor(private todoItemsRequestsService: TodoItemsRequestsService) {
  }

  @Selector()
  static getTodoItems(state: TodoItemsStateModel) {
    return state.todoItemsId
    .map(id => state.todoItems[id]);
  }

  @Selector()
  static getTodoItemsId(state: TodoItemsStateModel) {
    return state.todoItemsId.length;
  }


  @Action(todoItemsActions.FetchTodoItems)
  fetchTodoItems({dispatch}: StateContext<TodoItemsStateModel>) {
    return this.todoItemsRequestsService.fetchTodoItems()
    .pipe(
      map((todoItems: TodoItem[]) =>
        dispatch(new todoItemsActions.FetchTodoItemsSuccess(todoItems))
      ),
      catchError((error: HttpErrorResponse) =>
        dispatch(new todoItemsActions.FetchTodoItemsFailed(error))
      )
    );
  }

  @Action(todoItemsActions.FetchTodoItemsSuccess)
  fetchTodoItemsSuccess(
    {patchState}: StateContext<TodoItemsStateModel>,
    {payload}: todoItemsActions.FetchTodoItemsSuccess
  ) {
    patchState(
      {
        todoItems: payload.reduce((todoItems, current) => ({...todoItems, [current.id]: current}), {}),
        todoItemsId: payload.map(todoItemsId => todoItemsId.id)
      }
    );
  }

  @Action(todoItemsActions.FetchTodoItemsFailed)
  fetchTodoItemsFailed(
    {patchState}: StateContext<TodoItemsStateModel>,
    {payload: error}: todoItemsActions.FetchTodoItemsFailed
  ) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  @Action(todoItemsActions.AddTodoItem)
  addTodoItem(
    {dispatch}: StateContext<TodoItemsStateModel>,
    {payload: newTodoItem}) {
    return this.todoItemsRequestsService.addTodoItem(newTodoItem)
    .pipe(
      map(() =>
        dispatch(new todoItemsActions.AddTodoItemSuccess(newTodoItem))
      ),
      catchError((error: HttpErrorResponse) =>
        dispatch(new todoItemsActions.AddTodoItemFailed(error))
      )
    );
  }

  @Action(todoItemsActions.AddTodoItemSuccess)
  addTodoItemSuccess(
    {setState, getState}: StateContext<TodoItemsStateModel>,
    {payload}: todoItemsActions.AddTodoItemSuccess
  ) {
    setState(
      {
        todoItems: {...getState().todoItems, [payload.id]: payload},
        todoItemsId: [...getState().todoItemsId, payload.id]
      }
    );
    this.todoItemsRequestsService.addTodoItem(payload);
  }

  @Action(todoItemsActions.AddTodoItemFailed)
  addTodoItemFailed(
    {patchState}: StateContext<TodoItemsStateModel>,
    {payload: error}: todoItemsActions.AddTodoItemFailed
  ) {

    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }


  @Action(todoItemsActions.DeleteTodoItem)
  deleteTodoItem(
    {dispatch}: StateContext<TodoItemsStateModel>,
    {payload: id}) {
    return this.todoItemsRequestsService.deleteByItemId(id)
    .pipe(
      map(() =>
        dispatch(new todoItemsActions.DeleteTodoItemSuccess(id))
      ),
      catchError((error: HttpErrorResponse) =>
        dispatch(new todoItemsActions.DeleteTodoItemFailed(error))
      )
    );
  }

  @Action(todoItemsActions.DeleteTodoItemSuccess)
  deleteTodoItemSuccess(
    {patchState, getState}: StateContext<TodoItemsStateModel>,
    {payload: id}: todoItemsActions.DeleteTodoItemSuccess
  ) {
    patchState(
      {
        todoItemsId: getState().todoItemsId.filter(item => item !== id)
      }
    );
  }


  @Action(todoItemsActions.DeleteTodoItemFailed)
  deleteTodoItemFailed(
    {patchState}: StateContext<TodoItemsStateModel>,
    {payload: error}: todoItemsActions.DeleteTodoItemFailed
  ) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  @Action(todoItemsActions.ToggleTodoItem)
  toggleTodoItem(
    {dispatch, getState}: StateContext<TodoItemsStateModel>,
    {payload: id}) {
    const todoItem = getState().todoItems[id];
    todoItem.complete = !todoItem.complete;
    return this.todoItemsRequestsService.toggleTodoItemComplete(id, todoItem)
    .pipe(
      map(() => {
          dispatch(new todoItemsActions.ToggleTodoItemSuccess(todoItem));
        }
      ),
      catchError((error: HttpErrorResponse) =>
        dispatch(new todoItemsActions.ToggleTodoItemFailed(error))
      )
    );
  }

  @Action(todoItemsActions.ToggleTodoItemSuccess)
  toggleTodoItemSuccess(
    {patchState, getState, setState}: StateContext<TodoItemsStateModel>,
    {payload: item}: todoItemsActions.ToggleTodoItemSuccess
  ) {
    patchState(
      {
        todoItems: {...getState().todoItems, [item.id]: item}
      }
    );
  }

  @Action(todoItemsActions.DeleteTodoItemFailed)
  toggleTodoItemFailed(
    {patchState}: StateContext<TodoItemsStateModel>,
    {payload: error}: todoItemsActions.DeleteTodoItemFailed
  ) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}


