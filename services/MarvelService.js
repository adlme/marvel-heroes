'use strict';

function MarvelService() {
    this.baseUrl = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=4be34f50e26e43e0f3a38f9ab16af4ca&limit=90'
}

MarvelService.prototype.getAllSuperheroes = async function() {
    var response = await fetch(`${this.baseUrl}`);
    var data = await response.json();
    return data.data.results;
}

var marvelServiceInstance = new MarvelService();

marvelServiceInstance.getAllSuperheroes();