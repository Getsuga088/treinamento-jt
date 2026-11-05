const prompt = require('prompt-sync')(); 

let contador = 0;
let nome;

do {
    nome = prompt("Qual é o seu nome?");
    contador++;

} while (nome.toLowerCase() !== "artur");

console.log("Meu nome é " + nome);
console.log("Número de tentativas: " + contador);
