Algoritmo "Escolha"

Var
// Se��o de Declara��es das vari�veis 
OP: INTEIRO
Num,Resultado:Real;

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
   Escreval("Op��es:")
   Escreval("1 Calcular o dobro do n�mero")
   Escreval("2 Calcular o triplo do n�mero")
   Escreval("Escolha uma op��o")
   Leia(OP)
   Escreva ("Digite o n�mero:")
   Leia(Num)
   Escolha(OP)
              Caso 1
                   Resultado<-Num*2
              caso 2
                   Resultado<-Num*3
   Fimescolha
   Escreval(Resultado)
   

Fimalgoritmo