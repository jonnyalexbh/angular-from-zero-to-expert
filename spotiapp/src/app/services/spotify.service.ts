import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  /**
   * constructor
   *
   */
  constructor(private http: HttpClient) { }

  /**
   * getQuery
   *
   */
  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDS2vygg75x9REAdm28qA90vFeTQpyjpX3Kc48EbHS67UiU93HaaeiUbSVEqC8fg87LdLOTZaz-DS5M5xg'
    });

    return this.http.get(url, { headers });

  }

  /**
   * getNewReleases
   *
   */
  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data => data['albums'].items));
  }

  /**
   * getArtist
   *
   */
  getArtist(term: string) {

    return this.getQuery(`search?q=${term}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));
  }
}
