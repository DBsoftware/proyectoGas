import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-clasificacion-financiera',
  templateUrl: './clasificacion-financiera.component.html',
  styleUrls: ['./clasificacion-financiera.component.scss']
})
export class ClasificacionFinancieraComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
