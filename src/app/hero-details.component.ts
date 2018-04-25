import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service.js';
import { Hero } from './hero.js';

@Component({
    selector: 'hero-details',
    template: `
      <div class="container" *ngIf="hero">
        <div class="row">
          <h4>Selected Hero is {{ hero.name }} with id {{ hero.id }}</h4>
        </div>
        <div class="row">
            <button (click)="goBack()">Go Back</button>
        </div>
      </div>    
    `
})
export class HeroDetailsComponent implements OnInit {
hero: Hero;

    constructor(private heroService: HeroService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit() {
        this.route.params
        .switchMap((params: Params) => this.heroService.getHero(+params['id']))
        .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }
}