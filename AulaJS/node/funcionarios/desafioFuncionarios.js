const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const brasileiros = f => f.pais === 'Brazil'
const genero = f => f.genero === 'M'
const menorSalario = (salario, salarioAtual) => {
    return salario < salarioAtual.salario ? salario : salarioAtual
}
const salario = (salario) => {
    if (salario > 2000 && salario < 1000){
        return 
    }
}

axios.get(url).then(response => {
    const funcionarios = response.data

    const func = funcionarios
        .filter(brasileiros)
        .filter(genero)
        .reduce(menorSalario)
    
    console.log(func)
})