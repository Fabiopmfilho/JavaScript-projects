function Pessoa() {
    this.idade = 0

    const self = this // driblar o this, sempre apontando para Pessoa()
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

//new Pessoa
Pessoa()