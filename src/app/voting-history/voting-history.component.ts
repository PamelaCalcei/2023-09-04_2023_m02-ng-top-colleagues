import { Component } from '@angular/core';
import { Vote } from '../models/vote';
import { Colleague } from '../models/colleague';
import { LikeHate } from '../models/like-hate';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {
  votes: Vote[] = [
    {
      id: 1,
      colleague: {
        pseudo: 'John Doe',
        score: -999,
        photo: 'https://example.com/johndoe.jpg'
      },
      vote: LikeHate.LIKE,
      scoreAfterVote: -998 
    },
    {
      id: 2,
      colleague: {
        pseudo: 'Jane Smith',
        score: 800,
        photo: 'https://example.com/johndoe.jpg'
      },
      vote: LikeHate.HATE,
      scoreAfterVote: 799
    },
  ];

  deleteVote(voteId: number) {
    this.votes = this.votes.filter(vote => vote.id !== voteId);
  }
  
}
