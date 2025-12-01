import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BoardService } from './board.service';
import { EditPostDialogComponent } from './edit-post-dialog/edit-post-dialog.component';
import { UserService } from '../../services/user.service';
import { PostSearchComponent } from './post-search/post-search.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostModel, PostType } from './models/post.model';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    PostSearchComponent,
    CreatePostComponent,
  ],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  dataSource: PostModel[] = [];
  displayedPosts: PostModel[] = [];
  currentUserId: number = 1;
  private selectedLocation?: {
    country?: string;
    city?: string;
    street?: string;
  };
  private selectedType: PostType | 'all' = 'all';

  constructor(
    private boardService: BoardService,
    private dialog: MatDialog,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.boardService.getPosts().subscribe((posts) => {
      this.dataSource = posts;
      this.displayedPosts = posts;
    });
    this.currentUserId = this.userService.getCurrentLoggedInUser().userId;

    this.userService.currentLoggedInUser$.subscribe((user) => {
      this.currentUserId = user.userId;
    });
  }

  isOwner(post: PostModel): boolean {
    return post.ownerId === this.currentUserId;
  }

  onLocationSelected(address: {
    country?: string;
    city?: string;
    street?: string;
  }): void {
    this.selectedLocation = address;
    this.applyFilters();
  }

  onTypeChange(type: PostType): void {
    this.selectedType = type;
    this.applyFilters();
  }
  addNewPost($event: PostModel) {
    this.boardService.createPost($event).subscribe({
      next: (createdPost) => {
        this.dataSource.push(createdPost);
        this.applyFilters();
      },
      error: (error) => {
        console.error('Error creating post:', error);
      },
    });
  }

  private applyFilters(): void {
    let filtered = this.dataSource;

    // Filter by location
    if (
      this.selectedLocation &&
      (this.selectedLocation.country ||
        this.selectedLocation.city ||
        this.selectedLocation.street)
    ) {
      filtered = filtered.filter((p) => {
        if (!p.location) return false;

        const postAddress = this.parsePostLocation(p.location);

        // If street is selected, match by street and city
        if (this.selectedLocation!.street) {
          return (
            this.matchString(
              postAddress.street,
              this.selectedLocation!.street
            ) && this.matchString(postAddress.city, this.selectedLocation!.city)
          );
        }

        // If city is selected, match by city and country
        if (this.selectedLocation!.city) {
          return (
            this.matchString(postAddress.city, this.selectedLocation!.city) &&
            this.matchString(
              postAddress.country,
              this.selectedLocation!.country
            )
          );
        }

        // If only country is selected, match by country
        if (this.selectedLocation!.country) {
          return this.matchString(
            postAddress.country,
            this.selectedLocation!.country
          );
        }

        return false;
      });
    }

    // Filter by type
    if (this.selectedType !== 'all') {
      filtered = filtered.filter((p) => p.postType === this.selectedType);
    }

    this.displayedPosts = filtered;
  }

  private parsePostLocation(locationName: string): {
    street: string;
    city: string;
    country: string;
  } {
    const parts = locationName.split(',').map((p) => p.trim());
    return {
      street: parts[0] || '',
      city: parts.length > 1 ? parts[parts.length - 2] : '',
      country: parts.length > 0 ? parts[parts.length - 1] : '',
    };
  }

  private matchString(
    str1: string | undefined,
    str2: string | undefined
  ): boolean {
    if (!str1 || !str2) return false;
    return str1.toLowerCase() === str2.toLowerCase();
  }

  encodeUri(value: string): string {
    return encodeURIComponent(value);
  }

  onEdit(card: PostModel): void {
    const dialogRef = this.dialog.open(EditPostDialogComponent, {
      width: '500px',
      data: { card },
    });

    dialogRef.afterClosed().subscribe((result) => {
      //if didnt clicked save
      if (result) {
        this.boardService.updatePost(result).subscribe({
          next: () => {
            Object.assign(card, result);
            this.applyFilters();
          },
          error: (error) => {
            console.error('Error updating post:', error);
          },
        });
      }
    });
  }

  onDelete(card: PostModel): void {
    if (confirm(`Are you sure you want to delete "${card.title}"?`)) {
      this.boardService.deletePost(card.id as number).subscribe({
        next: () => {
          this.dataSource = this.dataSource.filter((p) => p.id !== card.id);
          this.applyFilters();
        },
        error: (error) => {
          console.error('Error deleting post:', error);
        },
      });
    }
  }
}
