'use strict';

function SuperheroesPage(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
    this.superheroes = null;
}

SuperheroesPage.prototype.generate = async function() {
    await this.connectToAPI()
    this.elements = `
    <header>
        <h1 id="all-superheroes">All superheroes</h1>
    </header>
    <section class = "cards-container">
    `;
    this.superheroes.forEach((superheroe) => {
        console.log(superheroe)
        this.elements += `
        <article>
            <h3>${superheroe.name}</h3>
            <img class="superhero-img" src = "${superheroe.thumbnail.path}.jpg" alt = "${superheroe.name}"></img>
        </article>
        ` 
    });
    this.elements += `</section>`
    this.render();
}

SuperheroesPage.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
}

SuperheroesPage.prototype.connectToAPI = async function() {
    this.superheroes = await marvelServiceInstance.getAllSuperheroes()
}