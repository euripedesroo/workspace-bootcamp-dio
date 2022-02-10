function somaNumeros(arr){
    return arr.reduce (function (prev, current){
        console.log({ prev });
        console.log({ current });
        return prev + current;
    });
}

const meuArray = [33,  2, 15, 92, 71, 48, 64];

console.log(somaNumeros(meuArray));