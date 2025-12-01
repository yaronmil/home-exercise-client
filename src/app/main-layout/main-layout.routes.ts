import { Routes } from '@angular/router';

export const mainRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./main-layout.component').then((m) => m.MainLayoutComponent),
    children: [
      {
        path: 'board',
        loadComponent: () =>
          import('./board/board.component').then((m) => m.BoardComponent),
      },
    ],
  },
];
