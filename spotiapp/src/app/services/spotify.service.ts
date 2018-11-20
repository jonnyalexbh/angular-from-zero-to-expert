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
   * getNewReleases
   *
   */
  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDWteHxGC5rFUe91N39hdlUOf1E9F0kzcB9LeyGzZgSGCMCG8U0plgDwcGBTkFgQc1Gmpnu97vHLyKV678'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .pipe(map(data => data['albums'].items));

    // .pipe(map(data => {
    //   return data['albums'].items;
    // }));
  }

  /**
   * getArtist
   *
   */
  getArtist(term: string) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDWteHxGC5rFUe91N39hdlUOf1E9F0kzcB9LeyGzZgSGCMCG8U0plgDwcGBTkFgQc1Gmpnu97vHLyKV678'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`, { headers })
      .pipe(map(data => data['artists'].items));
  }
}
