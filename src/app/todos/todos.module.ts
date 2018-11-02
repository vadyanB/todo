import { NgModule } from '@angular/core';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TodosRoutingModule,
    FooterModule,
    HeaderModule
  ],
  declarations: [
    TodosComponent,
  ]
})
export class TodosModule { }
