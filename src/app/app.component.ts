import {Component} from '@angular/core';
import {DemoStateService} from "./state-management/demo-state.service";
import {Store} from "@ngxs/store";
import {GetInvoice} from './state-management/demo.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public demoStateService: DemoStateService, private store: Store) {
  }

  onNgxsClick(): void {
    this.store.dispatch(new GetInvoice());
  }
}
