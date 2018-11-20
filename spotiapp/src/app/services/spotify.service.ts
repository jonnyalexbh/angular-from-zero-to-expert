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
      'Authorization': 'Bearer BQDO12P54HoUvswdjRXMbd_x-BOUovXqQzxtjjA7xFFh6VPzUWNDAUYdRfIJcUTfbIO7QA2rf4y8m270BrQ'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }

  /**
   * getArtist
   *
   */
  getArtist(term: string) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDO12P54HoUvswdjRXMbd_x-BOUovXqQzxtjjA7xFFh6VPzUWNDAUYdRfIJcUTfbIO7QA2rf4y8m270BrQ'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`, { headers });
  }
}
