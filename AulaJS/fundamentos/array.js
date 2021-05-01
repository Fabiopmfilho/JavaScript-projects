const valores = [7.7, 8.9, 6.3, 9.2] // array do type object
console.log(valores[0], valores[3])

valores[4] = 10
// valores[10] = 4 -> pode criar uma posição a frente dos que existem, cria todos antes e deixa 0: == [ 7.7, 8.9, 6.3, 9.2, 10, <5 empty items>, 4 ]
console.log(valores)
console.log(valores.length) // verifica tamanho do array

valores.push({id: 3}, false, null, 'teste') // add valor
console.log(valores)

console.log(valores.pop()) // remove ultimo registro
delete valores[0] // remove registro 
console.log(valores)