const input = require("readline-sync").question

var x = parseInt(input("digite um numero: "))

var v1 = 0
var v2 = 1

if (x > 0){
    console.log(0)
}

if (x > 1){
    console.log(1)
}

if (x > 2){

    // var rep = 3

    // while(rep <= x){
    //     var aux = v1 + v2
    //     v1 = v2
    //     v2 = aux

    //     console.log(v2)
    //     rep++
    // }

    for (rep = 3; rep <= x; rep++){
        var aux = v1 + v2
        v1 = v2
        v2 = aux

        console.log(v2)
    }
}