import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Colleague } from '../../../models/colleague';
import { LikeHate } from '../../../models/like-hate';
import { VoteService } from 'src/app/providers/vote.service';


@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})

export class ColleagueComponent {
  constructor(private voteService: VoteService) { }
  @Input() colleague!: Colleague;

  handleLikeHateClick(likeHate: LikeHate) {
    if (likeHate === LikeHate.LIKE) {
      this.colleague.score++;

    } else if (likeHate === LikeHate.HATE) {
      this.colleague.score--;
    }
  }

  addVote(vote:LikeHate){
    console.log(' vote:', vote);
    if(this.colleague){
      const newVote = {
        colleague: this.colleague,
        vote: vote
      }
      this.voteService.sendVote(newVote);
    }
  }

}



