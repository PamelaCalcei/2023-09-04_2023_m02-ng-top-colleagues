import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Colleague } from '../../../models/colleague';
import { LikeHate } from '../../../models/like-hate'; 



@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})

export class ColleagueComponent {
  @Input() colleague!: Colleague;
  handleLikeHateClick(likeHate: LikeHate) {
    if (likeHate === LikeHate.LIKE) {
      this.colleague.score++;
    } else if (likeHate === LikeHate.HATE) {
      this.colleague.score--;
    }
  }
}



