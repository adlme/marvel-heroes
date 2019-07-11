"use strict";

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
}

LandingPage.prototype.generate = function() {
  this.elements = `
    <header id = "landing-page">
        <div id = "LP">
            <h1 class="glow">Find your favorite Superhero</h1>
            <button class="button-landing-page" url="/superheroes">Find Superhero</button>
            <video class = "bg-video" poster="./Captura de pantalla 2019-07-11 a las 10.13.40.png" autoplay muted loop>
              <source src="./Invasión Secreta - Historia completa.mp4" type="video/mp4">
            </video>
        </div>
    </header>
    `;
  this.render();
  this.addListenerToButton();
};

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
};



LandingPage.prototype.addListenerToButton = function() {
  var superheroButton = document.querySelector(".button-landing-page");
  superheroButton.addEventListener('click', this.changePage)
}

LandingPage.prototype.changePage = function() {
  routerInstance.buildDom('/superheroes', this.parentElement)
}