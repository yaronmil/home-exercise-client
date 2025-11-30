import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    loadChildren: () =>
      import('./main/main-layout.routes').then((m) => m.mainRoutes),
  },
];
