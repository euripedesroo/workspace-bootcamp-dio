/* Atividade: Conta Bancária
Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
Dentro de ContaBancaria, construa o getter e o setter de saldo;
Dentro de ContaBancaria, crie os métodos sacar e depositar;
Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais. */
class conta{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = 0
    }
    sacar(valor){
        if(valor > this.saldo){
            return console.log('Saque negado, saldo insuficiente');
        }
        this.saldo = this.saldo - valor;
        return this.saldo;
    }
    set saldo(valor){
        this.saldo = valor;
    }
    get saldo (){
        return this.saldo;

    }

}
class contaCorrente extends conta{
    constructor(agencia, numero, cartaoC){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoC = cartaoC;
    }
    set cartaoC(valor){
        this._cartaoC = valor;
    }
    get cartaoC(){
        return this._cartaoC;
    }
}

class contaPoupanca extends conta{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupanca';

    }
}

class contaUniversitaria extends conta{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitaria';

    }
    

	sacar(valor) {
		if (valor > 500) {
			return 'Operação negada.';
		}

		this._saldo = this._saldo - valor;
		return this._saldo;
	}
}

const minhaConta = new ContaCorrente(1, 211, true);
const contaUni = new ContaUniversitaria(2, 333);
