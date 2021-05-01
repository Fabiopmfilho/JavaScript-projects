/*
    Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo: 
        | Plano | Aumento |
        |   A   |   10%   |
        |   B   |   15%   |
        |   C   |   20%   |
    Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

const aumentoSalario = (salarioAtual, plano) => {
    let salarioAjustado = 0;
    switch (plano) {
        case 'A':
            return salarioAjustado = salarioAtual * 1.10
            break;
        case 'B':
            return salarioAjustado = salarioAtual * 1.15
            break;
        case 'C':
            return salarioAjustado = salarioAtual * 1.20
            break;
        default:
            return 'Plano inválido.'
            break;
    }
}

console.log(aumentoSalario(1100, 'A'))
console.log(aumentoSalario(1100, 'B'))
console.log(aumentoSalario(1100, 'C'))
console.log(aumentoSalario(1100, 'D'))