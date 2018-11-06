import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: `./body.component.html`,
})
export class BodyComponent {

  mshow = true;

  sentence: any = {
    message: 'a great power requires a great responsibility',
    author: 'Ben Parker',
  };

  characters: string[] = ['Spiderman', 'Venon', 'Dr. Octopus', 'Increibles']

}
