//Imagine que você esta tentando aprendar a andar de bicicleta
//você decide praticar até consseguir andar por pelo menos 1 minuto sem cair

//vamos usar o loop do while para simular.

let tempoDeAndar=0;
let caiu=false;

do {
    tempoDeAndar++;
    console.log(`Andei de bike por ${tempoDeAndar} minutos..`);

    if(tempoDeAndar === 3 ){
        caiu=true
    }
    
    
} while (!caiu && tempoDeAndar < 10);