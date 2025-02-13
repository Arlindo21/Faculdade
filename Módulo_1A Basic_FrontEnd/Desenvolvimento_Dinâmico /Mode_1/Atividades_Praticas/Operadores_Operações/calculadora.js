//Funçao da operação de uma calculador
function calculadora(num1,num2){

    //Operações artimecas
    let adicao= num1+num2 ;
    let subtracao= num1-num2;
    let multiplicacao= num1*num2;
    let divisao= num1/num2;
    let modulo= num1%num2;
    let exponecial= num1**num2;

//Ic=ncrementar e decrementar(Adicionar e reduzir)
    let incrementer=num1 ;
    incrementer++;
    let decrementar=num2;
    decrementar--;



    console.log(`Adição ${num1} + ${num2}= ${adicao}`);
    console.log(`Subtração ${num1} - ${num2}= ${subtracao}`);
    console.log(`Multiplicação ${num1} * ${num2}= ${multiplicacao}`);
    console.log(`Divisão ${num1} / ${num2}= ${divisao}`);
    console.log(`Módulo ${num1} % ${num2}= ${modulo}`);
    console.log(`Exponencial ${num1} ** ${num2}= ${exponecial}`);
    console.log(`Incrementar ${num1}++= ${incrementer}`);
    console.log(`Decrementar ${num2}--= ${decrementar}`);
    
}
calculadora(2,4)
let z = 10 / 0
console.log(z);