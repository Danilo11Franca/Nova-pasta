const input = require('readline-sync').question;

var a = parseFloat(input("informe o valor do a: ")) 
var b = parseFloat(input("informe o valor do b: "))
var c = parseFloat(input("informe o valor do c: "))

var b_mais = (-b + Math.sqrt((b * b) - 4 * a * c))/(2*a)
var b_menos = (-b - Math.sqrt((b * b) - 4 * a * c))/(2*a)

var delta = (b * b) - 4 * a * c

console.log(delta)

var bascara_mais = - b + Math.sqrt(delta)

bascara_mais = bascara_mais/(2*a)

var bascara_menos = - b - Math.sqrt(delta)

bascara_menos = bascara_menos/(2*a)

// console.log("x1 = ", bascara_mais)
// console.log("x2 = ", bascara_menos)

console.log("x1 = ", b_mais)
console.log("x2 = ", b_menos)



