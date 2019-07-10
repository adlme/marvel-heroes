"use strict";

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
}

LandingPage.prototype.generate = function() {
  this.elements = `
    <header id = "landing-page">
        <div id = "bg-video">
            <h1>Find your favorite Superheroe</h1>
            <button class="button-landing-page">Find Superheroe</button>
        </div>
    </header>
    `;
  this.render();
};

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
};
