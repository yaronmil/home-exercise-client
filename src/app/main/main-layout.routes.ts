import { Routes } from '@angular/router';

export const mainRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./main-layout/main-layout.component').then(
        (m) => m.MainLayoutComponent
      ),
    children: [
      { path: '', redirectTo: 'item1', pathMatch: 'full' },
      {
        path: 'item1',
        loadComponent: () =>
          import('./item1/item1.component').then((m) => m.Item1Component),
      },

      {
        path: 'board',
        loadComponent: () =>
          import('./main-layout/board/board.component').then(
            (m) => m.BoardComponent
          ),
      },
    ],
  },
];
