import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from '../shared/components/like-hate/like-hate.component';
import { ColleagueComponent } from '../shared/components/colleague/colleague.component';
import { ColleagueListComponent } from '../shared/components/colleague-list/colleague-list.component';
import { ScorePipe } from '../shared/pipes/score.pipe';



@NgModule({
  declarations: [
    ColleagueComponent,
    LikeHateComponent,
    ColleagueListComponent,
    ScorePipe,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [ColleagueComponent, LikeHateComponent, ColleagueListComponent, ScorePipe]

})
export class SharedModule { }
