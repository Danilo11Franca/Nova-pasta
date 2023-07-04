const input = require('readline-sync').question

var n = input("n: ")

var sizeN = n.length

n = BigInt(n)
var e = BigInt(input("e: "))

while (true) {
    var opcao = input("criptografar mensagem? (S/n)").toLowerCase()

    if (opcao == "n") {
        break
    }

    var m = input("mensagem a ser criptografada: ")

    var ascii = ''
    for (i = 0; i < m.length; i++) {
        var aux = m.charCodeAt(i).toString()

        if (aux.length < 3){
            aux = "0"*(3-aux.length) + aux
        }
        ascii = ascii + aux
    }

    console.log(`mensagem em ASCII: ${ascii}`)
    m = BigInt(ascii)
    // var m = BigInt(input("numero a ser criptografado: "))

    if (m < n-1n){
        // var c = m**e % n
        var c = expmod(m, e, n)
        console.log(`mensagem criptografada: ${c}`)
    }
    else{
        console.log(`mensagem precisa ter no máximo ${Math.floor((sizeN/3) -1)} caracteres\n`)
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
