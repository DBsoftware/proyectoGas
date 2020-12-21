import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule, MatToolbarModule} from '@angular/material';
import {BreadcrumbComponent} from './breadcrumb.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent]
})
export class BreadcrumbModule { }
