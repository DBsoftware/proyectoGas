import {Component, Input, OnChanges } from '@angular/core';
import {ValidationErrors} from '@angular/forms';
import {RegularExpressions} from '../../class/regular-expressions';

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss']
})
export class FormErrorsComponent implements OnChanges {
  @Input() errors: ValidationErrors;
  @Input() errorPrefix: string;
  passwordPattern = RegularExpressions.PASSWORD_REGEX_PATTERN;
  numberPattern = RegularExpressions.NUMBER_REGEX;
  emailPattern = RegularExpressions.EMAIL_REGEX;
  alphaNumeric = RegularExpressions.ALPHA_NUMERIC_REGEX;
  alfaNumericWithPuntuaction = RegularExpressions.ALPHA_NUMERIC_REGEX_AND_PUNTUACTION;
  alphabeticPattern = RegularExpressions.ALPHABETIC_SPANISH_REGEX;

  constructor() {

  }

  ngOnChanges() {
  }

  /**
   * Hace una busqueda para encontrar si el string enviado por los forms de Angular
   * es igual a la expresion regular vigente en la clase RegularExpressions
   * @param formError regex enviado por angular
   * @param regex regex de RegularExpressions
   */
  compareRegex(formError: string, regex: string) {
    if (!formError) {
      return;
    }
    return formError.includes(regex);
  }

}
