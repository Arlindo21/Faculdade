//Usando o const
const externo="Olá, eu sou uma constante global ";

//Declaração de uma variavel Usando Var

function exemploVar(){
    if(true){
        var mensagem="Ola, Faculdade descomplica! Eu sou uma Var...";

    }
    console.log(mensagem);

}
exemploVar();

//Usando Let
function exemploLet() {
    if(true){
        let mensagem= "Ola, Faculdade descomplica! Eu sou uma Let...";
        console.log(mensagem);
   
    }
     
}
exemploLet();

//usando const

function exemploConst() {
    const mensagem= "Ola, Faculdade descomplica! Eu sou uma constante...";
        console.log(mensagem);
}
exemploConst();

//externo da const
console.log(externo);