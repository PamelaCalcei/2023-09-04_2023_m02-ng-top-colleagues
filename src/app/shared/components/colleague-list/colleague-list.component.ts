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
    this.colleagueService.list().subscribe(
      (data: Colleague[]) => {
        this.colleaguesArray = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite :', error);
      }
    );
  }
}