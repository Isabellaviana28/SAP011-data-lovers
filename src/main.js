// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

export function somar(num1, num2){
    return parseFloat(num1) + parseFloat(num2);
}

export function PegarPokemons()
{
   const alfabeto = document.getElementById ("ordenacao").value ;
   if (alfabeto == "A-Z"){
    data.pokemon.sort(function(pokemon1, pokemon2){
        // se retornar -1, então p1 vem primeiro
        // se retornor +1, então p2 vem primeiro
        if(pokemon1.name < pokemon2.name){
            return -1;
        } else {
            return 1;
        }
    });
   } else {
        data.pokemon.sort(function(pokemon1, pokemon2){
            if(pokemon1.name > pokemon2.name){
                return -1;
            } else {
                return 1;
            }
        });
   }

   // vai limpar o root antes de adicionar os pokemons
   document.getElementById('root').innerHTML = "";
    for (const pokemon of data.pokemon){

        const DivDoPokemon = document.createElement ('div');
        
        const Nome = document.createElement ('p');
        Nome.className = "nome-pokemon";
        Nome.innerHTML = pokemon.name;
        DivDoPokemon.appendChild(Nome);

        const Imagens = document.createElement ('img');
        Imagens.src = pokemon.img;
        DivDoPokemon.appendChild(Imagens);

        const Numeros = document.createElement ('p');
        Numeros.innerHTML = pokemon.num;
        DivDoPokemon.appendChild(Numeros);

        const Tipo = document.createElement ('p');
        Tipo.innerHTML = pokemon.type;
        DivDoPokemon.appendChild(Tipo);
        DivDoPokemon.className = "card-pokemon";

      

        document.getElementById('root').appendChild(DivDoPokemon);
    }
}

 PegarPokemons();

 document.getElementById("ordenacao").onchange = PegarPokemons;