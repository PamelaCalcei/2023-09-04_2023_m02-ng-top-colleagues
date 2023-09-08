import { Component } from '@angular/core';
import { Colleague } from '../../../models/colleague';
import { ColleagueService } from '../../../providers/colleague.service';

  


@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {
  colleaguesArray: Colleague[] = []; // Déclarez la variable comme un tableau de Colleague

  constructor(private colleagueService: ColleagueService) { }

  ngOnInit(): void {
    // Dans ngOnInit, vous pouvez vous abonner à l'Observable pour obtenir les données
    this.colleagueService.list().subscribe(
      (data: Colleague[]) => {
        this.colleaguesArray = data; // Mettez à jour la variable avec les données reçues
      },
      (error) => {
        console.error('Une erreur s\'est produite :', error);
      }
    );
  }
}