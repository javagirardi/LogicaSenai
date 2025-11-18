const readline = require("readline-sync");

let renda_anual = []
var contador_renda_anual = 1
var soma_meses = 0

//desafio = exibir o nome do mês

for (contador_renda_anual; contador_renda_anual <= 12; contador_renda_anual++) {
    let renda_mes = readline.questionFloat("Qual foi o faturamento do mes " + contador_renda_anual + ": ")
    renda_anual.push(renda_mes)
    soma_meses += renda_mes
}

let quantidadeFuncionario = readline.questionInt("Quantos funcionarios tem a empresa?")
let meta = readline.questionFloat("Qual a meta da empresa?")

if (soma_meses >= meta) {
    var resultado = (soma_meses - meta) / quantidadeFuncionario
    console.log("Cada funcionário receberá R$ " + resultado.toFixed(2))
} else console.log("Não atingimos a meta")