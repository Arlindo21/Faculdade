Algoritmo "NotasNomesde5ALunos"

Var
// Se��o de Declara��es das vari�veis 
      Notas:vetor[1..5]de real
      nomes:vetor[1..5]de caracter
      i:INTEIRO
      Media,soma:real
Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
  soma<-1
         para i de 1 ate 5 faca
              escreva("Digite o nome do estudante ", i, "de 5: ")
              leia(nomes[i])
              escreva("Digite a nota do estudante ", i, "de 5: ")
              leia(Notas[i])
              soma<-soma+Notas[i]
         fimpara
    Media <-soma/i
    escreval("Media de notas da turma:", Media)

Fimalgoritmo