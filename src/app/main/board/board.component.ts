import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BoardService } from './board.service';

export interface BoardCard {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
}

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  cards: BoardCard[] = [];

  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
    this.cards = this.boardService.getCards();
  }
}
