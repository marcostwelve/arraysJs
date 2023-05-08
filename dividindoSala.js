const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = alunos.slice(0, alunos.length / 2); // Dividindo o array Primeiro parâmetro, onde começa e o último onde termina(Sempre colocamos um índice a mais, pois o mesmo não é incluído no array)
const sala2 = alunos.slice(alunos.length / 2); // Não é necessário colocar o segundo parâmetro do array, quando quer pegar os valores até o final
console.log(sala2);