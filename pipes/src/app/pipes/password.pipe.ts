import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: any, activate: boolean = true): string {
    if (activate) {
      let output: string = "";
      for (let i = 0; i < value.length; i++) {
        output += "*";
      }
      return output;
    } else {
      return value;
    }
  }

}
