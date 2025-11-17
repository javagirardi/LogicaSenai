const readlineSync = require("readline-sync");

var loop = true

while (loop == true) {

    var tipo_sangue = readlineSync.question("Qual seu tipo sangue ?")

    if (tipo_sangue == "A" || tipo_sangue == "B" || tipo_sangue == "O") {
        loop = false
    }
}


var contador = 1

while (contador <= 5) {
    console.log("executei")
    contador++
}


const readlineSync = require("readline-sync");

/// for PARA fazer um loop
var contador_for = 1
for (contador_for; contador_for <= 20; contador_for++) {
    console.log("Agora é" + contador_for)
}

/// while  PARA fazer um loop
var contador_while = 1
while (contador_while <= 20) {

    contador_while++
}


// while para loop infinito com momento de PARADA

var loop_menu = true

while (loop_menu == true) {

    var idade = readlineSync.questionInt("Qual sua idade ?")

    if (idade >= 50) {
        loop_menu = false
    }
}