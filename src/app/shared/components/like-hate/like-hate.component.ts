import { Component, EventEmitter, Output } from '@angular/core';
import { LikeHate } from '../../../models/like-hate';


@Component({
  selector: 'app-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']

})
export class LikeHateComponent {
  @Output() likeHateClicked = new EventEmitter<LikeHate>();

  likeClicked() {
    this.likeHateClicked.emit(LikeHate.LIKE);
  }

  hateClicked() {
    this.likeHateClicked.emit(LikeHate.HATE);
  }

}