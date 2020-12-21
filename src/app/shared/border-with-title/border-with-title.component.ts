import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-border-with-title',
  templateUrl: './border-with-title.component.html',
  styleUrls: ['./border-with-title.component.scss']
})
export class BorderWithTitleComponent implements OnInit {
  @Input() innerPadding: number;
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
