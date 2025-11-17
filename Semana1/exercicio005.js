const readlineSync = require('readline-sync')

let preco_produto = readlineSync.questionFloat("Digite o preco do prioduto: ")
let custo_frete = readlineSync.questionFloat("Qual o valor do frete? ")
let valor_total = preco_produto + custo_frete

console.log("O custo total será de: R$" + valor_total.toFixed(2))
