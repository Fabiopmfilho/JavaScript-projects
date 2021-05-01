/*
    06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.
*/

const jurosSimples = (capitalInicial, taxaJuros) => {
    const montante = (capitalInicial * taxaJuros) + capitalInicial
    return `Juros simples = R$${montante.toFixed(2).replace(".", ",")}`
}

const jurosComposto = (capitalInicial, taxaJuros, tempoAplicado) => {
    const montante = (capitalInicial * taxaJuros * tempoAplicado) + capitalInicial
    return `Juros composto = R$${montante.toFixed(2).replace(".", ",")}`
}

console.log(jurosSimples(4500, 0.04, 10))
console.log(jurosComposto(4500, 0.04, 10))