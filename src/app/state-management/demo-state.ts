import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {CustomerDataModel} from "../customer-data.model";
import {GetInvoice, SetCustomerEmail} from './demo.action';
import {map, Observable, of} from 'rxjs';
import {ApiService} from '../api.service';

@State<CustomerDataModel>({
  name: 'demoState',
  defaults: {
    firstname: '',
    lastname: '',
    address: '',
    phoneNumber: '',
    email: ''
  }
})
@Injectable({providedIn: 'root'})
export class DemoState {
  constructor(private apiService: ApiService) {
  }
  @Selector()
  static getEmail(state: CustomerDataModel) {
    return state.email;
  }

  @Action(SetCustomerEmail)
  setCustomerEmail(ctx: StateContext<CustomerDataModel>, {payload}: SetCustomerEmail): Observable<string> {
    return of(ctx.patchState({email: payload}).email);
  }

  @Action(GetInvoice)
  getInvoice(ctx: StateContext<CustomerDataModel>): Observable<CustomerDataModel> {
    return this.apiService.getInvoice().pipe(
      map(invoice => {
        ctx.setState(invoice);
        return invoice;
      })
    );
  }
}
