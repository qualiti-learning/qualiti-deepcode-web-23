class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(this.nome + ' emite um barulho.');
  }
}

class Cachorro extends Animal {
  falar() {
    console.log(this.nome + ' latidos.');
  }
}

class Cat extends Animal {
  falar() {
    super.falar();
    console.log(this.nome + ' miados.');
  }
}

let cachorro = new Cachorro('Mat');
let gato = new Cat('Nino');

cachorro.falar();
gato.falar();
