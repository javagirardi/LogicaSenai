const readlineSync = require("readline-sync");

function calcularDesconto(valor_total) {
    if (valor_total < 200) {
        return valor_total;
    } else if (valor_total >= 200 && valor_total <= 499.99) {
        var desconto = (valor_total * 10) / 100;
        var resultado = valor_total - desconto;
        return resultado;
    } else if (valor_total >= 500) {
        var desconto = (valor_total * 20) / 100;
        var resultado = valor_total - desconto;
        return resultado;
    }
}

var valor_total = readlineSync.questionFloat("Digite o valor total: ");
console.log("O desconto total e :" + calcularDesconto(valor_total).toFixed(2))