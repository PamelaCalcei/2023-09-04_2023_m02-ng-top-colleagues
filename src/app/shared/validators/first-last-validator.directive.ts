import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[tcFirstLastValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: FirstLastValidatorDirective, multi: true }]

})
export class FirstLastValidatorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if(control.value.nom == control.value.prenom){
      return {firstLast: 'Le nom et prénom doivent être différents.'};
    }
    return null;
  }
}
