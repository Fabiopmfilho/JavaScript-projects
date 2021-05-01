// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Fabio',
    idade: 23,
    peso: 72,
    endereco: {
        logadouro: 'Teresa ameri',
        numero: 52
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)