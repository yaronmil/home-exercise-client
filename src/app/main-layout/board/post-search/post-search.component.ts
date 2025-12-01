import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PostType, POST_TYPES } from '../models/post.model';
import { LocationSearchComponent } from './location-search/location-search.component';

@Component({
  selector: 'app-post-search',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    LocationSearchComponent,
  ],
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.scss'],
})
export class PostSearchComponent {
  @Output() locationSelected = new EventEmitter<{
    country?: string;
    city?: string;
    street?: string;
  }>();
  @Output() typeChanged = new EventEmitter<PostType>();

  selectedType: PostType | 'all' = 'all';
  postTypes = POST_TYPES;

  onLocationSelected(address: {
    country?: string;
    city?: string;
    street?: string;
  }): void {
    this.locationSelected.emit(address);
  }

  onTypeChange(selectedType: PostType): void {
    this.typeChanged.emit(selectedType);
  }
}
