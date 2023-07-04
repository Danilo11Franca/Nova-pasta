const input = require('readline-sync').question;


var nome = input("digite seu nome: ")
var idade = input("digite sua idade: ")


console.log("bom dia " + nome + ", sua idade é " + idade)
console.log("bom dia", nome, ", sua idade é ", idade)
console.log(`bom dia ${nome}, sua idade é ${idade}`)