import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;

  /**
   * constructor
   *
   */
  constructor(private activatedRoute: ActivatedRoute,
    private spotify: SpotifyService) {

    this.loading = true;

    this.activatedRoute.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });

  }

  /**
   * getArtist
   *
   */
  getArtist(id: string) {
    this.loading = true;

    this.spotify.getArtist(id)
      .subscribe(artist => {
        this.artist = artist;
        this.loading = false;
      });
  }

  /**
   * getTopTracks
   *
   */
  getTopTracks(id: string) {
    this.spotify.getTopTracks(id)
      .subscribe(topTracks => {
        this.topTracks = topTracks;
      });
  }

}
