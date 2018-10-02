import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule,
  ],
  declarations: [
    TodosComponent,
    HeaderComponent
  ]
})
export class TodosModule { }
