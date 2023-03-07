import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-invoice-body-customer-data',
  templateUrl: './invoice-body-customer-data.component.html',
  styleUrls: ['./invoice-body-customer-data.component.scss']
})
export class InvoiceBodyCustomerDataComponent {
  @Input() customerEmail = '';

}
