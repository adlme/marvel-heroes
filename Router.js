'use strict';

class Router {
    constructor() {
        this.page = null;
    }
    buildDom(url, parentElement) {
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
    
    generateLandingPage(parentElement) {
        this.page = new LandingPage(parentElement);
        this.page.generate();
    }
    generateSuperheroesPage(parentElement) {
        this.page = new SuperheroesPage(parentElement);
        this.page.generate();
    }
}


const routerInstance = new Router();