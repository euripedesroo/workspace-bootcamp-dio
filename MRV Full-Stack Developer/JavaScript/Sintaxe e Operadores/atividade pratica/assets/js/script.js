function compara(num1,num2){
const frase1 = criaFrase1(num1,num2);
const frase2 = criaFrase2(num1,num2);

return `${frase1} ${frase2}`;
}

function criaFrase1(num1,num2){
    let frase1 = `Os números ${num1} e ${num2}`;
	let simNao = 'não';

	if (num1 === num2) {
		simNao = '';
	}

	return `${frase1} ${simNao} são iguais.`;
}

function criaFrase2(num1,num2){
    const soma = num1 + num2;
	let comparaDez = 'menor';
	let comparaVinte = 'menor';

	if (soma > 10) {
		comparaDez = 'maior';
	}

	if (soma > 20) {
		comparaVinte = 'maior';
	}

	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;

}
console.log(compara(10,8));