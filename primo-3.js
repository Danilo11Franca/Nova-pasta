const input = require("readline-sync").question

var n=BigInt(input("Numero: "))
var i=5n

var ehPrimo=true

var contador = 1n

if (n > 2 && n % 2n == 0n){
    ehPrimo = false
}

if (n > 3 && n % 3n == 0n){
    ehPrimo = false
}

while (i < (n/2n + 1n) && n > 2 && ehPrimo) {
    console.log("repeticao:",contador)
    if (n % i == 0) {
        ehPrimo=false
        break
    }

    i = i + 3n
    contador++
}

if (ehPrimo) {
    console.log("Primo")

}
else 
    console.log("Nao Primo")
