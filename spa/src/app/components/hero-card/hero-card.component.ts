import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() idx: number;

  @Output() selectedHero: EventEmitter<number>;

  constructor(private _router: Router) {
    this.selectedHero = new EventEmitter;
  }

  ngOnInit() {
  }

  /**
   * seeHero
   *
   */
  seeHero() {
    this._router.navigate(['/heroe', this.idx]);
    // this.selectedHero.emit(this.idx);
  }

}
