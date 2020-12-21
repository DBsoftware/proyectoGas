import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {GeneralResponse} from '../../interfaces/general-response';
import {throwError} from 'rxjs';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {AppConfig} from '../../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenService {

  constructor(private http: HttpClient,
              private router: Router,
              private dialog: MatDialog) { }
  validateToken(userId: number, token: string, url: string) {
    return this.http.post<GeneralResponse>(url, { userId: userId, token: token }, {observe: 'response', params: AppConfig.yParam})
      .pipe(
        map(response => {
            return true;
        }),
        catchError(() => {
          return throwError(false);
        })
      );
  }
}
