class pessoa {
  constructor(nome) {
    this.nome = nome;
  }
  falar() {
    console.log(`meu nome e ${this.nome}`);
  }
}
const p1 = new pessoa("Joao");
p1.falar();

const criarPessoa = (nome) => {
  return {
    falar: () => console.log(`meu nome e ${nome}`),
  };
};
const p2 = criarPessoa("Joao");
p2.falar;
