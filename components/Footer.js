'use strict';

class Footer {
    constructor(parentElement, style) {
        this.parentElement = parentElement;
        this.style = style;
        this.elements = null;

    }

    generate() {
        this.elements = `
        <footer class="footer">
            <div id="footer-wrapper">
             <img src="./Divi-footer-social-buttons.png"></img>
            </div>
        </footer>
        `;
    
        this.render();
    }
    
    render() {
        this.parentElement.innerHTML = this.elements
    }
}
