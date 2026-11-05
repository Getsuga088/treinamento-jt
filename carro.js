const prompt = require('prompt-sync')(); 

let modelo1,modelo2,modelo3,modelo4;
let marca;

console.log("Marcas disponiveis: ");
console.log("Ford, Chevrolet, Toyota, Honda");
marca = prompt("Digite a marca do carro que deseja: ");
console.log("Modelos disponiveis: ");
if (marca === "Ford" || marca === "ford") {
    console.log("Fiesta, Focus, Ka");
    modelo1 = prompt("Digite o modelo do carro que deseja: ");
}

if (marca === "Chevrolet" || marca === "chevrolet") {
    console.log("Onix, Cruze, S10");
    modelo2 = prompt("Digite o modelo do carro que deseja: ");
}   

if (marca === "Toyota" || marca === "toyota") {
    console.log("Corolla, Hilux, Yaris");
    modelo3 = prompt("Digite o modelo do carro que deseja: ");
}

if (marca === "Honda" || marca === "honda") {
    console.log("Civic, Accord, CR-V");
    modelo4 = prompt("Digite o modelo do carro que deseja: ");
}

if (marca === "Ford" || marca === "ford") {
    console.log("Você comprou o carro de marca " + marca + " e modelo " + modelo1 + "!");
}
if (marca === "Chevrolet" || marca === "chevrolet") {
    console.log("Você comprou o carro de marca " + marca + " e modelo " + modelo2 + "!"); 
}
if (marca === "Toyota" || marca === "toyota") {
    console.log("Você comprou o carro de marca " + marca + " e modelo " + modelo3 + "!");
}
if (marca === "Honda" || marca === "honda") {
    console.log("Você comprou o carro de marca " + marca + " e modelo " + modelo4 + "!");
}

