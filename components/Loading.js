'use strict';

function LoadingPage(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
}

LoadingPage.prototype.generate = function() {
    this.elements = `
    <div class = "loading-img-wrapper">
        <img class = "loading-img" src = "./Eclipse-1s-200px.gif"></img>
    </div>
    `
    this.render();
}


LoadingPage.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
}