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
var DashboardComponent = (function () {
    function DashboardComponent(heroServices) {
        this.heroServices = heroServices;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    DashboardComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroServices.getHeroes()
            .then(function (heros) { return _this.heroes = heros.slice(1, 5); });
    };
    DashboardComponent.prototype.selectedHero = function (hero) {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        template: "\n        <div class=\"container\">\n            <h3>Top Heroes</h3>\n            <div>\n                <div *ngFor=\"let hero of heroes\" class=\"row\"\n                    [routerLink]=\"['/details', hero.id]\">\n                    <h4>{{hero.name}}</h4>\n                </div>\n            </div>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [hero_service_js_1.HeroService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map