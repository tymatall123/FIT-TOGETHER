import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPostComponent } from './gestion-post.component';

describe('GestionPostComponent', () => {
  let component: GestionPostComponent;
  let fixture: ComponentFixture<GestionPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionPostComponent]
    });
    fixture = TestBed.createComponent(GestionPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
