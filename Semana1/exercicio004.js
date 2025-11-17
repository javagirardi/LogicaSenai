const readlineSync = require('readline-sync');

var nome_titular = readlineSync.question("Digite o seu nome como está impresso no cartão: ")
var numero_cartao = readlineSync.question("Digite o numero do seu cartão de crédito: ")
var validade_cartao = readlineSync.question("Digite o mês e o ano de validade do seu cartão (MM/YYYY): ")
var cvv = readlineSync.question("Digite os dígitos verificadores (cvv) do seu cartão de crédito: ")


console.log(">>> Cartão Cadastrado <<<")
console.log("Nome do titular: " + nome_titular)
console.log("Número do cartão: " + numero_cartao)
console.log("Válido até: " + validade_cartao)
console.log("Código de Segurança: " + cvv)