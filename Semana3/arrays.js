

var nomes = ["henrique", "douglas", "pedro", "joao"]

// Length -> Retorna o tamanho do array
// console.log(nomes.length)

// Acessando o array primeira Zero
// console.log(nomes[0])

// Acessando o array ultima Zero
var tamanho_nomes = nomes.length
// console.log(nomes[tamanho_nomes - 1])

// Adicionando um item array
var frutas = ["maca", "laranja", "kiwi"]
frutas.push("uva")

console.log("array depois push")
console.log(frutas)

// remover ultimo do item de um array
frutas.pop()

console.log("array depois pop")
console.log(frutas)

frutas.unshift("melao")

console.log("array depois unshift")
console.log(frutas)

frutas.shift()

console.log("array depois shift")
console.log(frutas)