'use strict';

function Navbar(parentElement, links, style, active) {
    this.parentElement = parentElement;
    this.links = links;
    this.style = style;
    this.elements = null;
    this.active = active;

}

Navbar.prototype.generate = function(){
    this.elements = `
    <nav class="navbar">
        <ul>
    `;
    this.links.forEach((link) => {
        this.elements += `
            <li>
                <a class = "${link.active}"href = "#0" url = ${link.url}>${link.name}</a>
            </li>
        `
    });

    this.elements += `
        </ul>
    </nav>
    `;

    this.render();
}

Navbar.prototype.render = function() {
    this.parentElement.innerHTML = this.elements
}