import { Component, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import { VoteService } from 'src/app/providers/vote.service';
import { LikeHate } from 'src/app/models/like-hate';
@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnDestroy{
  counterLike: number = 0;
  counterHate: number = 0;
  actionSub: Subscription;

  constructor(private voteService: VoteService) {
    this.actionSub = this.voteService.getVoteObservable().subscribe(
      (data: LikeHate) => {
        if (data === LikeHate.LIKE) {
          this.counterLike++;  

        } else if (data === LikeHate.HATE) {
          this.counterHate++;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.actionSub.unsubscribe();
  }
}