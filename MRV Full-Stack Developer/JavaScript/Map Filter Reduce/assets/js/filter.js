function filterPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

const meuVetor = [33,  2, 15, 92, 71, 48, 64];

console.log('vetor só com pares', filterPares(meuVetor));
console.log('vetor original', meuVetor);