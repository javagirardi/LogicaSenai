const readlineSync = require('readline-sync')

// 1 - Definir a variavel do contador
// 2 - Condicao de parada (retorna boolean)
// 3 - Iteracao 

/*
let contador = 10

for(contador; contador <=10; contador ++) {
    console.log("I love js")    
}
*/

/*
let iteracao = readlineSync.questionInt("Quantas vezes voce quer iterar?" )

for(let i=1; i<=iteracao; i++){
    console.log("Numero " + i)
}
*/

let pacientes = readlineSync.questionInt("Quantos pacientes estao presentes? ")


for (let i = 1; i <= pacientes; i++) {

    let nome = readlineSync.question("Qual o seu nome? ")
    let altura = readlineSync.questionFloat("Qual a sua altura em metros? ")
    let peso = readlineSync.questionFloat("Qual o seu peso em quilogramas? ")

    let imc = calculaImc(peso, altura)
    console.log(`${nome}, seu IMC é ${imc.toFixed(2)}.`);

}
function calculaImc(peso, altura) {
    return peso / (altura * altura)

}


//for com pergunta


var limite_contagem = readlineSync.questionInt("Quanto vc quer contar?")

var contador = 1

for (contador; contador <= limite_contagem; contador++) {
    console.log("Agora é" + contador)
}
