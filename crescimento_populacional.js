var popA = 80000
var popB = 200000

var taxaA = 1.03
var taxaB = 1.015

var ano = 0

while(popA < popB){
    console.log(popA + "\n" + popB + "\n" + ano + "\n")
    
    popA = popA * taxaA
    popB = popB * taxaB

    // if(popA >= popB){
    //     console.log(popA + "\n" + popB + "\n" + ano + "\n")
    //     break
    // }

    ano++
}

