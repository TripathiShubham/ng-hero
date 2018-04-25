import { Component, OnInit } from'@angular/core';
import { Hero } from './hero.js';
import { HeroService } from './hero.service.js';

@Component({
    selector: 'my-dashboard',
    template: `
        <div class="container">
            <h3>Top Heroes</h3>
            <div>
                <div *ngFor="let hero of heroes" class="row"
                    [routerLink]="['/details', hero.id]">
                    <h4>{{hero.name}}</h4>
                </div>
            </div>
        </div>
    `
})
export class DashboardComponent implements OnInit {
heroes: Hero[];

    constructor(private heroServices: HeroService) {
    }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.heroServices.getHeroes()
        .then(heros => this.heroes = heros.slice(1,5));
    }

    selectedHero(hero: Hero) {
    }
}