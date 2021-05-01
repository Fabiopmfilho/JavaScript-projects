const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function(x, y) { 
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()

// -----------------------------------------------------

const soma2 = (x, y) => x + y

const imprimir2 = (a, b, operacao = soma) => console.log(operacao(a, b))

imprimir2(7, 7)

const pessoa2 = {
    falar() { 
        console.log('Coé') 
    }
}

pessoa2.falar()