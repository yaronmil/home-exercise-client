import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
  ],
  template: `
    <mat-sidenav-container class="layout">
      <mat-sidenav #drawer class="side" [mode]="'side'" [opened]="true">
        <mat-toolbar color="primary" class="side-header">Menu</mat-toolbar>
        <mat-nav-list>
          <a mat-list-item routerLink="item1" routerLinkActive="active"
            >Item1</a
          >
          <a mat-list-item routerLink="item2" routerLinkActive="active"
            >Item2</a
          >
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content style="overflow: hidden;">
        <mat-toolbar color="primary" class="top-bar">
          <span class="title">my-app</span>
        </mat-toolbar>
        <div class="content">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      .layout {
        height: 100vh;
      }
      .side {
        width: 220px;
      }
      .top-bar .title {
        font-weight: 600;
        margin-left: 8px;
      }
      .content {
        overflow: auto;
        height: calc(100% - 64px);
      }
      a.active {
        background: rgba(0, 0, 0, 0.1);
      }
      .menu-btn {
        margin-right: 4px;
      }
      @media (max-width: 800px) {
        mat-sidenav {
          width: 200px;
        }
      }
    `,
  ],
})
export class MainComponent {
  constructor(private breakpointObserver: BreakpointObserver) {}
}
