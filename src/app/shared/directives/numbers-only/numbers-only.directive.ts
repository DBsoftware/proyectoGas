import {Directive, ElementRef, HostListener} from '@angular/core';
import {RegularExpressions} from '../../../class/regular-expressions';

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {
  // Allow decimal numbers. The \. is only allowed once to occur
  private regex: RegExp = new RegExp(RegularExpressions.NUMBER_REGEX);

  // Allow key codes for special events. Reflect :
  // Backspace, tab, end, home
  private specialKeys: Array<string> = [ 'Backspace', 'Tab', 'End', 'Home' ];

  constructor(private el: ElementRef) {
  }

  @HostListener('keydown', [ '$event' ])
  onKeyDown(event: KeyboardEvent) {
    // Allow Backspace, tab, end, and home keys
    // verifica que no hayan espacios tabs
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    // Do not use event.keycode this is deprecated.
    // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
    const current: string = this.el.nativeElement.value;
    // We need this because the current value on the DOM element
    // is not yet updated with the value from this event
    const next: string = current.concat(event.key);
    if (next && !String(next).match(this.regex)) { // si es diferente a null y no cumple con la expresion regular
      event.preventDefault(); // detiene el evento
    }
  }
}
