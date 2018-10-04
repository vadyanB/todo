import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../../core/services/todo-data.service';
import { TodoItem } from '../../core/models/todo-item';

@Component({
  selector: 'app-all-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit {
  todoItems: TodoItem[];
  
  constructor(private todoDataService: TodoDataService) {  }
  
  ngOnInit( ) {
    this.todoItems = this.todoDataService.getAllTodos();
  }

}



