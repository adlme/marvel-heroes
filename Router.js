'use strict';

function Router() {
    this.page = null;
}

Router.prototype.buildDom = function(url, parentElement) {
    switch (url) {
        case "/":
        this.generateLandingPage(parentElement)
        break;

        case "/superheroes":
        this.generateSuperheroesPage(parentElement)
        break;

        default: 
        this.generateLandingPage(parentElement);
    }
}

Router.prototype.generateLandingPage = function(parentElement) {
    this.page = new LandingPage(parentElement);
    this.page.generate();
}

Router.prototype.generateSuperheroesPage = function(parentElement) {
    this.page = new SuperheroesPage(parentElement);
    this.page.generate();
}

var routerInstance = new Router();