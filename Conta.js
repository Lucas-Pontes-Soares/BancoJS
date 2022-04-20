//essa classe só existe para ser herdada
//ou seja Classe abstrata

export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){ //quando o construtor for chamado com Conta
            throw new Error("Você não deveria instanciar um objeto do tipo Conta Diretamente");
            //throw = lançar um novo Error
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){  //set = atribuir o valor no cliente
        if(novoValor instanceof Cliente){ //se o novoValor for uma instancia de cliente
            this._cliente = novoValor;
        }
    }

    get cliente(){ //um acessor
        return this._cliente;
    }

    _saldo = 0;     //#saldo = saldo privado (não pode alterar fora da classe)
    // https://github.com/tc39/proposal-class-fields#private-fields

    get saldo(){ //um acessor 
        return this._saldo
    }

    sacar(valor){                  //metodo = função
        let taxa = 1;
        return this._sacar(valor, taxa);
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado){  //this = saldo dessa conta corrente
            this._saldo -= valorSacado;
            return valorSacado;          //retorna o valor pra quem chamou a função
        }

        return 0;           //quando não conseguir sacar, retorna 0
    }

    depositar(valor){ //metodo = função
        if(valor <= 0 ){
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}