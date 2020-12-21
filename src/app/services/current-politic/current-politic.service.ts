import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {GeneralResponse} from '../../interfaces/general-response';
import {AppConfig} from '../../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class CurrentPoliticService {

  constructor(
    private http: HttpClient
  ) { }
  getCurrentPolitic(url: string) {
    return this.http.get<GeneralResponse>(url, { observe: 'response', params: AppConfig.yParam})
      .pipe(
        map(data => {
            switch (data.status) {
              case 200:
                return data.body.data;
            }
      }));
  }

}
