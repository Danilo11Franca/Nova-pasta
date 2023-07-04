const input = require("readline-sync").question

var n=BigInt(input("Numero: "))
var i=2n

var ehPrimo=true

var contador = 1n

while (i < (n/2n + 1n) && n > 2) {
    console.log("repeticao:",contador)
    if (n % i == 0) {
        ehPrimo=false
        break
    }

    i++
    contador++
}

if (ehPrimo) {
    console.log("Primo")

}
else 
    console.log("Nao Primo")
