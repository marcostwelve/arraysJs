const notas = [10, 6, 8, 5.5, 10];
const totalNotas = notas.length;

notas.pop(); // Removendo o último elemento do Array

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / totalNotas;
console.log(`A média é ${media}`);
