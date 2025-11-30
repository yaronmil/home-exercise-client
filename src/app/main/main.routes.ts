import { Routes } from '@angular/router';

export const mainRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./main.component').then((m) => m.MainComponent),
    children: [
      { path: '', redirectTo: 'item1', pathMatch: 'full' },
      {
        path: 'item1',
        loadComponent: () =>
          import('./item1/item1.component').then((m) => m.Item1Component),
      },
      {
        path: 'item2',
        loadComponent: () =>
          import('./item2.component').then((m) => m.Item2Component),
      },
      {
        path: 'board',
        loadComponent: () =>
          import('./board/board.component').then((m) => m.BoardComponent),
      },
    ],
  },
];
