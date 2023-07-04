const input = require('readline-sync').question;

var nota = input("digite o valor da nota: ");

nota = parseFloat(nota);

if(nota>=0&&nota<40){
    console.log("reprovado")

}
else if(nota>=40&&nota<60){
    console.log("recuperacao");

console.log(`faltam ${
    60-nota} pontos para passar`)

}
else if(nota>=60&&nota<=100){
    console.log("aprovado")

}
else{
    console.log("nota invalida")

}

