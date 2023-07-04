const input = require('readline-sync').question

var n = BigInt(input("n: "))
var e = BigInt(input("e: "))

while (true) {
    var opcao = input("criptografar mensagem? (S/n)").toLowerCase()

    if (opcao == "n") {
        break
    }

    var m = BigInt(input("numero a ser criptografado: "))

    if (m < n-1n){
        // var c = m**e % n
        var c = expmod(m, e, n)
        console.log(`mensagem criptografada: ${c}`)
    }
    else{
        console.log(`numero precisa menor que ${n-1n}\n`)
    }
}

function expmod(base, exp, mod) {
    if (exp == 0) return 1n;
    
    if (exp % 2n == 0) {
        return (expmod(base, (exp / 2n), mod) ** 2n) % mod;
    }
    else {
        return (base * expmod(base, (exp - 1n), mod)) % mod;
    }
}
