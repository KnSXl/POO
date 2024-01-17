// Definindo a classe MinhaClasse
class MinhaClasse {
  // Construtor da classe que recebe um parâmetro 'nome'
  constructor(nome) {
    // Atribuindo o valor do parâmetro 'nome' à propriedade 'nome' da instância
    this.nome = nome;
    this.nome = "Kauã"
  }

  // Método da classe para imprimir o valor da propriedade 'nome'
  imprimirNome() {
    // Exibe o valor da propriedade 'nome' no console
    console.log(this.nome);
  }
}

module.exports = MinhaClasse;