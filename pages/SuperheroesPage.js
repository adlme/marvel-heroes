'use strict';

function SuperheroesPage(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
    this.superheroes = null;
}

SuperheroesPage.prototype.generate = async function() {
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

SuperheroesPage.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
}

SuperheroesPage.prototype.connectToAPI = async function() {
    this.superheroes = await marvelServiceInstance.getAllSuperheroes()
}