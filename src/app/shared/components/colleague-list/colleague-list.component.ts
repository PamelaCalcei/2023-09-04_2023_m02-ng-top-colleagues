import { Component } from '@angular/core';
import { Colleague } from '../../../models/colleague';
import { ColleagueService } from '../../../providers/colleague.service';

  


@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {
  colleaguesArray: Colleague[] = [];
  constructor(private colleagueService: ColleagueService) {}

  ngOnInit() {
    this.colleaguesArray = this.colleagueService.list();
  }
}
