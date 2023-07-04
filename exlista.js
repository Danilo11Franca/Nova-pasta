const input = require("readline-sync").question

let n1 = parseFloat(input("numero 1: "))
let n2 = parseFloat(input("numero 2: "))

let lista = []

if (n1 < n2){
    lista.push(n1, n2)

    // lista = lista.concat([n1,n2])

    // lista.unshift(n2)
    // lista.unshift(n1)

    // lista.splice(0,0,n1)
    // lista.splice(1,0,n2)
}
else{
    lista.push(n2, n1)
}

console.log(lista)