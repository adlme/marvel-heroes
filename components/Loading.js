'use strict';

class LoadingPage {
    constructor(parentElement) {
        this.parentElement = parentElement;
        this.elements = null;
    }

    generate() {
        this.elements = `
        <div class = "loading-img-wrapper">
            <img class = "loading-img" src = "./Eclipse-1s-200px.gif"></img>
        </div>
        `
        this.render();
    }
    render() {
        this.parentElement.innerHTML = this.elements;
    }

}

