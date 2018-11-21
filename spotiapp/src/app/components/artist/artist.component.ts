import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent {

  constructor(private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
    });

  }

}
