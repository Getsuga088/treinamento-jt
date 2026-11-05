const prompt = require('prompt-sync')();

for (let cont=0;cont<=5;cont++){
let nomedoaluno = prompt("Digite o nome do aluno: ");
let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
let nota3 = Number(prompt("Digite a terceira nota: "));
let nota4 = Number(prompt("Digite a quarta nota: "));

media = (nota1 + nota2 + nota3 + nota4)/4;

console.log("Média do aluno " + nomedoaluno + " é: " + media);

if (media >= 6) {
    console.log("Aluno aprovado");
} else {
    console.log("Aluno reprovado");
}

}
