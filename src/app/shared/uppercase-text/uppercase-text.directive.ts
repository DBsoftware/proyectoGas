import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appUppercaseText]',
})
export class UppercaseTextDirective {

  constructor(private ref: ElementRef) { }
  @HostListener('input', ['$event']) onInput(event) {
    this.ref.nativeElement.value = event.target.value.toUpperCase();
  }
}
