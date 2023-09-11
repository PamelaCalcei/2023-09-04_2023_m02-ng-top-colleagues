import { Component, EventEmitter, Output, Input } from '@angular/core';
import { LikeHate } from '../../../models/like-hate';

@Component({
  selector: 'app-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']

})
export class LikeHateComponent {
  @Output() likeHateClicked = new EventEmitter<LikeHate>();
  @Output() addvote: EventEmitter<LikeHate> = new EventEmitter<LikeHate>(); 
  @Input() disabledLike!: boolean;
  @Input() disabledHate!: boolean;



  likeClicked() {
    if (!this.disabledLike) {
      this.likeHateClicked.emit(LikeHate.LIKE);
      this.addvote.emit(LikeHate.LIKE);
      console.log('Hate clicked and emitted');

    }
  }

  hateClicked() {
    if (!this.disabledHate) {
      this.likeHateClicked.emit(LikeHate.HATE);
      this.addvote.emit(LikeHate.HATE);
    }
  }

}