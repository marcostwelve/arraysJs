const notas = [5, 6, 9, 10, 9.5];
let notasAtualizadas = [];
notas.forEach((nota) => {
   let novaNota =  nota + 1 >= 10 ? 10 : nota + 1;
    notasAtualizadas += novaNota;
});

console.log(notasAtualizadas);
