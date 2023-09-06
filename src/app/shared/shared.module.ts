import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from '../shared/components/like-hate/like-hate.component';
import { ColleagueComponent } from '../shared/components/colleague/colleague.component';
import { ColleagueListComponent } from '../shared/components/colleague-list/colleague-list.component';
import { ScorePipe } from '../shared/pipes/score.pipe';
import { VotingHistoryComponent } from './components/voting-history/voting-history.component';


@NgModule({
  declarations: [
    ColleagueComponent,
    LikeHateComponent,
    ColleagueListComponent,
    ScorePipe,
    VotingHistoryComponent,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [ColleagueComponent, LikeHateComponent, ColleagueListComponent, ScorePipe, VotingHistoryComponent]

})
export class SharedModule { }
