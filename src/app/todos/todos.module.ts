import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule,
    FooterModule,
    HeaderModule
  ],
  declarations: [
    TodosComponent,
  ]
})
export class TodosModule { }
