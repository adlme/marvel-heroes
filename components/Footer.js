'use strict';

function Footer(parentElement, style) {
    this.parentElement = parentElement;
    this.style = style;
    this.elements = null;

}

Footer.prototype.generate = function(){
    this.elements = `
    <footer class="footer">
        <div id="footer-wrapper">
            <p>Cool footer</p>
        </div>
    </footer>
    `;

    this.render();
}

Footer.prototype.render = function() {
    this.parentElement.innerHTML = this.elements
}