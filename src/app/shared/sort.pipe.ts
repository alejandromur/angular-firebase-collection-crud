import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: true
})
export class SortPipe implements PipeTransform {
  transform(value: any, field: string = 'id') {
    if (!value) {
      return value;
    }

    if (!Array.isArray(value)) {
      throw new Error('Type not supported');
    }

    const dir = 1;

    return [].concat(value).sort((a, b) => {
      if (a[field] < b[field]) {
        return 1 * dir;
      } else if (a[field] > b[field]) {
        return -1 * dir;
      }
      return 0;
    });
  }
}
