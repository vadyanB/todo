import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { FilterItems } from './filter-items.pipe';

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule
  ],
  declarations: [
    ItemsComponent,
    FilterItems,
  ]
})
export class ItemsModule {

}
