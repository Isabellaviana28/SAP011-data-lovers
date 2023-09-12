import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
function PegarPokemons()
{
    for (const pokemon of data.pokemon){
        console.log (pokemon.img);
        console.log (pokemon.name);
        console.log (pokemon.num);
        console.log (pokemon.type);

        const DivDoPokemon = document.createElement ('div');
        DivDoPokemon.innerHTML = pokemon.name;

        const Imagens = document.createElement ('img');
        Imagens.src = pokemon.img;
        DivDoPokemon.appendChild(Imagens);

        const Numeros = document.createElement ('num');
        Numeros.innerHTML = pokemon.num;
        DivDoPokemon.appendChild(Numeros);

        const Tipo = document.createElement ('type');
        Tipo.innerHTML = pokemon.type;
        DivDoPokemon.appendChild(Tipo);
      

        document.getElementById ('root').appendChild(DivDoPokemon);
    }
}

 PegarPokemons();