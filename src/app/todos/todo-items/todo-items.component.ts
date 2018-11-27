import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TodoItem } from '../../core/models/todo-item';
import { TodoDataService } from '../../core/services/todo-data.service';
import { TodoItemsRequestsService} from '../../core/services/todo-items-requests.service';
import { DeleteTodoItem, ToggleTodoItem } from '../../store/actions/todo-items.actions';


@Component({
  selector: 'app-all-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})

export class TodoItemsComponent implements OnInit {
  todoItems$: Observable<TodoItem[]>;

  constructor(
    private  todoItemsRequestsService:  TodoItemsRequestsService,
    private  todoDataService:  TodoDataService,
    private store: Store,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
  this.todoItems$ = this.todoDataService.todoItems$;
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
    this.store.dispatch(new DeleteTodoItem(id));

  }

  toggleTodoItemComplete(id) {
    this.store.dispatch( new ToggleTodoItem(id));
  }
}




