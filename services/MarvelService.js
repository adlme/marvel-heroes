'use strict';

class MarvelService {
    constructor() {
        this.baseUrl = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=4be34f50e26e43e0f3a38f9ab16af4ca&limit=90';
    }
    async getAllSuperheroes() {
        const response = await fetch(`${this.baseUrl}`);
        const data = await response.json();
        return data.data.results;
    }
}


const marvelServiceInstance = new MarvelService();

marvelServiceInstance.getAllSuperheroes();