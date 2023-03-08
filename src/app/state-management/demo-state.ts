import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {CustomerDataModel} from "../customer-data.model";
import {SetCustomerEmail} from "./demo.action";
import {Observable, of} from "rxjs";

@State<CustomerDataModel>({
  name: 'demoState',
  defaults: {
    firstname: '',
    lastname: '',
    address: '',
    phoneNumber: '',
    email: 'hans-muller@gmail.com'
  }
})
@Injectable({providedIn: 'root'})
export class DemoState {
  @Selector()
  static getEmail(state: CustomerDataModel) {
    return state.email;
  }

  @Action(SetCustomerEmail)
  setCustomerEmail(ctx: StateContext<CustomerDataModel>, {payload}: SetCustomerEmail): Observable<string> {
    return of(ctx.patchState({email: payload}).email);
  }
}
