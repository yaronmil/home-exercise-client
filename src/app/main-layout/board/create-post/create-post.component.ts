import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UserService } from '../../../services/user.service';
import { Post } from '../board.component';
import { EditCardDialogComponent } from '../edit-card-dialog/edit-card-dialog.component';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {
  constructor(private dialog: MatDialog, private userService: UserService) {}

  onCreatePost(): void {
    const currentUser = this.userService.getCurrentLoggedInUser();
    const newPost: Post = {
      title: '',
      subtitle: '',
      content: '',
      imageUrl: '',
      ownerId: currentUser.userId,
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
