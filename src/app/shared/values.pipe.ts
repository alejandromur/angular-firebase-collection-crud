import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'values' })
export class ValuesPipe implements PipeTransform {
  transform(value, args: string[]): any {
    const values = [];
    // tslint:disable-next-line:forin
    for (const key in value) {
      values.push(value[key]);
    }
    return values;
  }
}
