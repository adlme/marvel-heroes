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
    // var superheroButton = document.querySelector(".button-landing-page");
    // superheroButton.addEventListener('click', (parentElement)=>{
    //     this.buildDom("/superheroes",parentElement)
    // })
}

Router.prototype.generateSuperheroesPage = function(parentElement) {
    this.page = new SuperheroesPage(parentElement);
    this.page.generate();
}

var routerInstance = new Router();