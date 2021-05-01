/*
    23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
    aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
    aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
    "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

const calcularMedia = (codAluno, n1, n2, n3) => {
    let media = 0

    if (n1 > n2 && n1 > n3) {
        media = ((n1 * 0.4) + (n2 * 0.3) + (n3 * 0.3)).toFixed(2)
    } else if (n2 > n1 && n2 > n3){
        media = ((n2 * 0.4) + (n1 * 0.3) + (n3 * 0.3)).toFixed(2)
    } else if (n3 > n1 && n3 > n2) {
        media = ((n3 * 0.4) + (n1 * 0.3) + (n3 * 0.3)).toFixed(2)
    }
    
    console.log(`Código do Aluno: ${codAluno}. Notas: ${n1}, ${n2}, ${n3}. ${media < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularMedia(1,5,6,7)