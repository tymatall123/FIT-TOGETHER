import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionVideoComponent } from './gestion-video.component';

describe('GestionVideoComponent', () => {
  let component: GestionVideoComponent;
  let fixture: ComponentFixture<GestionVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionVideoComponent]
    });
    fixture = TestBed.createComponent(GestionVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
