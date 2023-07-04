// 5! = 5 * 4 * 3 * 2 * 1 = 120


var a = 100

var acumulador = 1

while(true){
    
    console.log("acumulador = ", acumulador)

    acumulador = acumulador * a
    console.log("a = ", a)
    a-- // a = a -1

    if (a == 1){
        break
    }
}

console.log(acumulador)

