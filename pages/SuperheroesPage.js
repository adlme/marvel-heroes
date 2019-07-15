'use strict';

class SuperheroesPage {
    constructor(parentElement) {
        this.parentElement = parentElement;
        this.elements = null;
        this.superheroes = null;
    }
    async generate () {
        this.loading = new LoadingPage(this.parentElement);
        this.loading.generate();
        await this.connectToAPI()
        this.elements = `
        <header>
        <h1 id="all-superheroes">All superheroes</h1>
        </header>
        <section class = "cards-container">
        `;
        this.superheroes.forEach((superhero) => {
            this.elements += `
            <a href="${superhero.urls[1].url}">
            <article>
            <h3>${superhero.name}</h3>
            <img class="superhero-img" src = "${superhero.thumbnail.path}.jpg" alt = "${superhero.name}"></img>
            </article>
            </a>
            ` 
        });
        this.elements += `</section>
        <img class= "spiderman" src = "./spiderman1.png"></img>
        
        `
        this.render();
    }
    
    render() {
        this.parentElement.innerHTML = this.elements;
    }
    
    async connectToAPI() {
        this.superheroes = await marvelServiceInstance.getAllSuperheroes()
    }
}
