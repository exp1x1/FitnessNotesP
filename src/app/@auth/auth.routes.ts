import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { PasswordReset } from './components/password-reset/password-reset';
import { ForgotPassword } from './components/forgot-password/forgot-password';
import { authUserSuccessRedirectGuard } from './guards/auth-user-success-redirect-guard';

export const authRoutes: Routes = [
  {
    path: 'auth',
    canActivate: [authUserSuccessRedirectGuard],
    children: [
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: Login,
      },
      {
        path: 'register',
        component: Register,
      },
      {
        path: 'f-password',
        component: ForgotPassword,
      },
      {
        path: 'password-reset',
        component: PasswordReset,
      },
    ],
  },
];
