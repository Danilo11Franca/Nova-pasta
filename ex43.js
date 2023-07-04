//43, 40, 13, 32, 33, 34

const input = require("readline-sync").question


while(true){
    var nome = input("nome do atleta: ")
    
    console.log("Atleta:", nome)
    var lista = []
    
    for(i = 1; i <=5; i++){
        console.log(`${i}º salto: `)
        var salto = parseFloat(input())
        lista.push(salto)
    }
    
    var menor = 1000000
    var maior = 0
    
    for(i=0; i < 5; i++){
        var elemento = lista[i]
        console.log(`${i}º salto: ${elemento} m`)
        
        if(elemento > maior){
            maior = elemento
        }
    
        if(elemento < menor){
            menor = elemento
        }
    }
    
    var index = lista.indexOf(maior)
    
    lista.splice(index, 1)
    
    index = lista.indexOf(menor)
    
    lista.splice(index, 1)
    
    var soma = 0
    for(i=0;i<3;i++){
    
        soma = soma + lista[i]
    }
    
    var media = soma/3
    
    console.log("melhor salto:", maior)
    console.log("pior salto:", menor)
    
    console.log("media dos demais saltos:", media)
    console.log("resultado final:\n", nome, ":", media, "m")


    console.log("1- continuar\n2- sair")
    var opcao = input()

    if(opcao == 2){
        break
    }
}