// Importa as classes necessárias
const MinhaClasse = require('./MinhaClasse');
const MinhaClasse2 = require('./MinhaClasse2');
const MinhaClasse3 = require('./MinhaClasse3');
const MinhaClasse4 = require('./MinhaClasse4');

// EXERCICIO 1 E 2
// Cria uma instância da MinhaClasse
let minhaClasse = new MinhaClasse;

// Imprime o nome da instância
console.log("\nNome: ", minhaClasse.nome, "\n");

// EXERCICIO 3 E 4
// Cria uma instância da MinhaClasse2
let minhaClasse2 = new MinhaClasse2;

// Chama o método somar da instância e imprime o resultado
let resultado = minhaClasse2.somar(5, 7);
console.log("Total da soma: ", resultado, "\n");

// EXERCICIO 3
// Cria uma instância da MinhaClasse3
let minhaClasse3 = new MinhaClasse3;

// Imprime o nome da instância
console.log("Nome: ", minhaClasse3.nome, "\n");

// EXERCICIO 4
// Cria uma instância da MinhaClasse4
let minhaClasse4 = new MinhaClasse4;

// Imprime a idade e o nome da instância
console.log("Idade:", minhaClasse4.idade, "anos,\nNome:", minhaClasse4.nome, "\n");