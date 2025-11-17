const readlineSync = require("readline-sync");

function calculaImc(){    
    var imc = peso / (altura * altura)
    return imc
}

var altura = readlineSync.questionFloat("Qual a sua altura em metros? ")
var peso = readlineSync.questionFloat("Qual o seu peso em quilogramas? ")


//var resultado = calculaImc(peso, altura)
//console.log(resultado.toFixe(2))

calculaImc(peso, altura)
console.log(calculaImc(peso,altura).toFixed(2))