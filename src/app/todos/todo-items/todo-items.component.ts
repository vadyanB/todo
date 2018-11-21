import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TodoItem } from '../../core/models/todo-item';
import { TodoDataService } from '../../core/services/todo-data.service';


@Component({
  selector: 'app-all-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})

export class TodoItemsComponent implements OnInit {
  todoItems$: Observable<TodoItem[]>;

  constructor(
    private todoDataService: TodoDataService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {

    this.todoItems$ = combineLatest( this.todoDataService.todoItems$, this.route.data)
    .pipe(
      map(([todoItems, data]) => {
        return todoItems.filter(item =>
          data.complete === undefined || data.complete === item.complete
        );
      })
    );
  }

  deleteTodoItem(id) {
    this.todoDataService.deleteByItemId(id);
  }

  toggleTodoItemComplete(id) {
    this.todoDataService.toggleTodoItemComplete(id);
  }
}




