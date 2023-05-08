const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acc, atual) => atual + acc, 0)

console.log(soma);

// O método reduce() está trabalhando com dois parâmetros.
// O primeiro é a função callback obrigatória para retornar o cálculo e o segundo parâmetro é um número que representa o valor inicial do acumulador – no caso, 0.

// Escrevendo com a função callback fora do reduce

function operacaoNumerica(acc, atual) {
    return atual + acc
   }
   
const soma1 = numeros.reduce(operacaoNumerica, 0)

console.log(soma1);