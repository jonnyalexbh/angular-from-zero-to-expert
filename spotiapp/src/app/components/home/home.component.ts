import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countries: any[] = [];

  constructor(private http: HttpClient) {
    console.log('builder called');
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe((resp: any) => {
        this.countries = resp;
      });
  }

  ngOnInit() {
  }

}
