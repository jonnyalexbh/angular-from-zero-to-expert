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
      'Authorization': 'Bearer BQB3mxZWSDSLtz2RShxXlnpDS-oqCAZaihJpUct7tFaxZNMRCVx0oJRwX4Q7VupTnk5WXV2XFJowqaakJMQ'
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
