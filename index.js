function CalcularRank(vit,drt){
    let saldoVitorias = vit - drt;
    let nivel;
 if(vit ==10){
    console.log("O Player Estar No Nível");
       nivel = "Ferro";
} else if(vit >=11 && vit <=20){
     console.log("O Héroi Está No Nível")
       nivel = "Bronze"
} else if(vit >=21 && vit <=50){
    console.log("O Héroi Está No Nível")
        nivel = "Prata"
} else if(vit >=51 && vit <=80){
    console.log("O Héroi Está No Nível")
        nivel = "Ouro"
} else if(vit >=81 && vit<=90){
      console.log("O Héroi Está No Nível")
        nivel = "Diamante"
} else if(vit >=91 && vit <=100){
     console.log("O Héroi Está No Nível")
        nivel = "Lendário"
} else if(vit ==101){
        console.log("O Héroi Está No Nível")
            nivel = "Imortal"
  } return {saldoVitorias,nivel};
}
let vit = 45;
 let drt = 20;
    let resultado = CalcularRank(vit,drt)
      let saldoVitorias = resultado.saldoVitorias;
        let nivel = resultado.nivel;
  console.log("O Saldo Do Player é : ",saldoVitorias,"E Seu Nível é : ", nivel)