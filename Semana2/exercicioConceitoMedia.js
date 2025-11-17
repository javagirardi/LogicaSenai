const readlineSync = require('readline-sync')

let nota = readlineSync.questionFloat("Digite a sua media: ");

function defineConceitoNota(nota) {
    if (nota >= 9 && nota <= 10) {
        return "Conceito A: Excelente!"
    } else if (nota >= 7 && nota < 9) {
        return "Conceito B: Bom!"
    } else if (nota >= 5 && nota < 7) {
        return "Conceito C: Suficiente!"
    } else if (nota >= 0 && nota < 5) {
        return "Conceito D: Reprovado!"
    } else {
        return "Nota inválida! Digite uma nota de 0 a 10"
    }
}

console.log(defineConceitoNota(nota))

