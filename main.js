/*
A entrega deste exercício consiste em:

• Crie uma classe de uma abstração;

• Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente;

• Crie pelo menos três instâncias de objetos;

• No repositório do curso crie uma branch chamada oo_js e armazene o código do exercício.

• Envie o link do repositório através da plataforma. 
*/

class Animal {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    emitirSom() {
        console.log(`${this.nome} faz algum som.`);
    }

    mover() {
        console.log(`${this.nome} se move de alguma forma.`);
    }
}

class Cachorro extends Animal {
    constructor(nome, raca) {
      super(nome, "Cachorro");
      this.raca = raca;
    }
  
    emitirSom() {
      console.log(`${this.nome} late.`);
    }
  
    correr() {
      console.log(`${this.nome} está correndo.`);
    }
  }
  
  class Gato extends Animal {
    constructor(nome, pelagem) {
      super(nome, "Gato");
      this.pelagem = pelagem;
    }
  
    emitirSom() {
      console.log(`${this.nome} mia.`);
    }
  
    brinca() {
      console.log(`${this.nome} esta brincando.`);
    }
  }
  
  const cachorro1 = new Cachorro("Rambo", "Vira-Lata");
  const gato1 = new Gato("Raje", "Pelo Curto");
  const cachorro2 = new Cachorro("Salgueiro", "Fila Tigrado");
  
  cachorro1.emitirSom();
  cachorro1.correr();
  
  gato1.emitirSom();
  gato1.brinca();
  
  cachorro2.emitirSom();
  cachorro2.correr();
  
