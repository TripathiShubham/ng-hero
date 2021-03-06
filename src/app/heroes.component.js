"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_service_js_1 = require("./hero.service.js");
var HeroesComponent = (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
        this.title = 'Tour of Heroes';
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.selectedHero = function (hero) {
        this.selectHero = hero;
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        template: "\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"panel panel-default\">\n            <div  class=\"panel-heading\">\n              My Heroes\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"container\">\n                <div class=\"row\" *ngFor=\"let hero of heroes\"\n                  (click)=\"selectedHero(hero)\">\n                  <div class=\"col-md-1\">\n                    {{ hero.id}}\n                  </div>\n                  <div class=\"col-md-11\">\n                    {{ hero.name }}\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"selectHero\">\n        Selected Hero is {{ selectHero.name }}\n        <button [routerLink]=\"['/details', selectHero.id]\">View Details</button>\n      </div>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [hero_service_js_1.HeroService])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map