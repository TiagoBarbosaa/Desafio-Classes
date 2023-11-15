class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe
let heroi1 = new Heroi("Loz", 15, "ninja");
let heroi2 = new Heroi("Kadaj", 20, "guerreiro");
let heroi3 = new Heroi("Yazoo", 21, "monge");
let heroi4 = new Heroi("Sephiroth", 25, "mago");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();