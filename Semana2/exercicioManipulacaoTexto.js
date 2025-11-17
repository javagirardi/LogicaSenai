const readlineSync = require("readline-sync");

/*
Prezados responsáveis da EmpresaX, Venho por meio desta reclamar sobre uma tentativa de burlar o sistema por parte de um indivíduo identificado como ladrao. O CPF envolvido é 123.456.789-00. Solicito providências imediatas para evitar prejuízos e garantir a segurança dos clientes.
*/
let reclamacao = readlineSync.question("Digite a sua reclamação: ")


function editaMensagem(reclame) {
    let mensagemEditada = reclame
        .replaceAll(/burlar/gi, 'ADULTERAR')
        .replaceAll(/ladr(ão|ao)/gi, 'MAU-CARÁTER')
        .replaceAll(/empresax/gi, 'RAZÃO SOCIAL')
        .replaceAll(/\b\d{3}\.?\d{3}\.?\d{3}-?\d{2}\b/g, '[DADO PESSOAL]');

    return mensagemEditada
}


console.log("\nTexto CENSURADO")
console.log(editaMensagem(reclamacao))

