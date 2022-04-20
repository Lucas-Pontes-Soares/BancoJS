import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";


const cliente1 = new Cliente("Lucas", 11122233309); //new = novo cliente

const cliente2 = new Cliente("Thiago", 88822233309); //cada cliente é um objeto ou instância apartir do modelde (class)

console.log(cliente1);
console.log(cliente2);

const ContaCorrenteLucas = new ContaCorrente(cliente1, 1001);
ContaCorrenteLucas.depositar(500);

const ContaCorrenteThiago = new ContaCorrente(cliente2, 1002);
ContaCorrenteLucas.transferir(100, ContaCorrenteThiago);

const ContaPoupanca1 = new ContaPoupanca(50, cliente1, 1001)

console.log(ContaCorrenteLucas)
console.log(ContaPoupanca1);

//console.log(ContaCorrenteLucas);
//console.log(ContaCorrenteThiago);
//console.log("Número de contas criadas = " + ContaCorrente.numeroContas);