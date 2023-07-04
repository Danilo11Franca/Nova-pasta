const input = require("readline-sync").question

console.log("quizz da garela")
console.log("pergunta 1: qual animal que come com o rabo")
console.log("1- elefante")
console.log("2- girafa")
console.log("3- leão")
console.log("4- pombo")
console.log("5- todos, pois nenhum animal tira o rabo pra comer")

var opcao = input()
var pontuacao = 0
if (opcao == 5){
    pontuacao = pontuacao + 5
}
else if (opcao == 1){
    pontuacao++
}

console.log("pontuação final: ", pontuacao)