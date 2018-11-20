import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artists: any[] = [];

  /**
   * constructor
   *
   */
  constructor(private spotify: SpotifyService) { }

  /**
   * search
   *
   */
  search(term: string) {
    this.spotify.getArtist(term).subscribe((data: any) => {
      this.artists = data;
    });
  }

}
