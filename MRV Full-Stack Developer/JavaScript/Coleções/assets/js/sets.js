let meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(array){

const mySet = new Set(arr); /* como o Set altera o array */
return [...mySet]; // a gente usa o spread[...] dentro do array para a constante mySet retornar para a funcao e para o vetor os valores de set sem que apareca SEt na frente do array
}
console.log(valoresUnicos(meuArray));