import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Colleague } from '../../../models/colleague';


@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})

export class ColleagueComponent {
  @Input() colleague!: Colleague;
  @Output() liked = new EventEmitter<void>();
  @Output() disliked = new EventEmitter<void>();

}

