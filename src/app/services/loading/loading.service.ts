import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingBar: BehaviorSubject<boolean>;
  constructor() {
    this.loadingBar = new BehaviorSubject<boolean>(false);
  }
  toogleLoading(value: boolean) {
    this.loadingBar.next(value);
  }

  getHTTPStatus(): Observable<boolean> {
    return this.loadingBar.asObservable();
  }
}
