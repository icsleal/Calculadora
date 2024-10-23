class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacou() {
    let ataque;

    if (this.tipo === "mago") {
      ataque = "usando magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "usando espada";
    } else if (this.tipo === "monge") {
      ataque = "usando artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "usando shuriken";
    } else {
      ataque = "não usou nenhum método de ataque";
    }
    console.log(`O ${this.nome} ${this.tipo} atacou usando ${ataque}`);
  }
}

const heroi1 = new heroi("yenneffer", 20, "mago");
heroi1.atacou();

const heroi2 = new heroi("gohan", 18, "guerreiro");
heroi2.atacou();

const heroi3 = new heroi("naruto", 20, "monge");
heroi3.atacou();

const heroi4 = new heroi("jackie chan", 30, "ninja");
heroi4.atacou();
