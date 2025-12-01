import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserSelectorComponent } from './user-selector/user-selector.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, UserSelectorComponent],

  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {}
