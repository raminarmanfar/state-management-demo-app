import {Component, Input} from '@angular/core';
import {DemoStateService} from "../../../../../state-management/demo-state.service";

@Component({
  selector: 'app-invoice-body-customer-data',
  templateUrl: './invoice-body-customer-data.component.html',
  styleUrls: ['./invoice-body-customer-data.component.scss']
})
export class InvoiceBodyCustomerDataComponent {
  constructor(public demoStateService: DemoStateService) {
  }

}
