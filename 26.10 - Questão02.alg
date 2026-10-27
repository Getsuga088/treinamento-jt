Algoritmo "ResultadoDeVendas"

var
valordejaneiro, valordefevereiro,valordemarço: real

inicio
escreval ("Qual o valor da venda de janeiro?: ")
leia (valordejaneiro)
escreval ("Qual o valor da venda de fevereiro?: ")
leia (valordefevereiro)
escreval ("Qual o valor da venda de março?: ")
leia (valordemarço)

//Mes que atingiu a meta de vendas:
se (valordejaneiro + valordefevereiro + valordemarço >17000) entao
escreval ("Parabens, você atingiu a meta de vendas dos três meses!")
senao
escreval ("Infelizmente, você não atingiu a meta de vendas dos três meses!")
fimse

//Mes que mais vendeu:
se ((valordejaneiro>valordefevereiro) e (valordejaneiro>valordemarço)) entao
escreval("Janeiro teve a maior venda, no valor de R$ " + valordejaneiro + "!")
fimse

se ((valordefevereiro>valordejaneiro) e (valordefevereiro>valordemarço)) entao
escreval("Fevereiro teve a maior venda, no valor de R$ " + valordefevereiro + "!")
fimse

se ((valordemarço>valordejaneiro) e (valordemarço>valordefevereiro)) entao
escreval("Março teve a maior venda, no valor de R$ " + valordemarço + "!")
fimse

//Meses que empataram em vendas:
se ((valordejaneiro=valordefevereiro) e (valordejaneiro=valordemarço)) entao
escreval("Os três meses tiveram vendas iguais!")
fimse

se (valordejaneiro=valordefevereiro) entao
escreval ("Janeiro e fevereiro tiveram vendas iguais!")
fimse

se (valordejaneiro=valordemarço) entao
escreval ("Janeiro e março tiveram vendas iguais!")
fimse

se (valordefevereiro=valordemarço) entao
escreval ("Fevereiro e março tiveram vendas iguais!")
fimse

se (((valordejaneiro<>valordefevereiro) e (valordejaneiro<>valordemarço) e (valordefevereiro<>valordemarço))) entao
escreval ("Todos os meses tiveram valores de vendas diferentes!")
fimse

fimalgoritmo