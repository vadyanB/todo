import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { combineLatest, map } from 'rxjs/operators';

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

    this.todoItems$ = this.todoDataService.todoItems$
    .pipe(
      combineLatest(this.route.data),
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




