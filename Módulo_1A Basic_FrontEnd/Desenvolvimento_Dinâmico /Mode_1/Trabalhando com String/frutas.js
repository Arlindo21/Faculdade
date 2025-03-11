// Exemplo de uso de método slice()
// temos uma string com várias frutas
let frutas="maça, banana, laranja, uva, abacaxi";
console.log("tamanho de frutas:", frutas.length);

//Queremos obter uma parte da string

let partefrutas=frutas.slice(5,21)
console.log("Resultado do SLice();" + partefrutas);


// Metodo Trim 
// STRING COM ESPAÇOS VAZIOS ;

let frutaComEspaco ="              LAranja               ";
console.log(frutaComEspaco);



let frutaSemEspaco= frutaComEspaco.trim();

console.log("Resultado do trim()" + frutaSemEspaco);

//Split
let listaDefrutas="maça, banana, laranja, uva, abacaxi";
//dividindo
let arrayFrutas= listaDefrutas.split(",");
console.log("Resultado do Split()" , arrayFrutas);



