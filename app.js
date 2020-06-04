const asciify = require('asciify-image');
const readlineSync = require('readline-sync');
const fetch = require('node-fetch');
require('./asciify.js')


// menu = ['View List', 'Asciify Pokemon', 'Giraffe'],
// index = readlineSync.keyInSelect(menu, 'Which option?');
//   console.log(menu);

//   switch (index + 1) {
//     case 1 :
//       pokemonMenu = [allPokemon],
//       index = readlineSync.keyInSelect(pokemonMenu, 'Which pokemon would you like to asciify?');
//       break;
//     case 2 :
//       console.log('asdfafdsa');
//       break;
//     case 3 : 
//       // asciify giraffe
//       break;
//   }


// 3
const getPokemon = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon")
    let data = await response.json()
    return data = await data
  } catch(err) {
    console.log(err)
  }
  return data
}

  const pokemonArray = async (result) => {
    let pokemonNames = []
  for (let i = 1; i < 152; i ++) {
      pokemonNames.push(result.result[i].name)
      console.log(pokemonNames)
    }
    result = pokemonArray(result)
    console.log(result);
}

// 2
const app = async () => {

  const result = await getPokemon()
  const result2 = await pokemonArray(result)

  console.log(result2);
}
  app()


// let result = getPokemon()
//   .then((data) => console.log(data))

  // console.log(result);

// 1



// const getPokemon = async () => {
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
//   const data = await response.json()
//    console.log(data);
// }


// const getPokemon = async () => {
//   const data = []
// fetch(`https://pokeapi.co/api/v2/pokemon`)
//   .then(response => response.json())
//   .then(allPokemon => console.log(data.push(allPokemon))
//   )}




// pokemonArray()
// console.log(data);




// Menu
  // const pokemonNames = () => {
    
  // }

  // switch (userInput) {
  //   case 1
  //   pokemonList = []
  // } 

