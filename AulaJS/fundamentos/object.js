// objeto é um conjunto de chave e valor, como uma tabela
const prod1 = {} // objeto vazio que pode ser acrscentado dinamicamente
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = { // objeto criado normalmente
    nome: 'Camisa polo',
    preco: 79.90,
    ob1: {
        blabalba: 1,
        obj2: {
            blablabla: 2
        }
    }
}

console.log(prod2)