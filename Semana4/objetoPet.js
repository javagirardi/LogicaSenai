const readlineSync = require("readline-sync");


const pet = {}

pet.nome = readlineSync.question("Qual o nome do seu PET? ");
pet.idade = readlineSync.questionInt("Qual a idade do seu PET? ")
pet.cor_da_pelagem = readlineSync.question("Qual a cor dos pelos de seu PET? ")
pet.peso = readlineSync.questionFloat("Qual o peso do seu PET? ")

let referencia = readlineSync.questionFloat("Qual o valor de referência? ")
let limite_peso = referencia * 0.2

if (pet.peso > referencia + limite_peso) {
    pet.obeso = true
} else pet.obeso = false

console.log(`Meu PET se chama ${pet.nome}, tem ${pet.idade} anos, tem a pelagem 
${pet.cor_da_pelagem} e pesa ${pet.peso} quilos e sua obesidade é ${pet.obeso}`)

console.log(pet)