import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerDataModel} from './customer-data.model';

@Injectable({providedIn: 'root'})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  getInvoice(): Observable<CustomerDataModel> {
    return this.httpClient.get<CustomerDataModel>('api/invoice');
  }
}
