class Heroi {  // PascalCase no nome da classe
    constructor(nome, idade, tipo) {  // Parâmetros em português consistente
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque = "";
        switch(this.tipo) {
            case "mago": ataque = "magia"; break;
            case "guerreiro": ataque = "espada"; break;
            case "monge": ataque = "artes marciais"; break;
            case "ninja": ataque = "shuriken"; break;
        }
        return `O ${this.tipo} atacou usando ${ataque}`;
    }
    nomeHeroi(){
        return `E ${this.nome} e o nome do ${this.tipo}`;
    } 
    idadeHeroi(){   
        return `${this.idade} anos é a idade do heroi`;
    }
}
const heroi1 =[ 
    new Heroi("Gandalf", 31, "mago"),
    new Heroi("Mongabo", 41, "monge"),
];
for (let perfilH of heroi1){
    console.log(`${perfilH.atacar()} \n${perfilH.nomeHeroi()} \n${perfilH.idadeHeroi()}\n`)
}