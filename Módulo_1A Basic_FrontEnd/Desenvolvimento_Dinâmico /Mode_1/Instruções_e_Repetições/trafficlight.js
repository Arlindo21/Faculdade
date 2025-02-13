//Função que rceba a cor do semafaro e decide a ação do pedestre

function chechtrafficlight(ligther){
    
    switch (ligther) {
        case "verde":
            console.log("Pode atravesar a rua.");
            
            break;

        case "Amarelo":
            console.log("prepare-se para parar.");

        break;
        
        case "Vermelho":
            console.log("Para! não pode atravesar.");
        break;
            
    
        default:
            console.log("Cor invalida! Aguarde até que o semafaro esteja valido");
            
    }
        

        

        

      

}

chechtrafficlight("verde")
chechtrafficlight("Amarelo")
chechtrafficlight("Vermelho")
chechtrafficlight("Azul")
