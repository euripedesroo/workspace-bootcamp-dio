function mapSemThis(arr){  // map é usado para fazer operação em todos os elementos de um array
    return arr.map(function(item){  //function é uma callback do array que está usando map
        return item * 2;
    });
}

const nums = [33,2,15,92,71,48,64];
console.log('criando um novo array para o map', mapSemThis(nums));
console.log('array original', nums);