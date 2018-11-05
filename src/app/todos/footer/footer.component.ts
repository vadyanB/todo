import { Component } from '@angular/core';

import { TodoDataService } from '../../core/services/todo-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(
    private todoDataService: TodoDataService,
  ) {
  }

  get todoItems() {
    return this.todoDataService.todoItems;
  }
}
