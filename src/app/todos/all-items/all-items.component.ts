import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../../core/services/todo-data.service';
import { TodoItem } from '../../core/models/todo-item';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss']
})

export class AllItemsComponent implements OnInit {
  todoitems: TodoItem[];
  
  constructor(todoDataService: TodoDataService) {
    this.todoitems = todoDataService.getAllTodos();
    console.log(this.todoitems);
  }

  ngOnInit( ) {
  }

}
