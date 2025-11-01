import { Routes } from '@angular/router';
import { authRoutes } from './@auth/auth.routes';
import { mainRoutes } from './@main/main.routes';

export const routes: Routes = [
  ...mainRoutes,
  ...authRoutes,
  {
    path: '**',
    redirectTo: '',
  },
];
