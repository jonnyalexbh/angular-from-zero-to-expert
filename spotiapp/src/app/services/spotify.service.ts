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
      'Authorization': 'Bearer BQB_e_grXJyFl4AkKhGCBEo3iUirkZIdMqJ-fp7o3L3DL6xXb5BBOx--K8U8pIMFWP1UEtzI3jLMtA0IwoA'
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
   * getArtists
   *
   */
  getArtists(term: string) {

    return this.getQuery(`search?q=${term}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));
  }

  /**
   * getArtist
   *
   */
  getArtist(id: string) {

    return this.getQuery(`artists/${id}`);
  }

  /**
   * getTopTracks
   *
   */
  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=US`)
      .pipe(map(data => data['tracks']));
  }
}
