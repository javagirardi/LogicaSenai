const readlineSync = require("readline-sync");

/* Length - conta o numero de caracteres da variavel:
let senha = readlineSync.question("Digite a sua senha: ")
if (senha.length >= 8 && senha.length <= 16) {
    console.log("Senha forte")
} else if (senha.length < 8 && senha.length > 0) {
    console.log("A senha deve ter ao menos 8 caracteres")
} else console.log("Senha super-forte criada")
*/

//UpperCase - transforma caracteres em maiúsculas // LowerCase - em minusculas
//let nome = 'java'
//console.log(nome.toLowerCase())
//console.log(nome.toUpperCase())

//Escolhendo caracter com Array
//let usuario = "Java"
//console.log(usuario[usuario.length-1])

//Metodo Trim - retira os espaços
//let minhaSenha = "   123456 "
//console.log(minhaSenha.trim())

//IndexOf - Localizar a posição
//let nome = "java"
//console.log(nome.indexOf("v"))

//Includes- verifica se há o caractere/palavra em um texto e retorna booleano
//let frase = " at node:internal/main/run_main_module:36:49"
//console.log(frase.includes('node'))

//Replace / replaceAll - substitui palavra de variavel

//let frase = "Lorem ipsum lorem lorem manila"
//console.log(frase.replace("ipsum", "[censurado]"))
//console.log(frase.replaceAll("lorem", "habemus"))