const readlineSync = require("readline-sync");

let idades = []
let contador_idades = 1
let soma_idades = 0

//com ordenacao crescente/decrescente 
for (contador_idades; contador_idades <= 5; contador_idades++) {
    let idade = readlineSync.questionInt("Digite a idade de nº " + contador_idades + ": ")
    idades.push(idade)    
    soma_idades += idade
}


function ordenaCrescente(a, b) {
    return a - b
}

function ordenaDecrescente(a, b) {
    return b - a
}

idades.sort(ordenaCrescente)
let tamanhoArrayIdades = idades.length

console.log("O menor valor é " + idades[0])
console.log("O maior valor é " + idades[tamanhoArrayIdades - 1])

//media
let media = soma_idades / tamanhoArrayIdades

console.log("A média das idades é: " + media)

//quantos menores de idade?
let contador_loop_menor_idade = 0
let numero_pessoas_menores = 0

for (contador_loop_menor_idade; contador_loop_menor_idade < tamanhoArrayIdades; contador_loop_menor_idade++){
    if(idades[contador_loop_menor_idade]<18){
        numero_pessoas_menores++
    }

}

console.log("O numero de pessoas menores de idade é " + numero_pessoas_menores)

