const readlineSync = require("readline-sync");

let idades = []
let contador_idades =1

//com ordenacao crescente
for(contador_idades; contador_idades <= 10; contador_idades++){
    let idade = readlineSync.question("Digite a idade de nº " + contador_idades + ": ")
    idades.push(idade)
    
}

function ordenarCrescente(a,b){
    return a-b
}

function ordenarDecrescente(a,b){
    return b-a
}

console.log(idades.sort(ordenarCrescente))

