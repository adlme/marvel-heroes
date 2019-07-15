'use strict';

class Navbar {
    constructor(parentElement, links, style, active) {
        this.parentElement = parentElement;
        this.links = links;
        this.style = style;
        this.elements = null;
        this.active = active;
    }

    generate(){
        this.elements = `
        <nav class="navbar">
            <ul>
        `;
        this.links.forEach((link) => {
            this.elements += `
                <li>
                    <a id="${link.name}" class = "${link.active}"href = "#0" url = ${link.url}>${link.name}</a>
                </li>
            `
        });
    
        this.elements += `
            </ul>
        </nav>
        `;
    
        this.render();
    }
    render() {
        this.parentElement.innerHTML = this.elements
    }
}