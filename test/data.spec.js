import { example, anotherExample } from '../src/data.js';
import { PegarPokemons } from '../src/main.js';

describe('exibir pokemons', () => {
  it('só pode exibir pokemons da regiao de kanto', () => {
    // 1. Em que estado a aplicacao se encontra?
    // Quais prerequisitos eu preciso cumprir pra rodar meu teste?
    
    // 2. Executar a ação que vc quer testar
    PegarPokemons();

    // 3. Validar se a aplicação exibe o resultado correto
    expect(document.getElementById('root').childElementCount).toBe(250);
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
