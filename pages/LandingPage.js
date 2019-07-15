"use strict";

class LandingPage {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
  }
  
  generate() {
    this.elements = `
      <header id = "landing-page">
          <div id = "LP">
              <h1 class="glow">Find your favorite Superhero</h1>
              <button class="button-landing-page" url="/superheroes">Find Superhero</button>
              <video class = "bg-video" poster="./Captura.png" playsinline autoplay muted loop>
                <source src="./Invasion.mp4" type="video/mp4">
              </video>
          </div>
      </header>
      `;
    this.render();
    this.addListenerToButton();
  };
  
  render() {
    this.parentElement.innerHTML = this.elements;
  };
  
  addListenerToButton() {
    const superheroButton = document.querySelector(".button-landing-page");
    superheroButton.addEventListener('click', this.changePage)
  }
  
  changePage() {
    const main = document.querySelector("#site-main");
    routerInstance.buildDom('/superheroes', main);
    const navSuperheroes = document.querySelector('#Superheroes');
    const navHome = document.querySelector('#Home');
    navHome.classList.remove('active');
    navSuperheroes.classList.add('active');
  }
}