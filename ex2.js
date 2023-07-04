const input = require("readline-sync").question

// var a = input("digite um numero: ")

// var n = 0

// while(true){
//     console.log(n)
//     if (n == a){
//         break
//     }
//     n++
// }


// var n = input("digite um numero: ")
// var a = input("digite um numero: ")

// while(true){
//     console.log(n)
//     if (n == a){
//         break
//     }
//     n++
// }

// 5 x 1 = 5

var a = input("digite um numero: ")
var n = 0

while(true){
    console.log(a + "x" + n + "=" + a*n)
    if(n == 10){
        break
    }
    n++
}