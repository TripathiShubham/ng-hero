import { Injectable} from '@angular/core';
import { Hero } from './hero.js';
import { HEROES } from './mock-heroes.js';

@Injectable()
export class HeroService {

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

}