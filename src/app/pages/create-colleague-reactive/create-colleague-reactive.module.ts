import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateColleagueReactivePages } from './create-colleague-reactive.pages';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CreateColleagueReactivePages
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CreateColleagueReactivePages]
})
export class CreateColleagueReactiveModule { }
