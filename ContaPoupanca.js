import{Conta} from "./Conta.js";

export class ContaPoupanca extends Conta{ //extends = herança da Conta, reutilizando código (herdando as propriedades e os métodos da classe Conta)
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia); //está chamando o construtor da Conta
        //depois que terminar o super ele continua
    }
}