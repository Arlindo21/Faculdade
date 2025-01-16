// função anônima
let somarNumeros=function(num1,num2){
    console.log(`Número 1: ${num1}`);
    console.log(`Número 2: ${num2}`);

    let resultado = num1 + num2;
    console.log(`O resultado é ${resultado}`);
    
    return resultado;

}

//chamando a função pela variavel 
let mostrar= somarNumeros(5,10);
console.log(`O resultado da chamada da funçõe somarNumeros é ${mostrar} `);

//
function executarFuncao(funcao, valor1, valor2){
    console.log(`\n Executando  a função passada como argunmento ou parametro `);
    return funcao(valor1, valor2);

} 
//passando a função anonima como argumento para outra
let resultadoExecucao= executarFuncao(somarNumeros,7,3);
console.log(resultadoExecucao);

//Definindo e chamando uma função anonima 
let resultadoImediato=(function(a,b){
    console.log("\nFunção de chamada imediata: ");
    return a*b;
    
})(10,3);
console.log("Resultado da função anonima chamada imediata; " + resultadoImediato);
