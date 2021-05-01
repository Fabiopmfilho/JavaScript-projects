const peso1 = 1.0
const peso2 = Number('2.0')

// console.log(peso1, peso2)
// console.log(Number.isInteger(peso1))

const n1 = 9.871
const n2 = 6.871

const total = n1 * peso1 + n2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(typeof media)

/*
* toFixed(2) -> seleciona numero de casas decimais para  mostrar
* toString() -> converte para um texto
* toString(2) -> converte para um texto em binário
*/