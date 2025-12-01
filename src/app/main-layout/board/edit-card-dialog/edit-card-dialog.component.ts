import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { Post, PostType } from '../board.component';
import { LocationSearchComponent } from '../post-search/location-search/location-search.component';

@Component({
  selector: 'app-edit-card-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    LocationSearchComponent,
  ],
  templateUrl: './edit-card-dialog.component.html',
  styleUrls: ['./edit-card-dialog.component.scss'],
})
export class EditCardDialogComponent implements OnInit {
  editForm: FormGroup;
  selectedLocation?: string;
  postTypes: PostType[] = ['Rent', 'Buy & Sell', 'Events', 'Travel'];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditCardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { card: Post }
  ) {
    this.selectedLocation = data.card.location;
    this.editForm = this.fb.group({
      id: [data.card.id],
      title: [data.card.title, Validators.required],
      subtitle: [data.card.subtitle, Validators.required],
      content: [data.card.content],
      imageUrl: [data.card.imageUrl],
      ownerId: [data.card.ownerId],
      postType: [data.card.postType],
      location: [data.card.location],
    });
  }

  ngOnInit(): void {}

  onLocationSelected(address: {
    country?: string;
    city?: string;
    street?: string;
  }): void {
    if (!address || Object.keys(address).length === 0) {
      // Clear location
      this.selectedLocation = undefined;
      this.editForm.patchValue({ location: undefined });
    } else {
      // Build location string from address components
      const parts = [];
      if (address.street) parts.push(address.street);
      if (address.city) parts.push(address.city);
      if (address.country) parts.push(address.country);
      this.selectedLocation = parts.join(', ');
      this.editForm.patchValue({ location: this.selectedLocation });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.editForm.valid) {
      this.dialogRef.close(this.editForm.value);
    } else {
      this.editForm.markAllAsTouched();
    }
  }
}
