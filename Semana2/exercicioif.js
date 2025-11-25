const readlineSync = require("readline-sync");

// >>>>>>>>>> Entrada <<<<<<<<<<<
var valor_inicial = readlineSync.questionFloat("Digite o valor inicial: ");
var valor_final = readlineSync.questionFloat("Digite o valor final: ");

console.log("Operacoes:");
console.log("+ para Soma");
console.log("- para Subtracao");
console.log("x para multiplicacão");
console.log("/ para divisão");

var operacao = readlineSync.question("Digite a operacao: ");

// >>>>>>>>>> Processamento <<<<<<<<<<<

if (operacao == "+") {
    var resultado = valor_inicial + valor_final;

    // >>>>>>>>>> Saida <<<<<<<<<<<
    console.log(
        "A soma de " + valor_inicial + "+" + valor_final + "=" + resultado
    );
} else if (operacao == "-") {
    var resultado = valor_inicial - valor_final;

    // >>>>>>>>>> Saida <<<<<<<<<<<
    console.log(
        "A subtracao de " + valor_inicial + "-" + valor_final + "=" + resultado
    );
} else if (operacao == "x") {
    var resultado = valor_inicial * valor_final;

    // >>>>>>>>>> Saida <<<<<<<<<<<
    console.log("A multiplicacao de " + valor_inicial + "x" + valor_final + "=" + resultado);
} else if (operacao == "/") {

    if (valor_final == 0) {
        console.log("Nao e possivel dividir por zero");
    } else {
        var resultado = valor_inicial / valor_final;
        // >>>>>>>>>> Saída <<<<<<<<<<<
        console.log(
            "A divisao de " +
            valor_inicial +
            "/" +
            valor_final +
            "=" +
            resultado.toFixed(2)
        );
    }
}