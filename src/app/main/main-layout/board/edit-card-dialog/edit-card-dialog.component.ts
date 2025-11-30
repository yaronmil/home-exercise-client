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
import { Post } from '../board.component';

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
  ],
  templateUrl: './edit-card-dialog.component.html',
  styleUrls: ['./edit-card-dialog.component.scss'],
})
export class EditCardDialogComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditCardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { card: Post }
  ) {
    this.editForm = this.fb.group({
      id: [data.card.id],
      title: [data.card.title, Validators.required],
      subtitle: [data.card.subtitle, Validators.required],
      content: [data.card.content],
      imageUrl: [data.card.imageUrl],
      author: [data.card.author],
      date: [data.card.date],
      ownerId: [data.card.ownerId],
    });
  }

  ngOnInit(): void {}

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
