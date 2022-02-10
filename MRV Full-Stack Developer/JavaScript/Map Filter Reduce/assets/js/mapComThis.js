const maca = { // map é usado para fazer uma operacao em todos os elementos de um array
	value: 3,
};

const laranja = {
	value: 2,
};

function mapComThis(arr, thisArg){
	return arr.map(function (item) { //function é uma callback do array que está usando map
		return item * this.value;
	},thisArg);
}

const nums = [1,2,4,5,6,7,9,22,44,6,34];

console.log('this p obj maca', mapComThis(nums,maca));
console.log('this p obj laranja', mapComThis(nums,laranja));