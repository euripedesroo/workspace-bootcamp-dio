var jogador1 = 0;
var jogador2 = 0;
var placar;

/* 
if (jogador1  > 0){
    console.log ('jogador1 marcou ponto');
} else if(jogador2 > 0){
    console.log('jogador2 marcou ponto');
}else{
    console.log('ninguém marcou ponto');
} */

//if ternário
/* jogador1 != -1 && jogador2 != -1 ? console.log('os jogadores sao validos') : console.log('jogadores invalidos'); */

//apenas usando if
/* if (jogador1 > 0 && jogador2 == 0) {
    console.log('jogador 1 marcou ponto');
    placar = jogador1 > jogador2;
} */

//usando else if
/* else if (jogador2 > 0 && jogador1 == 0) {
    console.log('jogador 2 marcou ponto');
} */

//usando else
/* else {
    console.log('ninguem marcou ponto');
}
// usando switch case
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador1 venceu');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador2 venceu');
        break;
    default:
        console.log('ninguém venceu;')
} */

// usando lacos
let array = ['valor1','valor2','valor3','valor4','valor5'];

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'};
// for executa até que seja falsa
/* for(let indice = 0; indice < array.length; indice++){
    console.log(indice);
} */

//for in - executa a partir de uma propriedade

/*
 for (let i in array){
    console.log(i);
}
// com object
for (i in object){
    console.log(i);
} */

//for of - executa uma repetição a partir de um valor
/* for(i of array){
    console.log(i);
} */

//usando while
var a = 0;
/* while(a < 10){
    a = a + 1;
    console.log(a);
}
 */
//usando do while

do{
    a = a + 1;
    console.log(a);
} while( a < 10);