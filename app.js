const asciify = require('asciify-image');
const readline = require('readline-sync');
const fetch = require('node-fetch');
require('./list.js')
require('./asciify.js')

const getPokemon = () => {
fetch(`https://pokeapi.co/api/v2/pokemon`)
  .then(response => response.json())
  .then(allPokemon => console.log(allPokemon));
}

getPokemon()



// Menu
  // const pokemonNames = () => {
    
  // }

  // switch (userInput) {
  //   case 1
  //   pokemonList = []
  // } 

