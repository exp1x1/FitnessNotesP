import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthFlow } from '../service/auth-flow';

export const authUserSuccessRedirectGuard: CanActivateFn = (route, state) => {
  const authFlow = inject(AuthFlow);

  if (authFlow.$user()) {
    return false;
  }

  return true;
};
