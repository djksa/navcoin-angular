import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CFundProposalsComponent } from './cfund-proposals.component';

describe('CFundPaymentRequestListComponent', () => {
  let component: CFundProposalsComponent;
  let fixture: ComponentFixture<CFundProposalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CFundProposalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CFundProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
