Algoritmo "Escolha"

Var
// Seção de Declarações das variáveis 
OP: INTEIRO
Num,Resultado:Real;

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreval("Opções:")
   Escreval("1 Calcular o dobro do número")
   Escreval("2 Calcular o triplo do número")
   Escreval("Escolha uma opção")
   Leia(OP)
   Escreva ("Digite o número:")
   Leia(Num)
   Escolha(OP)
              Caso 1
                   Resultado<-Num*2
              caso 2
                   Resultado<-Num*3
   Fimescolha
   Escreval(Resultado)
   

Fimalgoritmo