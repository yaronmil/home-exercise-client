import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditCardDialogComponent } from './board/edit-card-dialog/edit-card-dialog.component';
import { Post } from './board/board.component';
import { UserService, User } from '../../services/user.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  users: User[] = [];
  selectedUser!: User;

  constructor(private dialog: MatDialog, private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.selectedUser = this.userService.getSelectedUser();
  }

  onUserChange(user: User): void {
    this.userService.setSelectedUser(user);
  }

  onCreatePost(): void {
    const newPost: Post = {
      id: Date.now(),
      title: '',
      subtitle: '',
      content: '',
      imageUrl: '',
      author: '',
      date: new Date().toISOString().split('T')[0],
      ownerId: 1,
    };

    const dialogRef = this.dialog.open(EditCardDialogComponent, {
      width: '500px',
      data: { card: newPost },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('New post created:', result);
        // TODO: Add the new post to the board
      }
    });
  }
}
