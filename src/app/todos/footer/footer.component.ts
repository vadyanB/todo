import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../../core/services/todo-data.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  constructor(
    private todoDataService: TodoDataService,
  ) {
  
  }

  ngOnInit() {
  }
  
  get todoItems() {
    
    return this.todoDataService.todoItems;
  }

}
