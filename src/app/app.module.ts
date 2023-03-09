import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialsModule} from './common/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainPageComponent} from './main-page/main-page.component';
import {InvoiceComponent} from './main-page/invoice/invoice.component';
import {CustomerDataComponent} from './main-page/invoice/invoice-header/customer-data/customer-data.component';
import {InvoiceHeaderComponent} from './main-page/invoice/invoice-header/invoice-header.component';
import {
  CustomerContactInfoComponent,
} from './main-page/invoice/invoice-header/customer-data/customer-contact-info/customer-contact-info.component';
import {
  CustomerPurchaseSummeryComponent,
} from './main-page/invoice/invoice-body/customer-purchase-summery/customer-purchase-summery.component';
import {InvoiceBodyComponent} from './main-page/invoice/invoice-body/invoice-body.component';
import {
  InvoiceBodyCustomerDataComponent,
} from './main-page/invoice/invoice-body/customer-purchase-summery/invoice-body-customer-data/invoice-body-customer-data.component';
import {
  InvoiceBodyPurchaseListComponent,
} from './main-page/invoice/invoice-body/invoice-body-purchase-list/invoice-body-purchase-list.component';
import {FormsModule} from '@angular/forms';
import {NgxsModule} from '@ngxs/store';
import {DemoState} from './state-management/demo-state';
import {environment} from '../environment';
import {HttpClientModule} from '@angular/common/http';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxsStoragePluginModule, StorageOption} from '@ngxs/storage-plugin';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    InvoiceComponent,
    CustomerDataComponent,
    InvoiceHeaderComponent,
    CustomerContactInfoComponent,
    CustomerPurchaseSummeryComponent,
    InvoiceBodyComponent,
    InvoiceBodyCustomerDataComponent,
    InvoiceBodyPurchaseListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialsModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([DemoState], {developmentMode: !environment.production}),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      key: 'demoState',
      storage: StorageOption.LocalStorage
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
