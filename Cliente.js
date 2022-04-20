export class Cliente{  //classe é um molde o que vai ter
    nome;              //todo cliente vai ter: nome, cpf...
    _cpf;              //propriedades ou atributos

    get cpf(){            //para o cpf não ser alterado com cliente2.cpf = 0
        return this._cpf  
    }

    constructor(nome, cpf){ // o cpf só vai ser atribuido no construtor
        this.nome = nome;   // depois não pode ser mais alterado por causa do gettter
        this._cpf = cpf;
    }

}