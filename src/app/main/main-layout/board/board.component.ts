import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BoardService } from './board.service';
import { EditCardDialogComponent } from './edit-card-dialog/edit-card-dialog.component';
import { UserService } from '../../../services/user.service';
import { LocationSearchComponent } from './location-search/location-search.component';

export interface Post {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
  ownerId: number;
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

  onLocationSelected(loc: { lat: number; lng: number; name: string }): void {
    // If no coordinates (fallback), filter by name substring match
    if (Number.isNaN(loc.lat) || Number.isNaN(loc.lng)) {
      this.displayedPosts = this.posts.filter((p) =>
        (p.location?.name || '').toLowerCase().includes(loc.name.toLowerCase())
      );
      return;
    }
    this._lastSearchPoint = loc;
    this.applyGeoFilter();
  }

  onRadiusChanged(km: number): void {
    this._radiusKm = km;
    this.applyGeoFilter();
  }

  private _lastSearchPoint?: { lat: number; lng: number; name: string };
  private _radiusKm = 500;

  private applyGeoFilter(): void {
    if (!this._lastSearchPoint) {
      this.displayedPosts = this.posts;
      return;
    }
    const { lat, lng } = this._lastSearchPoint;
    this.displayedPosts = this.posts.filter((p) => {
      if (!p.location) return false;
      const d = this.haversineKm(lat, lng, p.location.lat, p.location.lng);
      return d <= this._radiusKm;
    });
  }

  private haversineKm(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number {
    const toRad = (x: number) => (x * Math.PI) / 180;
    const R = 6371; // Earth radius km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
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
