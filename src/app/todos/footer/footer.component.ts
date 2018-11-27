import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TodoDataService } from '../../core/services/todo-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  todoItemsCount$: Observable<number>;

  constructor(
    private todoDataService: TodoDataService,
  ) {
  }

  ngOnInit() {
    this.todoItemsCount$ = this.todoDataService.todoItemsCount$;
  }
}
