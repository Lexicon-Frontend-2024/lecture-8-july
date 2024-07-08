// Arrayer
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let names = ['Jesper', 'Maja', 'Niklas', 'Annika'];

// Gör inte såhär för tusan!
// let poorUsage = ['Jesper', 4.23, null, ['Maja', false]]; 

let pokemons = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Squirtle', 'Wartortle', 'Blastiose', 'Charmander', 'Charmeleon'];
console.log(pokemons);

// Du kommer åt varje post genom dess unika index
console.log(pokemons[3]);

// Push för att lägga till sist i arrayen
pokemons.push('Charizard');
console.log(pokemons);

// Unshift för att lägga till först i arrayen
pokemons.unshift('Pikachu');
console.log(pokemons);

// Pop för att ta bort den sista posten i en array
let popped = pokemons.pop();
console.log(pokemons);
console.log(popped);

// Shift för att ta bort den först posten i en array
pokemons.shift();
console.log(pokemons);

// Iterera med vanlig for-loop
for(let i = 0; i < pokemons.length; i++) {
    console.log(`${pokemons[i]} has index ${i}`);
}

// Iterera med forEach
pokemons.forEach((pokemon, index) => {
    console.log(pokemon, index);
});

// Filtrera fram en eller flera pokemons
let filteredPokemons = pokemons.filter((pokemon) => pokemon.includes('saur'));
console.log(filteredPokemons);
