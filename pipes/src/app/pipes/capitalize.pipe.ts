import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  /**
   * transform
   *
   */
  transform(value: string, all: boolean = true): string {
    value = value.toLowerCase();

    let namesT = value.split(" ");

    if (all) {
      for (let i in namesT) {
        namesT[i] = namesT[i][0].toUpperCase() + namesT[i].substr(1);
      }
    }
    else {
      namesT[0] = namesT[0][0].toUpperCase() + namesT[0].substr(1);
    }

    return namesT.join(" ");
  }

}
