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

  constructor(private colleagueService: ColleagueService) { }

  ngOnInit(): void {
    this.colleagueService.getColleagues().subscribe((colleaguesArray) =>{
      this.colleaguesArray = colleaguesArray;
    });
    this.colleagueService.actionObs.subscribe((updatedColleague)=>{
      this.colleaguesArray.unshift(updatedColleague)
    })

  }
}