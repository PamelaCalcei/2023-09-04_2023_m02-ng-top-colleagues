import { Colleague } from './../../models/colleague';
import { ColleagueService } from './../../providers/colleague.service';
import { Observable, of, map } from 'rxjs';
import { Directive } from '@angular/core';
import { AsyncValidator, NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[tcPseudoValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: PseudoValidatorDirective, multi: true}]
})
export class PseudoValidatorDirective implements AsyncValidator{

  constructor(private colleagueService: ColleagueService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.colleagueService.getColleagueByPseudo(control.value).pipe(
      map((colleague: Colleague | null) => {
        if(colleague != null) {
          return {pseudoMessage: "Ce pseudo est déjà utilisé."};
        }
        return of(null);
      })
    )
  }

}