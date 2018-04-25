import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.js';
import { HeroService } from './hero.service.js';

@Component({
  selector: 'my-heroes',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="panel panel-default">
            <div  class="panel-heading">
              My Heroes
            </div>
            <div class="panel-body">
              <div class="container">
                <div class="row" *ngFor="let hero of heroes"
                  (click)="selectedHero(hero)">
                  <div class="col-md-1">
                    {{ hero.id}}
                  </div>
                  <div class="col-md-11">
                    {{ hero.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row" *ngIf="selectHero">
        Selected Hero is {{ selectHero.name }}
        <button [routerLink]="['/details', selectHero.id]">View Details</button>
      </div>
    </div>
    `
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes()
    .then(heroes => this.heroes = heroes);
  }

  selectedHero(hero: Hero): void {
    this.selectHero = hero;
  }
}
