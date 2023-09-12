import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from '../shared/components/like-hate/like-hate.component';
import { ColleagueComponent } from '../shared/components/colleague/colleague.component';
import { ColleagueListComponent } from '../shared/components/colleague-list/colleague-list.component';
import { ScorePipe } from '../shared/pipes/score.pipe';
import { VotingHistoryComponent } from './components/voting-history/voting-history.component';
import { CounterComponent } from '../shared/components/counter/counter.component';
import { CreateColleagueFormsComponent } from './components/create-colleague-forms/create-colleague-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    ColleagueComponent,
    LikeHateComponent,
    ColleagueListComponent,
    ScorePipe,
    VotingHistoryComponent,
    CounterComponent,
    CreateColleagueFormsComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  exports: [ColleagueComponent, LikeHateComponent, ColleagueListComponent, ScorePipe, VotingHistoryComponent, CounterComponent, CreateColleagueFormsComponent]

})
export class SharedModule { }
