import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { TodoDataService } from './todo-data.service';

@Injectable({
  providedIn: 'root'
})
export class TodoItemsResolverService implements Resolve<any> {

  constructor(private todoDataService: TodoDataService) {
  }

  resolve() {
    this.todoDataService.fetchTodoItems();
  }
}
