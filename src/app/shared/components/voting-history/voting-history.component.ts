import { Component } from '@angular/core';
import { Vote } from '../../../models/vote';
import { VoteService } from '../../../providers/vote.service';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {
  votes: Vote[] = [
];

constructor(private voteService: VoteService) {}

  ngOnInit() {
    this.votes = this.voteService.list();
  }
  deleteVote(voteId: number) {
    this.votes = this.votes.filter(vote => vote.id !== voteId);
  }
  
}
