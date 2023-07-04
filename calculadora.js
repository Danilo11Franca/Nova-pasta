function soma(x, y){
    return x + y
}

function sub(x, y){

    return soma(x, mul(y, -1))
}

function mul(x, y){
    let m = 0

    if (y < 0){
        for(let i = 0; i > y; i = soma(i, -1)){
            m = soma(m, -x)
        }
    }
    else{
        for(let i = 0; i < y; i++){
            m = soma(m, x)
        }
    }

    return m
}

function div(x, y){

    let somador = 0

    let i = 0

    for(i = 0; somador < x; i++){
        somador = somador + y
    }

    return i
}

// console.log(div(10, 2))

const input = require("readline-sync").question

while(true){
    console.log("1- Soma")
    console.log("2- Subtração")
    console.log("3- Multiplicação")
    console.log("4- Divisão")
    console.log("0- Sair")
    
    let opcao = input("escolha uma opcao: ")

    if (opcao == 0){
        break
    }

    else if (opcao > 0 && opcao <= 4){
        let num1 = parseFloat(input("digite o primeiro numero: "))
        let num2 = parseFloat(input("digite o segundo numero: "))
        
        if (opcao == 1){
            console.log(soma(num1, num2))
        }
        else if (opcao == 2){
            console.log(sub(num1, num2))
        }
        else if (opcao == 3){
            console.log(mul(num1, num2))
        }
        else if (opcao == 4){
            if (num2 == 0){
                console.log("undefined")
            }
            else{
                console.log(div(num1, num2))
            }
        }
    }
    else{
        console.log("opcao invalida")
    }
}