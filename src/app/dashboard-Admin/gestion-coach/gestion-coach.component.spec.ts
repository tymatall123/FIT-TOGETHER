import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCoachComponent } from './gestion-coach.component';

describe('GestionCoachComponent', () => {
  let component: GestionCoachComponent;
  let fixture: ComponentFixture<GestionCoachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionCoachComponent]
    });
    fixture = TestBed.createComponent(GestionCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
