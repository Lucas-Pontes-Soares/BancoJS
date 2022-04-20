import {Conta} from "./Conta.js";

export class ContaCorrente extends Conta{ //extends = herança da Conta, reutilizando código (herdando as propriedades e os métodos da classe Conta)
    static numeroContas = 0;              //quando mudar, vai mudar em todas as contas
    constructor(cliente, agencia){        //recebe o cliente e a agencia
        super(0, cliente, agencia);       //está chamando o construtor da Conta, uma referencia
        //depois que terminar o super ele continua
        ContaCorrente.numeroContas += 1;
    }

    //especializa o sacar somente da ContaCorrente, e a taxa muda somente nele
    //sobreescrevendo o comportamento de sacar
    sacar(valor){                  //metodo = função
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}