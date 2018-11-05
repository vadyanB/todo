import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';

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
export class TodosModule {
}
