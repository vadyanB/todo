import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TodoItem } from '../../core/models/todo-item';
import { TodoDataService } from '../../core/services/todo-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  todoItems$: Observable<TodoItem[]>;

  constructor(
    private todoDataService: TodoDataService,
  ) {
  }

  ngOnInit() {
    this.todoItems$ = this.todoDataService.todoItems$;
  }

  get todoItems() {
    return this.todoDataService.todoItems;
  }
}
