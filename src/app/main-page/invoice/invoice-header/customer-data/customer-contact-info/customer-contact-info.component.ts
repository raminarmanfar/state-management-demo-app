import { Component } from '@angular/core';
import {DemoStateService} from "../../../../../state-management/demo-state.service";
import {Store} from "@ngxs/store";
import {SetCustomerEmail} from "../../../../../state-management/demo.action";

@Component({
  selector: 'app-customer-contact-info',
  templateUrl: './customer-contact-info.component.html',
  styleUrls: ['./customer-contact-info.component.scss']
})
export class CustomerContactInfoComponent {
  constructor(public demoStateService: DemoStateService, private store: Store) {
  }

  onEmailChange(email: string): void {
    this.store.dispatch(new SetCustomerEmail(email));
  }
}
