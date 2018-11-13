import { Component } from '@angular/core';
import { resolve } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = 'Jonny Alexander';
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a = 0.234;
  salary = 536250;

  hero = {
    name: 'Logan',
    pass: 'Wolverine',
    age: 500,
    address: {
      street: 'first',
      house: '203'
    }
  };

  promiseValue = new Promise((resolve, reject) => {

    setTimeout(() => resolve('llego la data'), 3500);

  });

}
