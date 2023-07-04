function menor(x, y){

    if(x < y){
        return x
    }
    else{
       return y
    }
}

// let res = menor(8, -7)

// console.log(res)


function potencia(a, b){
    // let res = Math.pow(a, b)

    let res = a**b

    // let res = 1

    // for (let i = 0; i < b; i++){
    //     res = res * a
    // }

    return res
}

// let res = potencia(4, 5)

// console.log(res)


function ehImpar(n){
    return n % 2 == 1
}

// let res = ehImpar(7)

// console.log(res)


function seila(n){

    if (typeof n == "number"){
        if (n > 0){
            return "positivo"
        }
        else if (n < 0){
            return "negativo"
        }
        else {
            return "neutro"
        }

    }
    else{
        return "valor invalido"
    }
}

// let res = seila(8)

// console.log(res)

function cubo(x){
    return potencia(x, 3)
}

// let res = cubo(8)

// console.log(res)

function inverteEssaJoca(s){

    s = s.split("")

    s.reverse()

    s = s.join("")

    return s
}

// let res = inverteEssaJoca("roger guedes")

// console.log(res)

function quantos(s, c){
    let contador = 0

    for(let i = 0; i < s.length; i++){
        if (s[i] == c){
            contador++
        }
    }

    return contador
}

// let res = quantos("roger guedes", "g")

// console.log(res)

function converteHora(horario){
    horario = horario.split(":")

    let hora = horario[0]
    let minuto = horario[1]

    let periodo = ""

    if (hora >= 12){
        if (hora != 12){
            hora = hora - 12
        }
        periodo = "P.M"
    }
    else{
        periodo = "A.M"
    }


    console.log(hora, minuto)

    return hora + ":" + minuto + " " + periodo
}

// let res = converteHora("0:48")

// console.log(res)

function dados(){

    let l = [0, 0, 0, 0, 0, 0]

    let i = 1
    while(i <= 1000000){

        let n = Math.ceil(Math.random() * 6)

        l[n-1]++

        i++
    }

    for(let j = 0; j < 6; j++){
        console.log("o numero " + (j+1) + " apareceu " + l[j] + " vezes")

    }
}


dados()