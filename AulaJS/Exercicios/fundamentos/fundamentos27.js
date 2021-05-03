// Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

const sla = (altura1, taxaCrescimento1, altura2, taxaCrescimento2) => {
    taxaCrescimento1 = taxaCrescimento1 / 100
    taxaCrescimento2 = taxaCrescimento2 / 100

    let kid1 = altura1 * (taxaCrescimento1 + 1)
    let kid2 = altura2 * (taxaCrescimento2 + 1)

    if (altura1 > altura2) {
        console.log('Criança 1 é maior')
        console.log(kid1, altura1, taxaCrescimento1)

        for (let i = 0; altura1 > altura2; i++) {
            kid1 *= i
        }
        console.log(kid1, kid2, i)
    } else {
        console.log('Criança 2 é maior')
    }
}

// const eMaior = (altura1, altura2) => {
//     let itsTrue = false
//     for (let i = 0; altura1 > altura2; i++) {
        
//     }
// }

sla(132, 5, 115, 3)