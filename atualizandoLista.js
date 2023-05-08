const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1, 2, "Rodrigo"); // Para remover os elementos do array. Utilizamos o primeiro parâmetro para informar qual posição está o elemento e depois a quantidade que queremos excluir
                               // O terceiro parâmetro, seria para adicionar um novo elemento ao array, na posição que estava o elemento excluído
console.log(nomes);
