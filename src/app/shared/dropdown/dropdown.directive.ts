import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
   @Input() isOpen: boolean;
   @Output() open: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

@HostListener('click') toggleOpe() {
    this.isOpen = !this.isOpen;
   this.open.emit(this.isOpen);
}

}

@Directive({
  selector: '[appDropdownMenu]'
})
export class DropdownMenuDirective {
  @HostBinding('class.active')
  @Input() isOpen: boolean;
}

