import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { User, UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-selector',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './user-selector.component.html',
  styleUrls: ['./user-selector.component.scss'],
})
export class UserSelectorComponent implements OnInit {
  users: User[] = [];
  selectedUser!: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.selectedUser = this.userService.getCurrentLoggedInUser();
  }

  onUserChange(user: User): void {
    this.userService.setCurrentLoggedInUser(user);
  }
}
