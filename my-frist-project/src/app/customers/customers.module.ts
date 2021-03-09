import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { CustomersComponent } from '../customers/customers.component';

@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [ CustomersComponent ]
})
export class CustomerModule { }
