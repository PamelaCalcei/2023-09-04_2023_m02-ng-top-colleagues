import { Component } from '@angular/core';
import { Colleague } from './models/colleague';
import { LikeHate } from './models/like-hate'; 



@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-colleagues';
  colleaguesArray: Colleague[] = [
    {
      pseudo: 'John Doe',
      score: -999,
      photo: 'https://example.com/johndoe.jpg'
    },
    {
      pseudo: 'John Doe',
      score: -999,
      photo: 'https://example.com/johndoe.jpg'
    },
    // Ajoutez d'autres collègues ici
  ];
}

