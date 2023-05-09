import { Component } from '@angular/core';
import { ICustomer } from './customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  customers: ICustomer[] = [
    {
      fullName: 'cliente1', 
      email: 'cliente1@gmail.com',
      phone: '1111111'
    },
    {
      fullName: 'cliente2', 
      email: 'cliente2@gmail.com',
      phone: '2222222'
    },
    {
      fullName: 'cliente3', 
      email: 'cliente3@gmail.com',
      phone: '3333333'
    }
  ]
}
