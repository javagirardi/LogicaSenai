const readlineSync = require("readline-sync");

//ex01
var limite_pacientes = readlineSync.questionInt("Quantos pacientes temos ? ");

var contador = 1;

for (contador; contador <= limite_pacientes; contador++) {
    var nome = readlineSync.question("Qual nome do paciente")
    var peso = readlineSync.questionFloat("Qual peso do paciente")
    var altura = readlineSync.questionFloat("Qual altura do paciente")

    var resultado = peso / (altura * altura)
}

console.log("FIM")

//ex02
var contador = 1

while (contador <= 6) {
    var estado = readlineSync.question("Qual o seu estado ? ")
    var cidade = readlineSync.question("Qual é o sua cidade ? ")
    console.log("No estado de " + estado + " fica a cidade de " + cidade)
    console.log("\n \n")
    contador++
}


//ex03
var nomes = []
var contador = 1

for (contador; contador <= 5; contador++) {
    var nome = readlineSync.question("Qual nome do convidado ?")
    nomes.push(nome)
}

var tamanho_nomes = nomes.length

console.log("primeira nome:" + nomes[0])
console.log("ultimo nome:" + nomes[tamanho_nomes - 1])

//ex04
var contador = 1
var items = []

for (contador; contador <= 5; contador++) {
    var item = readlineSync.question("Qual o item da lista")
    items.push(item)
}

console.log(items)

//ex05
/*
   1 - Quer coloca uma pessoa na fila de atendimento - push
   2 - Atender a pessoa no inicio da fila - shift
   3 - Exibir fila de atendimento  - console.log()
   4 - Retirar a ultima pessoa da fila por causa da desistencia - pop
   5 - Prioridade -  unshift
   6 - Finalizar o codigo 
*/

var fila_atendimento = [];
var loop_atendimento = true;

while (loop_atendimento == true) {

    var resposta = readlineSync.questionInt("Qual operacao deseja fazer ? ");

    if (resposta == 1) {

        var nome = readlineSync.question("Qual nome do cliente ? ");
        fila_atendimento.push(nome);
        console.log("✅ Adicionado na fila: " + nome);

    } else if (resposta == 2) {

        console.log("✅ Atendendo cliente ");
        console.log("Atendendo pessoa:" + fila_atendimento[0]);
        fila_atendimento.shift();

    } else if (resposta == 3) {

        // Concatena texto com um array -> console.log("Fila atual: " + fila_atendimento)
        var contador = 0;
        var tamanho_fila_atendimento = fila_atendimento.length;

        for (contador; contador < tamanho_fila_atendimento; contador++) {
            console.log(fila_atendimento[contador]);
        }

    } else if (resposta == 4) {

        var tamanho_fila_atendimento = fila_atendimento.length;
        console.log(
            fila_atendimento[tamanho_fila_atendimento - 1] + " esta indo embora ... "
        );
        fila_atendimento.pop();

    } else if (resposta == 5) {

        var nome = readlineSync.question("Qual é o nome do cliente prioridade ? ");
        fila_atendimento.unshift(nome);

    } else {

        loop_atendimento = false;
        console.log("Nenhuma opcao escolhida");

    }

    console.log(fila_atendimento);
}

//ex06
var numeros_pessoas = readlineSync.question("Quantas pessoas tem na casa ?")

var contador = 1
var salarios = []

for (contador; contador <= numeros_pessoas; contador++) {
    var renda = readlineSync.questionFloat("Qual a renda da pessoa ?")
    salarios.push(renda)
    soma = soma + renda
}

/*
  SOLUCAO ALTERNATIVA PARA SOMAR o ARRAY
var soma = 0
var loop_soma = 0

for(loop_soma; loop_soma < numeros_pessoas;loop_soma++) {
    soma = soma + salarios[loop_soma]
}

*/

var media_salarios = soma / numeros_pessoas

if (media_salarios <= 1500) {
    console.log("Recebe beneficio")
} else {
    console.log("Nao recebe beneficio")
}

console.log(soma)
console.log(media_salarios)

// soma = 1000 + 0 
// soma = 2000 + 1000
// soma = 3000 + 500

//ex07
// Enem em Linguagens,
//  Matemática,
// Ciências Humanas,
// Ciências da Natureza e
//  Redação

var nota_linguagens = readlineSync.questionFloat(
    "Qual a sua nota em Linguagens ?"
);

var nota_matematica = readlineSync.questionFloat(
    "Qual a sua nota em Matemática ?"
);

var nota_ciencia_humanas = readlineSync.questionFloat(
    "Qual a sua nota em Ciências Humanas ?"
);

var nota_ciencia_natureza = readlineSync.questionFloat(
    "Qual a sua nota em Ciências da Natureza ?"
);

var nota_redacao = readlineSync.questionFloat("Qual a sua nota em Redacao ?");

// calcular media do aluno

var media =
    (nota_linguagens +
        nota_ciencia_humanas +
        nota_redacao +
        nota_ciencia_natureza +
        nota_matematica) /
    5;

console.log(media);

if (media >= 870.62) {
    console.log("A sua nota passou para Odontologia");
}

if (media >= 873.47) {
    console.log("A sua nota passou para Direito");
}

if (media >= 918.34) {
    console.log("A sua nota passou para Medicina");
}

if (media >= 625.85) {
    console.log("A sua nota passou para Quimica");
}

if (media >= 652.25) {
    console.log("A sua nota passou para Pedagogia");
}

function ordenarCrescente(a, b) {
    return a - b
}

function ordenarDescrecente(a, b) {
    return b - a
}

[5, 4, 10, 3, 2].sort(ordenarDescrecente)



