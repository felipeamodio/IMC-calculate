//let só conseguimos acessar dentro do escopo onde ele está, diferente de usar o var

//const é uma constante, ou seja, não muda de valor

//usando `` podemos concatenar tudo varial em strings com ${} passando o nome das variaveis



/**
 * spread operator
 * quando juntamos um array/ objeto com outro..
 * 
 * ex: let numero1 = [1, 2, 3]
 * let numero2 = [...numero1, 4,5,6]
 * 
 * e o resultado mostrará o numero 2 em continuação do numero1
 * 
 */


 ///spread operator dentro de uma função

 function cadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo: 'desenvolvedor',
        status: 1,
        codigo: '54363672hhsb1w'
    }


    return novosDados;
 }  

 //console.log(cadastroPessoa({nome: "Felipe", sobrenome: "Alves", anoInicio: 2021}));



 //rest operator

 function minhaLista(...nomes){///passando só os nomes ele vai passar só o primeito por isso precisa dos ...
   // console.log(nomes) 
 }

 minhaLista("Matheus", "Lucas", "João");


 const lista = [1,2,3,4,5,6]

 //map percorre todos os itens da lista e retorna algo

 const novaLista = lista.map(function(item, index){//o item é todo item da lista, index é a posição q está passando
    return item + index //* 5 //todos os itens serão multiplicados por 5
 })

// console.log(novaLista)



 //reduce faz uma cálculo de forma muito mais prática
 const soma = lista.reduce(function(total, proximo){
     return total + proximo
 })

 //console.log(soma)

 //find achar um item de forma fácil

 const find = lista.find(function(item){
     return item === 6
 })

 //console.log(find)


 
class List{
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data)
        console.log(this.data)
    }
}

class ListTarefas extends List{ //herdando funcionalidades de outra classe com extend
   /** constructor(){
        this.tarefas = []
    }

    addTarefa(){
        this.tarefas.push("Nova Tarefa")
        console.log(this.tarefas)
    } */
}

const minhasTarefas = new ListTarefas();

document.getElementById('novo').onclick = function(){
   // minhasTarefas.addTarefa();
   minhasTarefas.add("Lista de tarefa")
}

