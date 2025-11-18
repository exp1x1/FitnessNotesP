import { Routes } from '@angular/router';
import { Login } from './component/login/login';
import { Register } from './component/register/register';
import { PasswordReset } from './component/password-reset/password-reset';
import { ForgotPassword } from './component/forgot-password/forgot-password';

export const authRoutes: Routes = [
  {
    path: 'auth',
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
