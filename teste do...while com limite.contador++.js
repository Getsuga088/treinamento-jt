const prompt = require('prompt-sync')(); 

let contador = 0;
let nome;
do {
    nome = prompt("Escreva nomes que vem em sua mente:");
    contador++;
} while (contador <= 3);

console.log("Você digitou " + contador + " nomes.");
