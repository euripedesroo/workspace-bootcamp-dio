//funcao declarativa - é aquela q tem que declara um nome a funcao
function funcao(){
    console.log('exemplo de funcao declarativa');
}

funcao();

//expressões de função - sao funcoes atribuidaas as expressões
var funcAo = function funcAo (){
    console.log('primeiro exemplo de expressao de funcao')
}

funcAo();

//arrow function - funcao de expressao de sintaxe curta, sao sempre anonimas e não podem ser nomeadas, deve ser declarada com parenteses () seguido de => e depois de chaves {}
var funcaO = () => {
    console.log('exemplo de arrou function');
}

funcaO();