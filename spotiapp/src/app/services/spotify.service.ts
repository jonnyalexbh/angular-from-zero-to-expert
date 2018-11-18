import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
      'Authorization': 'Bearer BQDUJh05A3NtLRcCDxHPeCwENXHtrV-25qAUave18DwwphegE6e1vezA5e2JfifAVpPkb8t-9QEYcfn1f8w'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .subscribe(data => {
        console.log(data);
      });
  }
}
