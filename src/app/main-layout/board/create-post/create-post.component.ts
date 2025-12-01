import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UserService } from '../../../services/user.service';
import { PostModel } from '../models/post.model';
import { EditPostDialogComponent } from '../edit-post-dialog/edit-post-dialog.component';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {
  @Output() newPostCreated = new EventEmitter<PostModel>();

  constructor(private dialog: MatDialog, private userService: UserService) {}

  onCreatePost(): void {
    const currentUser = this.userService.getCurrentLoggedInUser();
    const newPost: PostModel = {
      title: '',
      subtitle: '',
      content: '',
      imageUrl: '',
      ownerId: currentUser.userId,
    };

    const dialogRef = this.dialog.open(EditPostDialogComponent, {
      width: '500px',
      data: { card: newPost },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.newPostCreated.emit(result);
      }
    });
  }
}
