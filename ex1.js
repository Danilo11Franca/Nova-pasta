const input = require('readline-sync').question;

var a = input()

// // var pLetra = a[0]
// var pLetra = a.slice(0,1)

// pLetra = pLetra.toUpperCase()

// a = a.toLowerCase()

// a = pLetra + a.slice(1)

// console.log(a)

// numero

console.log("R$ " + a.replace(".", ","))