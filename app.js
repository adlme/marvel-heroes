'use strict';

const main = () => {
    const ENTRY_POINT = '/';
    let layoutInstance = null;
    let navbarInstance = null;
    let footerInstance = null;
    let anchors = null;
    const links = [{
        name: "Home",
        url: "/",
        active: "active"
    }, {
        name: "Superheroes",
        url: "/superheroes",
        active:""
    }];
    const rootElement = document.querySelector("#root");
    
    const generateLayout = () => {
        layoutInstance = new Layout(rootElement);
        layoutInstance.generate();
    };
    const generateNavbar = () => {
        navbarInstance = new Navbar(layoutInstance.header, links);
        navbarInstance.generate();
    }
    const generateFooter = () => {
        footerInstance = new Footer(layoutInstance.footer, links);
        footerInstance.generate();
    }
    const activateRouter = () => {
        routerInstance.buildDom(ENTRY_POINT, layoutInstance.main)
    }
    const addListenersToNavbar = () => {
        anchors = document.querySelectorAll("nav a");
        anchors.forEach((anchor) => {
            anchor.addEventListener('click', changePage)
        })
    }
    const changePage = (event) => {
        const url = event.target.attributes.url.value;
        routerInstance.buildDom(url, layoutInstance.main)
        anchors.forEach((anchor) => {
            anchor.classList.remove('active');
        })
        event.target.classList.add('active');
    }
    generateLayout();
    generateNavbar();
    generateFooter();
    addListenersToNavbar();
    activateRouter();
}

window.addEventListener('load', main);