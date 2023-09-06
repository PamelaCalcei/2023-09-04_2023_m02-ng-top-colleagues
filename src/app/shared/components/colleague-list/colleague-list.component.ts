import { Component, Input, Output,  EventEmitter } from '@angular/core';
import { Colleague } from '../../../models/colleague';
  


@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {
  colleaguesArray: Colleague[] = [
    {
      pseudo: 'John Doe',
      score: -999,
      photo: 'https://example.com/johndoe.jpg',
    },
    {
      pseudo: 'Jane Smith',
      score: 800,
      photo: 'https://example.com/janesmith.jpg',
    },
    {
      pseudo: 'Bob Johnson',
      score: 1200,
      photo: 'https://example.com/bobjohnson.jpg',
    },
  ];
}
