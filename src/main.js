import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
function PegarPokemons ()
{
    for (const pokemon of data.pokemon) {
        console.log (pokemon.name);
        console.log (pokemon.num);
        console.log (pokemon.type)
    }
}