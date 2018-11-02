import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
