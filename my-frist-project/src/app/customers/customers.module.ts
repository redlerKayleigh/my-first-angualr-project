import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { CustomersComponent } from '../customers/customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    FilterTextboxComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [ CustomersComponent ]
})
export class CustomerModule { }
