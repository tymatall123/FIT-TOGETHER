import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAcceuilComponent } from './admin-acceuil.component';

describe('AdminAcceuilComponent', () => {
  let component: AdminAcceuilComponent;
  let fixture: ComponentFixture<AdminAcceuilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAcceuilComponent]
    });
    fixture = TestBed.createComponent(AdminAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
