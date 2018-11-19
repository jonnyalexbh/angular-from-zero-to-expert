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
      'Authorization': 'Bearer BQCP7FrHfjvjaNaWzO1kDizLjNCjklPj3bj0468rpHT3ikiMeT_tAnMQ0obgkea_4OzivU-imR3gw8pV3h8'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }
}
