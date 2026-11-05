const prompt = require('prompt-sync')();

let nome;

do {
    nome = prompt("Qual é o seu nome?");

} while (nome.toLowerCase() !== "artur")

console.log("Meu nome é " + nome);
 
//while repete o bloco de código enquanto a condição for verdadeira.
//Se o nome for diferente de Artur → true → o while continua.
//Se o nome for Artur → false → o while para.
//toLowerCase() modifica apenas a forma utilizada na comparação, não o conteúdo original da variável nome.
//Por que declaramos a variável fora do do...? Porque precisamos que ela possa ser acessada tanto dentro do bloco quanto na condição do while.
//Por que o while não consegue acessar uma variável declarada dentro das chaves do do? Porque uma variável declarada com let dentro de um bloco só pode ser acessada dentro daquele bloco.
//Por que atribuímos o valor dentro do do? Para que o usuário possa informar um novo valor a cada repetição, atualizando o conteúdo da variável.
//não é obrigatório atribuir o valor dentro do do. Fazemos isso quando precisamos receber uma nova informação a cada repetição.
//O while pode utilizar variáveis declaradas fora do do para montar suas condições.
//O "do" inicia o bloco de instruções que será executado pelo menos uma vez e poderá ser repetido caso a condição do while resulte em true.
//do → executa o bloco.
//while → verifica a condição e controla a repetição.