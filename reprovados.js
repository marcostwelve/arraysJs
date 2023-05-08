const alunos = ['Ana', 'Marcos', 'maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => { // Quando não utilizamos o parâmetro, podemos colocar o underline, para convenção
    return medias[indice] < 7;
});

console.log(reprovados);