import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ColleagueService } from 'src/app/providers/colleague.service';

class ModelFormCollegue{
  pseudo?:string;
  nom?:string;
  prenom?:string;
  urlphoto?:string;

  pseudoValid: boolean = false;
  nomValid: boolean = false;
  prenomValid: boolean = false;
  urlphotoValid: boolean = false;
}

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent {
  constructor(private colleagueService: ColleagueService, ) {

  }

  model = new ModelFormCollegue();

  submit(){
    if(this.model.pseudo && this.model.nom && this.model.prenom && this.model.urlphoto){
      console.log("données envoyées : " + this.model.pseudo,this.model.urlphoto, this.model.nom,  this.model.prenom)
      this.colleagueService.postColleague(
        {
          pseudo: this.model.pseudo,
          photo: this.model.urlphoto,
          score: 0
        },
        this.model.nom,
        this.model.prenom
      )
    }
    this.resetModel();

  }

  checkIfPseudoExists(pseudo:string|undefined){
    if(pseudo){
      if(this.colleagueService.getColleagueByPseudo(pseudo)){
        return true;
      }
    }
    return false;
  }

  urlIsValid(url:string|undefined){
    if(url){
      return url.includes("http://") || url.includes("https://");
    }
    return false;
  }

  resetModel(){
    this.model.pseudo = '';
    this.model.nom = '';
    this.model.prenom = '';
    this.model.urlphoto = '';
  }
}
