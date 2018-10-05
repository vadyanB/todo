import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, Routes, Params, Data  } from '@angular/router';
import { TodoDataService } from '../../core/services/todo-data.service';
import { TodoItem } from '../../core/models/todo-item';

@Component({
  selector: 'app-all-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})


export class ItemsComponent implements OnInit {
  todoItems: TodoItem[];
  
  
  constructor(
    private todoDataService: TodoDataService,
    private route: ActivatedRoute
 
  ) { }
  
  ngOnInit( ) {
    this.todoItems = this.todoDataService.getAllTodos();
    
    console.log (this.route.snapshot.data['path']);
    
  }
  
  
  
}



