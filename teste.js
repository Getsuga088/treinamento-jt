const prompt = require('prompt-sync')();

let cadastro = []
let respostadocadastro = []
let menu = []

//Menu:
console.log("-----Menu-----")
console.log('1 - Cadastro:' )
console.log('2 - Lista de cadastro: ')
console.log('3 - Pesquisar cadastro pelo nome: ')
console.log('4 - Encerrar sistema: ')
menu = (prompt('Qual opção: '))

console.log('')

if (menu === '1') {
do {
console.log('Iniciando cadastro...')
cadastro.push(prompt('Qual o seu nome? '))
cadastro.push(prompt('Qual livro você deseja? '))
cadastro.push(prompt('Data do emprestimo: '))
console.log('')
respostadocadastro = (prompt('Deseja realizar um novo cadastro? S/N: ')).toUpperCase();
console.log('')
} while (respostadocadastro !== 'N');
}

console.log('')

if (menu === '2') {
console.log('Gerando lista de cadastros...')
for (let i = 0; i < cadastro.length; i+= 3) {
console.log(`Nome: ${cadastro[i]}`)
console.log(`Livro do emprestimo: ${cadastro[i+1]}`)
console.log(`Data do emprestimo: ${cadastro[i+2]}`)
console.log('')
}
}
console.log('')

if (menu === '3') {
console.log('Pesquise o seu cadastro ')
console.log('')
let nome = (prompt('Qual o seu nome? '))
for (let i = 0; i < cadastro.length; i += 3) {
if (nome === `${cadastro[i]}`) {
console.log('');
console.log('--- Cadastro do cliente ---')
console.log(`Nome: ${cadastro[i]}`)
console.log(`Livro do emprestimo: ${cadastro[i+1]}`)
console.log(`Data do emprestimo: ${cadastro[i+2]}`)
}
}
}