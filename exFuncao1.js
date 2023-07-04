function soma(x, y){
    return x + y
}

function sub(x, y){
    return x - y
}

function mul(x, y){
    return x * y
}

function div(x, y){
    return x / y
}

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
