import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { gardeAdminGuard } from './garde-admin.guard';

describe('gardeAdminGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gardeAdminGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
