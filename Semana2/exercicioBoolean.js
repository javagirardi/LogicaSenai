const readlineSync = require('readline-sync')

let produtoSazonal = readlineSync.question("E um produto sazonal? Digite 'sim' ou 'nao'. ")
let produtoExcessoEstoque = readlineSync.question("Existe excesso deste produto no estoque? Digite 'sim' ou 'nao'. ")
let valorDoProduto = readlineSync.questionFloat("Qual o valor do produto? ")

//if ternario
let ehProdutoSazonal = produtoSazonal == "Sim" || "sim" || "s" ? true : false
let temExcesso = produtoExcessoEstoque == "Sim" || "sim" || "s" ? true : false


if ((ehProdutoSazonal == true && temExcesso == true) ||
    valorDoProduto >= 80.00) {
    console.log("Ganhou desconto")
} else {
    console.log("Não ganhou desconto")
}