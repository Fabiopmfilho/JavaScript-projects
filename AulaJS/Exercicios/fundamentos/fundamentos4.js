/*
    04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

*/

const divisao = (dividendo, divisor) => {
    console.log("Resultado = " + Math.floor(dividendo / divisor)) // menor valor inteiro
    console.log(`Resto = ${dividendo % divisor}`)
}

divisao(10, 2)