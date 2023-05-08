const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];

// pode-se realizar diretamente na declaração
// const nomesAtualizados = [...new Set(nomes)];
console.log(nomesAtualizados);

/*
    Set, é semelhante aos array, mas ele não aceita valores duplicados entre outras funções
    Para declarar o set, é necessário instânciar o mesmo
*/