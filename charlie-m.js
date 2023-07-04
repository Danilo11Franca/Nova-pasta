const input = require('readline-sync').question

var n = BigInt(input("n: "))
var e = BigInt(input("e: "))

var c = BigInt(input("c: "))

var p = 2n

while(true) {
    var ehPrimo = true
    var j = 2n

    while(j < p && p > 2){
        if(p % j == 0){
            ehPrimo = false
        }
        j++
    }

    if (ehPrimo){
        console.log(`candidato para p: ${p}`)
        if (n % p == 0){
            var q = n / p
            break
        }
    }

    p++
}
console.log(`\np: ${p}, q: ${q}\n`)

var fi = (p-1n)*(q-1n)

console.log(`fi: ${fi}\n`)

var i = 1n

while(true){
    var d = (fi*BigInt(i))+1n

    if(d % e == 0){
        d = d / e
        break 
    }
    i++
}

console.log(`d: ${d}\n`)

// var m = (c**d) % n
var m = expmod(c, d, n)

var mString = m.toString()

if (mString.length % 3 != 0){
    mString = '0' + mString
}

m = ''
for (i = 0; i < mString.length; i = i + 3) {
    const code = mString.substring(i, i + 3);

    var aux = String.fromCharCode(code)

    m = m + aux
}

console.log(`mensagem descriptografada: ${m}\n`)


function expmod(base, exp, mod) {
    if (exp == 0) return 1n;
    
    if (exp % 2n == 0) {
        return (expmod(base, (exp / 2n), mod) ** 2n) % mod;
    }
    else {
        return (base * expmod(base, (exp - 1n), mod)) % mod;
    }
}