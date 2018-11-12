import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() idx: number;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  /**
   * seeHero
   *
   */
  seeHero() {
    this._router.navigate(['/heroe', this.idx]);
  }

}
