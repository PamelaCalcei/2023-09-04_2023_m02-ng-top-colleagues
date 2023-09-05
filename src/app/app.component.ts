import { Component } from '@angular/core';
import { Colleague } from './models/colleague';


@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-colleagues';
  fakeColleague: Colleague = {
    pseudo: 'John Doe',
    score: 42,
    photo: 'https://example.com/johndoe.jpg'
  };

  onLiked() {
    // Logique pour gérer l'événement "J'aime"
    // Par exemple, mettre à jour le score du collègue
  }

  onDisliked() {
    // Logique pour gérer l'événement "Je déteste"
    // Par exemple, mettre à jour le score du collègue
  }
}
