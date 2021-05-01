var a = 3
let b = 4
const c = 5

var a = 30
// let b = 40 -> error
b = 40
// c = 50 -> error

console.log(a, b, c)

/*
* VAR vc pode declarar e redeclarar a qualquer momento,
* LET so pode declarar uma unica vez e so funciona dentro de um bloco
* CONST so pode ser declarada uma vez e nao pode alterar o valor dela
*/