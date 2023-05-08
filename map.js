const notas = [10, 9.5, 8, 7, 6];

// Map é apropriado para reescrever arrays. Ele não altera o array original
const notasAtualizadas = notas.map((nota) => {
   return nota + 1 >= 10 ? nota =  10 : nota + 1;
});

console.log(notasAtualizadas);