// Exemplo de comentários /Anotações em JavaScript
//Est é um comentario de uma Linha 
/*
    Comentário de várias Linhas:
    é utilizado principalmente para documentção do código
    ou explicações simples
*/

/*
A fução abaixo soma dois números.
Ela recebe dois parâmetros:
-a: O primeiro número
-b: o segundo número
Retorna a soma de a e b.   */
function somar(a,b){
    return a+b;//Retorna a soma de dois números
}

/**
 * sutrai o segundo número do primeiro
 * 
 * @param {number} a - o numero do qual subtrair.
 * @param {number} b - o número a ser subtraido.
 * @return {number} o resultado da subtrção
 */
function subtrair(a,b){
    return a-b;
}

let resultadosSoma = somar(42,3);
console.log(resultadosSoma)