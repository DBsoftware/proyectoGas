import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColombianNomenclatureComponent } from './colombian-nomenclature.component';
import {MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    FlexLayoutModule,
    MatDialogModule
  ],
  declarations: [ColombianNomenclatureComponent],
  exports: [ColombianNomenclatureComponent],
  entryComponents: [ColombianNomenclatureComponent]
})
export class ColombianNomenclatureModule { }
