/**
 * 1. Criando funções simples:

a. Abra sua IDE.

b. Crie um arquivo JavaScript chamado funcoes.js.

c. Dentro do arquivo, crie uma função chamada saudacao, que simplesmente imprime “Olá, mundo!” no console.

d. A função deverá chamar saudacao().
 */
function saudacao(){
console.log('Olá, Mundo!')
}
saudacao();

/**2. Passando parâmetros para funções:

a. Crie uma função de saudação para aceitar um parâmetro nome.

b. Dentro da nova função, imprima uma mensagem de saudação personalizada que inclua o nome passado como argumento.

c. Chame a função novaSaudacao() com diferentes nomes como argumento para testar. */

function novasaudacao(nome){
    console.log(`Olá ${nome} como estas?`);
}
novasaudacao("Arlindo Lima");

/**
 * 3. Crie uma função chamada soma.

a. Esta função deve aceitar dois parâmetros, a e b, e retornar a soma deles.

b. Chame a função soma com alguns pares de números como argumentos e imprima o resultado no console.
 */
function soma(a,b){
    return a+b;
}
console.log(`O resultado Soma é ${soma(10,13)}`);
