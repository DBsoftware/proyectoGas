import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateMoment',
  pure: true
})
export class DateMomentPipe implements PipeTransform {

  transform(value: string, format: string): any {
    return moment(value).format(format);
  }

}
