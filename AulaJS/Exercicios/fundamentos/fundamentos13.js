/*
    13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

const tipoDoDia = dia => {
    switch (dia) {
        case (1 || 7 || 8 || 14 || 15 || 21 || 22 || 28 || 29):
            return 'Fim de semana!'
            break;
        case (2||3||4||5||6||9||10||11||12||13||16||17||18||19||20||23||24||25||26||27||30||31):
            return 'Dia útil!'
            break;
        default:
            return 'Dia invalido'
            break;
    }
}

console.log(tipoDoDia(1))
console.log(tipoDoDia(2))
console.log(tipoDoDia(0))