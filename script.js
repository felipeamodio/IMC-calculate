//função de clic do submit p/ barrar pela qtd de caracte
/**
function validar(){
    var valor = document.getElementById("numero").value;
    var nomeValor = document.getElementById("nome").value;

    if(valor.length > 2 || valor.length <= 0){
        alert("Digite 2 números ou menos");
        document.formulario.numero.focus();
        return false;
    }else if(nomeValor.length < 5){
        alert("Digite o nome completo");
        return false
    }else{
        alert("Formulário enviado com sucesso");
        return true;
    }
}

 */


 //calculadora IMC


 //FÓRMULAS

 /**
  * abaixo de 17         Muito abaixo do peso
  * entre 17 e 18.49     Abaixo do peso
  * entre 18,5 e 24.99   Peso normal
  * Entre 25 e 29.99     Acima do peso
  */


  //peso/(altura*altura)

  
  

  var peso;
  var altura;
  var imc;
  var resultado;

function calcular(){

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    imc = peso/(altura*altura);

    if(imc < 17){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + 'Cuidado, você está muito abaixo do peso'; //toFixed p/ mostrar quantas casas decimais eu quero
        return false;
    }else if( imc >= 17 && imc <= 18.49){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + 'Cuidado, você está abaixo do peso';
        return false;
    }else if( imc <= 18.5 && imc >= 24.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + 'Ótimo, você está com o peso normal';
        return false;
    }else if( imc >= 25 && imc <= 29.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + 'Cuidado, você está acima do peso';
        return false;
    }else{
        return false;
    }

}



///TEMPORIZADOR

function acao(){
    document.write("<br><br><br><br><br> Executando...<br>")
}

//executa de tempo em tempo
//primeiro vai receber a função e depois o tempo
//setInterval(acao, 1000);

//var timer = setInterval(acao, 1000);


//setTimeout(acao, 3000);