import { Component } from '@angular/core';
import { Vote } from '../../../models/vote';
import { VoteService } from '../../../providers/vote.service';
import { LikeHate } from 'src/app/models/like-hate';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {
  votes: Vote[] = [];

  constructor(private voteService: VoteService) {}

  ngOnInit() {
    this.loadVotes();
  }

  loadVotes() {
    this.voteService.getVotes().subscribe((votes) => {
      this.votes = votes;
    });
  }

  deleteVote(voteId: number) {
  }

 
  
}