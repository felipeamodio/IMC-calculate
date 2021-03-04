class Pessoa{
    constructor(){
        this.nome = '',
        this.sobrenome = ''
    }
    //criando metodo

    nomePessoa(primeiroNome){
        this.nome = primeiroNome;
        console.log('Meu nome é ' + this.nome)
    }

    segundoNome(segundoNome){
        this.sobrenome = segundoNome;
        console.log('Meu sobrenome é ' + this.sobrenome)
    }


    nomeCompleto(){
        let nomeCompleto = this.nome + ' ' + this.sobrenome;
        console.log(nomeCompleto)
    }
}

//criando uma nova pessoa
let pessoa1 = new Pessoa();

pessoa1.nomePessoa('Felipe')
pessoa1.segundoNome('Alves')
pessoa1.nomeCompleto()