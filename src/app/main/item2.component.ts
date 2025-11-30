import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item2',
  standalone: true,
  imports: [CommonModule],
  template: `<h3>Item 2 Content</h3>
    <p>This is Item 2 area.</p>`,
})
export class Item2Component {}
