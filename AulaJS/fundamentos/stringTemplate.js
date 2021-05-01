const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

//utilizar crase para indicar
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

// expressoes matematicas...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)