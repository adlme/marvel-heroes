'use strict';

function main() {
    var ENTRY_POINT = '/';
    var layoutInstance = null;
    var navbarInstance = null;
    var footerInstance = null;
    var anchors = null;
    var links = [{
        name: "Home",
        url: "/",
        active: "active"
    }, {
        name: "Superheroes",
        url: "/superheroes",
        active:""
    }];
    var rootElement = document.querySelector("#root");
    
    generateLayout();
    generateNavbar();
    generateFooter();
    addListenersToNavbar();
    activateRouter();

    function generateLayout() {
        layoutInstance = new Layout(rootElement);
        layoutInstance.generate();
    };
    
    function generateNavbar() {
        navbarInstance = new Navbar(layoutInstance.header, links);
        navbarInstance.generate();
    }

    function generateFooter() {
        footerInstance = new Footer(layoutInstance.footer, links);
        footerInstance.generate();
    }

    function activateRouter() {
        routerInstance.buildDom(ENTRY_POINT, layoutInstance.main)
    }

    function addListenersToNavbar() {
        anchors = document.querySelectorAll("nav a");
        anchors.forEach((anchor) => {
            anchor.addEventListener('click', changePage)
        })
    }

    function changePage(event) {
        var url = event.target.attributes.url.value;
        routerInstance.buildDom(url, layoutInstance.main)
        anchors.forEach(function(anchor) {
            anchor.classList.remove('active');
        })
        event.target.classList.add('active');
    }
}

window.addEventListener('load', main);