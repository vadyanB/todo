import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoDataService } from '../../core/services/todo-data.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})

export class TodoItemsComponent implements OnInit {

  complete: boolean = this.route.snapshot.data['complete'];

  constructor(
    private todoDataService: TodoDataService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.complete = this.route.snapshot.data['complete'];
  }

  deleteTodoItem(id) {
    this.todoDataService.deleteByItemId(id);
  }

  get todoItems() {
    return this.todoDataService.todoItems;
  }

  toggleTodoItemComplete(id) {
    this.todoDataService.toggleTodoItemComplete(id);
  }
}




