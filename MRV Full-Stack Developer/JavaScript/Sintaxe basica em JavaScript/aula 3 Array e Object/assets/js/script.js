// estudo sobre vetores e arrays
/* como declarar os arrays
let array = ['string', 1, true];
console.log(array);

´podendo declarar varios tipos de arrays
*/
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
/*
console.log(array);
console.log(array[2]); mostra na tela somente o indice 2 */

// manipulacao de array - todos possuem um ponto depoois de array e parenteses que vai fazer a passagem de parametros e valores como nas funcoes

/* forEach - itera um array
array.forEach(function(item, index){console.log(item, index)}); */

/*push - adiciona um novo item no final do array
array.push('novoitem');
console.log(array);    */

/* pop - remove um item no final do array
array.pop();
console.log(array);  */

/* shif -  remove um item no inicio do array
array.shift();
console.log(array); */

/* unshift - adiciona um item no inicio do array 
array.unshift('novoItemNoInicio');
console.log(array);   */

/** indexOf - mostra o indice do valor do vetor
console.log(array.indexOf(true)); */

/*splice -  remove ou substitui um item pelo indice
array.splice(0, 3);
console.log(array); */

/*slice -retorna uma parte de um array existente
let novoarray = array.slice(0, 3);
console.log(novoarray);  */

//objetos
let object = {string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno: 'objetoIntero'}};
console.log(object);

var string = object.string;
console.log(string);

var arrays = object.array;
console.log(arrays);

var {string, boolean, number} = object;
console.log(string, boolean, number);


