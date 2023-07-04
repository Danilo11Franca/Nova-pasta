const input = require("readline-sync").question

var numero;

numero = parseInt(input('digite um numero'));

console.log(typeof numero == "number")

if (typeof numero == "number") {
  console.log('true');
} else {
  console.log('false');
}

