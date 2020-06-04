const asciify = require('asciify-image');
const readline = require('readline-sync');
const fetch = require('node-fetch');

  menu = ['View list', 'Search', 'Giraffe'],
  userInput = readline.keyInSelect(menu, 'Which pokemon?');

const getPokemon = () => {
fetch(`https://pokeapi.co/api/v2/pokemon`)
  .then(response => response.json())
  .then(allPokemon => console.log(allPokemon.sprites.front_default));
}

getPokemon()

  const pokemonNames = () => {
    fetch('')
  }

  switch (userInput) {
    case 1
    pokemonList = []
  } 


const options = {
  fit:    'box',
  width:  100,
  height: 100
}

const image = asciify(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${userInput}.png`, options, function (err, asciified) {
  if (err) throw err;
 
  // Print to console
  console.log(asciified);
});

console.log(image);


