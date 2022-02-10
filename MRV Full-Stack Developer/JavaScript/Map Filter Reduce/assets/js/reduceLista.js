const lista = [
    {
        name: 'sabao',
        valor: 30,
    },
    {
        name: 'chocolate',
        valor: 15,
    },
    {
        name: 'celular',
        valor: 2000,
    }
];
const saldo = 3100;

function calculaSaldo(saldo, lista){
    return lista.reduce(function (prev, current, index){
        console.log('rodada ', index +1);
        console.log({ prev });
        console.log({ current });
        return prev - current.valor;
    },saldo);
}

console.log(calculaSaldo(saldo, lista));
