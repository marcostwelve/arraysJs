const notas = [7, 7, 8, 9];

const novasNotas = [...notas, 10]; // Três pontos em JavaScript é um spread operator, que funciona com um espalhamento. No caso do exercício, ele está espaçhando por vírgulas na nova constante

// notas.push(10). Funciona do mesmo jeito que esta no spread operator
console.log(novasNotas);