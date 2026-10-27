Algoritmo "alg01"

var
idade: inteiro
dataNascimento: caractere
maiorIdade: logico
salario: real

inicio
//idade <- 35
dataNascimento <- "08/04/1991"
maiorIdade <- verdadeiro
salario <- 10000.50

//escreval (idade)
//escreval (dataNascimento)
//escreval (maiorIdade)
//escreval (salario)

escreval ("Qual a sua idade?: ")
leia(idade)

escreval ("Qual o seu salário?: ")
leia(salario)

se ((idade >= 18) e (salario >= 10000.50)) entao
escreva ("você é maior de idade!")
senao
escreva ("Você é menor de idade!")
fimse

fimalgoritmo