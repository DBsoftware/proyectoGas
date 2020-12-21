import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderWithTitleComponent } from './border-with-title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BorderWithTitleComponent],
  exports: [BorderWithTitleComponent]
})
export class BorderWithTitleModule { }
