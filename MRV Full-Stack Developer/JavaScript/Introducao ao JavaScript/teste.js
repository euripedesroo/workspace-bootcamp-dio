// comenta codigo numa linha
/* comenta codigo até
 fechar com */
 var preco = 2; // variável com valores que podem ser alterados
 const PRECO = 3; // Valor constante que não pode ser alterado
 desconto = 0,25;
 /* assim é possivel uma operacao variavel da seguinte forma */
 preco = preco - desconto; // que vai ter o valor variavel pra preco
 // agora não é possivel fazer
 PRECO = PRECO - desconto;
 // pois preco é valor constante e não pode ser alterado, mas para fazer a operacao com constante pode
total = PRECO - desconto; /* pois o valor da constante PRECO não é alterada e a operacao foi feita com outra variavel */

/* declaração de função, entre os () faz a passagem de parametro ou valor
function variavel(){

}      
    exemplo:*/
function soma (a, b){
    console.log(a + b); // imprime o valor de a+b
    return a + b; // retorna a soma de a + b
}
// depois é necessário chamar a função fazendo a passagem de parametro para a operacao funcionarls

 soma (3, 5);