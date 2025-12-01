import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/board', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./main-layout/main-layout.routes').then((m) => m.mainRoutes),
  },
];
