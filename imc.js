
let buttonId = document.getElementById("buttonId");



function imc (){

    let nome = document.getElementById("idNome").value;
    let altura = document.getElementById("idAltura").value;
    let peso = document.getElementById("idPeso").value;
    let resultado = document.getElementById("resultId");

    if(nome !== "" && altura !== "" && peso !== ""){
        let valorIMC = (peso / ( altura * altura )).toFixed(3);

        let classificacao = "";


        if (valorIMC < 18.5){
            classificacao =  "abaixo do peso";

        }else if (valorIMC < 25){
            classificacao = "dentro do seu peso ideal , parabens!!!!!";
        
        }else if (valorIMC < 30){
            classificacao = "levemente acima do seu peso ideal ";
        
        } else if (valorIMC < 35){
            classificacao = "com obsidade grau 1";
        
        }else if (valorIMC < 40){
            classificacao = "com obsidade grau 2";
        
        }else { 
            classificacao = "com obsidade mórbida , cuidado!!";
        }


        resultado.textContent = `${nome} seu IMC é de ${valorIMC} e voce esta ${classificacao}`;

    }
    else {
        resultado.textContent = "preencha todos os campos !!!"
    }

}



buttonId.addEventListener("click", imc)