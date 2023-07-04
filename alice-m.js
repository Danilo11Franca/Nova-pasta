const input = require('readline-sync').question

while(true){
    var p = BigInt(input("informe o valor de 'p' que seja primo: "))

    var ehPrimo = true
    var i = 2n

    var opcao = input("verificar se eh primo? (S/n) ").toLowerCase()

    if (opcao == "s"){
        while(i < p && p > 2){
            if(p % i == 0){
                ehPrimo = false
            }
            i++
        }

        if (p < 2){
            ehPrimo = false
        }
    }


    if (ehPrimo){
        console.log(`p: ${p} é primo\n`)
        break
    }
    console.log("'p' precisa ser primo")
}

while(true){
    var q = BigInt(input("informe o valor de 'q' que seja primo: "))

    var ehPrimo = true
    var i = 2n

    var opcao = input("verificar se eh primo? (S/n) ").toLowerCase()

    if (opcao == "s"){
        while(i < q && q > 2){
            if(q % i == 0){
                ehPrimo = false
            }
            i++
        }

        if (q < 2 || q == p){
            ehPrimo = false
        }
    }

    if (ehPrimo){
        console.log(`q: ${q} é primo\n`)
        break
    }
    console.log(`'q' precisa ser primo ou diferente de ${p}`)
}

var n = p*q

console.log(`n: ${n}\n`)

var fi = (p-1n)*(q-1n)

console.log(`fi: ${fi}\n`)

while(true){
    var e = BigInt(input(`informe o valor de 'e' entre 1 e ${fi} que seja primo entre ${fi}: `))

    var coPrimos = false
    if(e > 1 && e < fi){
        if (fi % e == 0){
            console.log(`${e} e ${fi} não são primos entre si`)
            coPrimos = true
        }
        else{
            var i = 2n

            while(i <= e){
                
                if (e % i == 0 && fi % i == 0){
                    console.log(`${e} e ${fi} não são primos entre si`)
                    coPrimos = true
                    break
                }

                i++
            }
        }

        if (!coPrimos){
            break
        }
    }
    else{
        console.log(`'e' precisa ser maior que 1 e menor que ${fi}`);
    }
}

console.log(`e: ${e}\n`);

var i = 1n

while(true){
    var d = (fi*i)+1n

    if(d % e == 0){
        d = d / e
        break 
    }
    i++
}

console.log(`d: ${d}\n`);

console.log(`chaves privadas: \n\np: ${p}, \nq: ${q}, \nd: ${d}\n`)
console.log(`chaves públicas: \n\nn: ${n}, \ne: ${e}\n`)

while(true){
    var opcao = input("descriptografar mensagem? (S/n) ").toLowerCase()

    if(opcao == "n"){
        break
    }

    var c = BigInt(input("mensagem a ser descriptografada: "))

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