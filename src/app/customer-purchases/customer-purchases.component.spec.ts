import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPurchasesComponent } from './customer-purchases.component';

describe('CustomerPurchasesComponent', () => {
  let component: CustomerPurchasesComponent;
  let fixture: ComponentFixture<CustomerPurchasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPurchasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
