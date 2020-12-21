import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownDirective, DropdownMenuDirective} from './dropdown.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DropdownDirective, DropdownMenuDirective],
  exports: [
    DropdownDirective,
    DropdownMenuDirective
  ]
})
export class DropdownModule { }
