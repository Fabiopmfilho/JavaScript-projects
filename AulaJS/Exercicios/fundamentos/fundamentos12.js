/*
    12) Faça um algoritmo que calcule o fatorial de um número.
*/

const fatorial = (numero) => {
    let fator = []
    if ((numero % 2) == 0) {
        fator.push(numero)
    }

    console.log(fator)
}

console.log(fatorial(2))