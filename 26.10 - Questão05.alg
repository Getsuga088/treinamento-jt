Algoritmo "Organizar uma viagem"

var
passageiros: real

inicio
escreval ("Quantas passageiros irão viajar?: ")
leia (passageiros)

se (passageiros <= 4) entao
escreval ("Alugar um carro de passeio!")
fimse

se (passageiros <= 8) entao
escreval ("Alugar uma mini van!")
fimse

se (passageiros <= 16) entao
escreval ("Alugar uma van!")
fimse

se (passageiros <= 40) entao
escreval ("Alugar um ônibus!")
fimse

se (passageiros > 40) entao
escreval ("Excedeu a quantidade de passageiros!")
fimse

fimalgoritmo
