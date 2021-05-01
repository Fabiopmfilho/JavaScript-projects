const escola = "Cod3r"

console.log(escola.charAt(4)) // verifica letra de determinada posição
console.log(escola.charCodeAt(3)) // valor do caractere na table asc
console.log(escola.indexOf('3')) // verifica qual a posição de determinado caractere

console.log(escola.substring(1)) // inicia pelo indice indicado
console.log(escola.substring(0, 3)) // indica onde começa e onde termina pelo indice

console.log('Escola '.concat(escola).concat("!")) // concatenar String
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) // substitui um caractere do indice indicado

console.log('Ana,Maria,Pedro'.split(',')) // concatenar array com um char 