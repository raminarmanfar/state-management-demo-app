import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPurchaseSummeryComponent } from './customer-purchase-summery.component';

describe('CustomerPurchaseSummeryComponent', () => {
  let component: CustomerPurchaseSummeryComponent;
  let fixture: ComponentFixture<CustomerPurchaseSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPurchaseSummeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPurchaseSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
