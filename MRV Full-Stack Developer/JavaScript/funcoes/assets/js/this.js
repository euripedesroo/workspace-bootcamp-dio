function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
   
    nome: 'Maria',
    idade: 33,
};

const pessoa2 = {
   
    nome: 'Euripedes',
    idade: 39,
};

const pessoa3 = {
   
    nome: 'Jeremias',
    idade: 45,
};

const pessoa4 = {
   
    nome: 'Marcelo',
    idade: 25,
};

console.log(calculaIdade.call(pessoa2,25));
console.log(calculaIdade.apply(pessoa4, [12]));