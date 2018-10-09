import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TodoDataService } from '../../core/services/todo-data.service';
import { TodoItem } from '../../core/models/todo-item';

@Component({
  selector: 'app-all-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})


export class ItemsComponent implements OnInit {
  todoItems: TodoItem[];
  complete: boolean;
  
  constructor(
    private todoDataService: TodoDataService,
    private route: ActivatedRoute
  
  ) {
  
  }

  ngOnInit( ) {
    this.todoItems = this.todoDataService.getAllTodos();
    this.complete = this.route.snapshot.data['complete'];
    //console.log (this.route.snapshot.data);
    
  }
  
  
  
  
}



