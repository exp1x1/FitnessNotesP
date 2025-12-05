import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authUserSuccessRedirectGuard } from './auth-user-success-redirect-guard';

describe('authUserSuccessRedirectGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authUserSuccessRedirectGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
