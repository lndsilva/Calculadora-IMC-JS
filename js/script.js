let peso, altura, resul, mostraResult;


function calculaIMC(){

    peso = document.getElementById('seu_peso').value;
    altura = document.getElementById('sua_altura').value;
    
    resul = peso / (altura * altura);
    document.getElementById('pesoIMC').value = resul;
    alert(resul);
}

function limpar(){
    document.getElementById('seu_peso').focus();
}









