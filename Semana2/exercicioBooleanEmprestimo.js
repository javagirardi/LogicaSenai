const readlineSync = require('readline-sync')

let rendaComprovada = readlineSync.question("Tem renda comprovada? ")
let temRenda = rendaComprovada == 's' ? true : false

let clienteAntigo = readlineSync.question("Ja e cliente? ")
let ehAntigo = clienteAntigo == 's' ? true : false

let clientePreferencial = readlineSync.question("E cliente preferencial? ")
let ehPreferencial = clientePreferencial == 's' ? true : false

let nomeNegativado = readlineSync.question("Nome negativado? ")
let ehNegativado = nomeNegativado == 's' ? true : false

if (ehNegativado == true) {
    console.log("Crédito reprovado!")
} else if (temRenda == true || 
    (ehAntigo == true && ehPreferencial == true)
) {
    console.log("Crédito aprovado!")
}