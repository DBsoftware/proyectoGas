import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export class FormValidators {
  static checkEquivalent(control: string, control2: string)  {
    return (group: FormGroup) => {
      const controlInput = group.controls[control], controlConfirmationInput = group.controls[control2];

      if (controlInput.value !== controlConfirmationInput.value ) {
        controlConfirmationInput.setErrors({notEquivalent: true});
      } else {
        controlConfirmationInput.setErrors(null);
      }

    };
  }

  static requireMatch(control: FormControl): ValidationErrors | null {
    const selection: any = control.value;
    if (typeof selection === 'string') {
      return { requireMatch: true };
    }
    return null;
  }

  /**
   * Evalua que todos los controls, enviados por este validator cumplan con una funcion del
   *  Validators enviado por parametro, si cumple se envia un error personalizado.
   * @param validator validator enviando para cumplir con la condición
   */
  static atLeastOne = (validator: ValidatorFn) => (group: FormGroup): ValidationErrors | null => {
    const hasAtLeastOne = group && group.controls && Object.keys(group.controls)
      .some(v => { // some recorre todos las keys de un objecto y evalua una condicion segun las keys
        return !validator(group.controls[v]); // si se cumple un Validators de todos controls retorna false, de lo contrario retorna true
      } );

    return hasAtLeastOne ? null : {
      atLeastOne: true,
    };
  }


}

export const hasRequiredField = (abstractControl: AbstractControl): boolean => {
  if (abstractControl.validator) {
    const validator = abstractControl.validator({} as AbstractControl);
    if (validator && validator.required) {
      return true;
    }
  }
  if (abstractControl['controls']) {
    for (const controlName in abstractControl['controls']) {
      if (abstractControl['controls'][controlName]) {
        if (hasRequiredField(abstractControl['controls'][controlName])) {
          return true;
        }
      }
    }
  }
  return false;
};
