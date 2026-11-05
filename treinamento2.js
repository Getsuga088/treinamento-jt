const  prompt = require('prompt-sync')();

let numero=1;

console.log("Descubra o número que multiplicado por 3 é igual 0");

while (numero !== 0) {
    numero = parseInt(prompt("Digite um número: "));

    if (numero !== 0) {
        console.log("O triplo do número digitado é: " + (numero * 3));
    }
}

console.log("Parabéns! Você acertou e encerrou o programa.");

