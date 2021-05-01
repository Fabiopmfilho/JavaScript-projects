const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // sem o this nao funciona
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // bind amarra o objeto para sempre usar o this
falarDePessoa()