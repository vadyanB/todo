import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { TodoItem } from '../../core/models/todo-item';
import { AddTodoItem } from '../../store/actions/todo-items.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  newTodoItem: TodoItem = new TodoItem();

  constructor(
    private store: Store
  ) {
  }

  ngOnInit() {
  }

  addTodoItem(newTodoItem) {
    this.store.dispatch(new AddTodoItem(newTodoItem));
    this.newTodoItem = new TodoItem();
  }

}
