import { Component, Input, Output,  EventEmitter } from '@angular/core';
import { Colleague } from '../../../models/colleague';
  


@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {
  @Input() colleagues: Colleague[] = [];

}
