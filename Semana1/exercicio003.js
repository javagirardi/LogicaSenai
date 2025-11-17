const readlineSync = require('readline-sync');


var cidade = readlineSync.question("Qual a sua cidade? ")
var estado = readlineSync.question("Qual o seu Estado? ")

console.log("Você reside em " + cidade + "/" + estado);