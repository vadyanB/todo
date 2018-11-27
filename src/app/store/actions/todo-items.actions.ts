import { HttpErrorResponse } from '@angular/common/http';

import { TodoItem } from '../../core/models/todo-item';

export class FetchTodoItems {
  static readonly type = '[TodoItem] FetchTodoItems';

}

export class FetchTodoItemsSuccess {
  static readonly type = '[TodoItem] FetchTodoItemsSuccess';

  constructor(public payload: TodoItem[]) {
  }

}

export class FetchTodoItemsFailed {
  static readonly type = '[error] FetchTodoItemsFailed';

  constructor(public payload: HttpErrorResponse) {
  }

}

export class AddTodoItem {
  static readonly type = '[TodoItem] AddTodoItem';

  constructor(public payload: TodoItem) {
  }

}

export class AddTodoItemSuccess {
  static readonly type = '[TodoItem] AddTodoItemSuccess';

  constructor(public payload: TodoItem) {
  }

}

export class AddTodoItemFailed {
  static readonly type = '[error] AddTodoItemFailed';

  constructor(public payload: HttpErrorResponse) {
  }

}

export class DeleteTodoItem {
  static readonly type = '[TodoItem] DeleteTodoItem';

  constructor(public payload: TodoItem) {
  }

}

export class DeleteTodoItemSuccess {
  static readonly type = '[TodoItem] DeleteTodoItemSuccess';

  constructor(public payload: number) {
  }

}

export class DeleteTodoItemFailed {
  static readonly type = '[error] DeleteTodoItemFailed';

  constructor(public payload: HttpErrorResponse) {
  }

}

export class ToggleTodoItem {
  static readonly type = '[TodoItem] ToggleTodoItem';

  constructor(public payload: TodoItem) {
  }

}

export class ToggleTodoItemSuccess {
  static readonly type = '[TodoItem] ToggleTodoItemSuccess';

  constructor(public payload: TodoItem) {
  }

}

export class ToggleTodoItemFailed {
  static readonly type = '[error] ToggleTodoItemFailed';

  constructor(public payload: HttpErrorResponse) {
  }

}


