// function elogiar(nome) {
//     console.log(nome + ", você é linda!");
// }

// function lerEntrada(callback) {
//     let nome = "Grazielle";
//     return callback(nome);
// }

// lerEntrada(elogiar)

// function somar(n1, n2) {
//     return console.log(n1 + n2)
// }

// function subtrair(n1, n2) {
//     return console.log(n1 - n2)
// }

// function multiplicar(n1, n2) {
//     return console.log(n1 * n2)
// }

// function dividir(n1, n2) {
//     return console.log(n1 / n2)
// }

// function calcular(operacao, n1, n2) {
//     return operacao(n1, n2)
// }

// calcular(somar, 5, 2)
// calcular(subtrair, 5, 2)
// calcular(multiplicar, 5, 2)
// calcular(dividir, 5, 2)

function pegarUsuaria(callback) {
    setTimeout(() => {
        return callback(null, {
            nome: "Grazielle Melo",
            email: "grazimelo72@gmail.com",
            id: 3258632
        })
    }, 1000)
}

function pegarEndereco(idUsuaria, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: "Alameda Praia de Guarapari",
            numero: 600,
            cidade: "Salvador"
        })
    }, 2500)
}

function resolverUsuaria(erro, usuaria) {
    if (erro) {
        return console.error("Retornou erro para a usuária", erro)
    }
    pegarEndereco(usuaria.id, resolverEndereco)
}

function resolverEndereco(erro, endereco) {
    if (erro) {
        return console.error("Retornou erro para a usuária", erro)
    }
    console.log(endereco.rua)
}

const usuaria = pegarUsuaria(resolverUsuaria)
