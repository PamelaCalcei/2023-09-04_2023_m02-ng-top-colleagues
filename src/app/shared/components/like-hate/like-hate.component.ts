import { Component, EventEmitter, Output, Input } from '@angular/core';
import { LikeHate } from '../../../models/like-hate';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'app-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']

})
export class LikeHateComponent {
  constructor(private voteService: VoteService) { }
  @Output() likeHateClicked = new EventEmitter<LikeHate>();
  @Input() disabledLike!: boolean;
  @Input() disabledHate!: boolean;



  likeClicked() {
    if (!this.disabledLike) {
      this.likeHateClicked.emit(LikeHate.LIKE);
      this.voteService.sendVote(LikeHate.LIKE);

    }
  }

  hateClicked() {
    if (!this.disabledHate) {
      this.likeHateClicked.emit(LikeHate.HATE);
      this.voteService.sendVote(LikeHate.HATE);

    }
  }

}