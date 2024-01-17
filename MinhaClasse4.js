// Importando a classe MinhaClasse3
const MinhaClasse3 = require('./MinhaClasse3');

// Conteúdo da classe MinhaClasse4 que estende MinhaClasse3
class MinhaClasse4 extends MinhaClasse3 {
    // Construtor que inicializa os atributos 'nome' e 'idade' usando o construtor da classe pai
    constructor(nome, idade) {
        super(nome);
        this.nome = "Fulano"
        this.idade = 17;
    }

    // Método que imprime a idade do objeto no console
    imprimirIdade() {
        console.log("Idade:", this.idade);
    }
}

// Exportando a classe para ser usada em outros arquivos
module.exports = MinhaClasse4;
