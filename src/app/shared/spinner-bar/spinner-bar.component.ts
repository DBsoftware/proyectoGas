import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LoadingService} from '../../services/loading/loading.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-spinner-bar',
  template: `<mat-progress-bar color="accent" *ngIf="loading$ | async" mode="indeterminate"></mat-progress-bar>`,
  styleUrls: ['./spinner-bar.component.scss']
})
export class SpinnerBarComponent implements OnInit {
  value = false;
  loading$: Observable<boolean>;
  constructor(public loadingService: LoadingService,
              private changeDetector: ChangeDetectorRef) {
   this.loading$ = this.loadingService.getHTTPStatus();
  }

  ngOnInit() {
  }

}
