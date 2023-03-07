import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceBodyCustomerDataComponent } from './invoice-body-customer-data.component';

describe('InvoiceBodyCustomerDataComponent', () => {
  let component: InvoiceBodyCustomerDataComponent;
  let fixture: ComponentFixture<InvoiceBodyCustomerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceBodyCustomerDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceBodyCustomerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
