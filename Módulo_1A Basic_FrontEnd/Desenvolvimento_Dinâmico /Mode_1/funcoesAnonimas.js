//
let somarNumeros=function(num1,num2){
    console.log(`Número 1: ${num1}`);
    console.log(`Número 2: ${num2}`);

    let resultado = num1 + num2;
    console.log(`O resultado é ${resultado}`);
    
    return resultado;
}

let mostrar= somarNumeros(5,10);
console.log(`O resultado da chamada da funçõe somarNumeros é ${mostrar} `);
