import { Component, OnInit } from '@angular/core';

import { TodoItem } from '../../core/models/todo-item';
import { TodoDataService } from '../../core/services/todo-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  newTodoItem: TodoItem = new TodoItem();

  constructor(
    private todoDataService: TodoDataService
  ) {
  }

  ngOnInit() {
  }

  addTodoItem(newTodoItem) {
    this.todoDataService.addTodoItem(newTodoItem);
    this.newTodoItem = new TodoItem();
  }

}
