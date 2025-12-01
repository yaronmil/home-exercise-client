import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BoardService } from './board.service';
import { EditCardDialogComponent } from './edit-card-dialog/edit-card-dialog.component';
import { UserService } from '../../../services/user.service';
import { LocationSearchComponent } from './location-search/location-search.component';

export type PostType = 'rent' | 'buy & sell' | 'events' | 'travel';

export interface Post {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
  ownerId: number;
  type?: PostType;
  location?: {
    lat: number;
    lng: number;
    name: string;
  };
}

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
    LocationSearchComponent,
  ],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  posts: Post[] = [];
  displayedPosts: Post[] = [];
  currentUserId: number = 1;
  selectedType: PostType | 'all' = 'all';
  postTypes: PostType[] = ['rent', 'buy & sell', 'events', 'travel'];
  private selectedLocation?: {
    lat: number;
    lng: number;
    name: string;
    address?: { country?: string; city?: string; street?: string };
  };

  constructor(
    private boardService: BoardService,
    private dialog: MatDialog,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.posts = this.boardService.getPosts();
    this.displayedPosts = this.posts;
    this.currentUserId = this.userService.getSelectedUser().userId;

    this.userService.selectedUser$.subscribe((user) => {
      this.currentUserId = user.userId;
    });
  }

  isOwner(post: Post): boolean {
    return post.ownerId === this.currentUserId;
  }

  onLocationSelected(loc: {
    lat: number;
    lng: number;
    name: string;
    address?: {
      country?: string;
      city?: string;
      street?: string;
    };
  }): void {
    this.selectedLocation = loc;
    this.applyFilters();
  }

  onTypeChange(): void {
    this.applyFilters();
  }

  private applyFilters(): void {
    let filtered = this.posts;

    // Filter by location
    if (
      this.selectedLocation &&
      !Number.isNaN(this.selectedLocation.lat) &&
      !Number.isNaN(this.selectedLocation.lng) &&
      this.selectedLocation.address
    ) {
      filtered = filtered.filter((p) => {
        if (!p.location) return false;

        const postAddress = this.parsePostLocation(p.location.name);

        // If street is selected, match by street and city
        if (this.selectedLocation!.address!.street) {
          return (
            this.matchString(
              postAddress.street,
              this.selectedLocation!.address!.street
            ) &&
            this.matchString(
              postAddress.city,
              this.selectedLocation!.address!.city
            )
          );
        }

        // If city is selected, match by city and country
        if (this.selectedLocation!.address!.city) {
          return (
            this.matchString(
              postAddress.city,
              this.selectedLocation!.address!.city
            ) &&
            this.matchString(
              postAddress.country,
              this.selectedLocation!.address!.country
            )
          );
        }

        // If only country is selected, match by country
        if (this.selectedLocation!.address!.country) {
          return this.matchString(
            postAddress.country,
            this.selectedLocation!.address!.country
          );
        }

        return false;
      });
    }

    // Filter by type
    if (this.selectedType !== 'all') {
      filtered = filtered.filter((p) => p.type === this.selectedType);
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

  onEdit(card: Post): void {
    const dialogRef = this.dialog.open(EditCardDialogComponent, {
      width: '500px',
      data: { card },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Update the card with the edited values
        const index = this.posts.findIndex((p) => p.id === card.id);
        if (index !== -1) {
          this.posts[index] = result;
        }
      }
    });
  }

  onDelete(card: Post): void {
    console.log('Delete card:', card);
    // TODO: Implement delete functionality
  }
}
