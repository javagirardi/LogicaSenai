const readlineSync = require("readline-sync");

function verificarAprovacao() {
  // Entrada
  var notaUm = readlineSync.questionFloat("Digite a nota 1: ");
  var notaDois = readlineSync.questionFloat("Digite a nota 2: ");
  var notaTres = readlineSync.questionFloat("Digite a nota 3: ");
  var notaQuarto = readlineSync.questionFloat("Digite a nota 4: ");

  var media = (notaUm + notaDois + notaTres + notaQuarto) / 4;

  if (media >= 6) {
    console.log("Aprovado com media " + media);
  } else {
    console.log("Reprovado com media" + media);
  }
}

verificarAprovacao()


/*alternativa

function verificarAprovacao(notaUm, notaDois, notaTres, notaQuarto) {
  var media = (notaUm + notaDois + notaTres + notaQuarto) / 4;

  if (media >= 6) {
    return "Aprovado com media " + media;
  } else {
    return "Reprovado com media" + media;
  }
}

// Entrada
var notaUm = readlineSync.questionFloat("Digite a nota 1: ");
var notaDois = readlineSync.questionFloat("Digite a nota 2: ");
var notaTres = readlineSync.questionFloat("Digite a nota 3: ");
var notaQuarto = readlineSync.questionFloat("Digite a nota 4: ");

console.log(verificarAprovacao(notaUm, notaDois, notaTres, notaQuarto));
console.log(verificarAprovacao(1, 2, 3, 5));
*/