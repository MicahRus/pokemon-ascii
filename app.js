const asciify = require('asciify-image');
const readlineSync = require('readline-sync');
const fetch = require('node-fetch');
require('./asciify.js')
const run = true
let userInput = -1
let pokemonNames = []

  let options = {
    fit:    'box',
    width:  50,
    height: 50
  }
  const image = asciify(`https://media.discordapp.net/attachments/707438959587885100/718311740055748608/1920px-International_Pokemon_logo.svg.png?width=1440&height=530`, options, function (err, asciified) {
    if (err) throw err;
    
    // Print to console
    console.log(asciified);
  })

const getPokemon = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    if (!response.ok) {
      throw new Error("Pokemon API is down. :C")
    }

    let data = await response.json()
    if (pokemonNames.length === 0){
      for (let i = 0; i < 151; i ++) {
      pokemonNames.push(data.results[i].name)
    }
  }
      return pokemonNames
  } catch(err) {
    console.log(err)
  }
}

const pokemonSlideShow = () => {
  for (let userInput = 0; userInput <= 151; userInput ++) {
      const image = asciify(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${userInput}.png`, options, function (err, asciified) {
    if (err) throw err;
    
    // Print to console
     setTimeout(() => {console.log(asciified)}, 500);
    });
  }
}

const mainMenu = (result) => {
  console.log("What would you like to do friend :)");
  menu = ['View Pokemon List', 'Asciify a Pokemon', 'Slideshow', 'Exit'],
  index = readlineSync.keyInSelect(menu, 'Which option?');
  console.log(menu);
switch (index + 1) {
  case 1 :
    for (let z = 0; z < result.length; z ++) {
      console.log(`[${z}] ${result[z]}`);
    }
    break;
  case 2 :
    console.log('Which Pokemon would you like to Asciify?')
    userInput = readlineSync.question('>');
    break;
  case 3 : 
    pokemonSlideShow()
    break;
  case 4 :
    console.log("Thanks for using Pokemon Asciify!")
    process.exit()
    break;
  }
}
const app = async () => {
  // 3

  const result = await getPokemon()
  const result2 = await mainMenu(result)
  
options = {
    fit:    'box',
    width:  80,
    height: 80
  }
  
  if(userInput >= 0 && userInput <= 151) {
  const image = asciify(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${userInput}.png`, options, function (err, asciified) {
    if (err) throw err;
    
    // Print to console
    console.log(asciified);
  });
}
  const keepRunning = () => {
    if(run === true) {
      userInput = -1
      app()
    }
    run === true
  }
  keepRunning()
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