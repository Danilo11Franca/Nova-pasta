const input = require("readline-sync").question

function converteData(data){
    data = data.split('-')

    data = data.reverse()

    return data.join('/')
}

let a = input("informe a data pq o renato pediu: ")
a = converteData(a)

console.log(a)