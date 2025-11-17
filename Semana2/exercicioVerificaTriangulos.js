const readlineSync = require('readline-sync')

let ladoA = readlineSync.questionFloat("Lado A = ")
let ladoB = readlineSync.questionFloat("Lado B = ")
let ladoC = readlineSync.questionFloat("Lado C = ")


if ((ladoA + ladoB <= ladoC) || (ladoA + ladoC <= ladoA)){
    console.log("E um triangulo")
}


if (ladoA == ladoB && ladoA == ladoC) {
    console.log("O Triangulo e equilatero")
} else if (ladoA != ladoB && ladoA != ladoC) {
    console.log("O Triangulo e escaleno")
} else if ((ladoA == ladoB) && (ladoA != ladoC) || (ladoA == ladoC) && (ladoA != ladoC) || (ladoB == ladoC) && (ladoB != ladoA)) {
    console.log("O Triangulo e isosceles")
}