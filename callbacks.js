const nomes = ["Marcos", "Maurício", "Paola"];
const numeros = [1, 2, 3, 4];
let soma = 0;

nomes.forEach( (nome) => {
    console.log(nome);
});

nomes.forEach(nome => {
    console.log(nome);
});

numeros.forEach(numero => soma += numero);

console.log(soma);


// Utilizando forEach com funções externas. Lembre-se que com funções externas, não se utiliza parenteses
function imprimeNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome);