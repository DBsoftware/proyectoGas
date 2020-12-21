import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UppercaseTextDirective} from './uppercase-text.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UppercaseTextDirective],
  exports: [UppercaseTextDirective]
})
export class UppercaseTextModule { }
