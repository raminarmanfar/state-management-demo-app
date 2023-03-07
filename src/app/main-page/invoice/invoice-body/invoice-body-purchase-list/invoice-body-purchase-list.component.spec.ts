import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceBodyPurchaseListComponent } from './invoice-body-purchase-list.component';

describe('InvoiceBodyPurchaseListComponent', () => {
  let component: InvoiceBodyPurchaseListComponent;
  let fixture: ComponentFixture<InvoiceBodyPurchaseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceBodyPurchaseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceBodyPurchaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
