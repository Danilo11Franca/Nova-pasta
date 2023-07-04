// let l = [1,2,3,4,6,5]

function verificaOrdenacao(lista){
    let ordem = true
    for(let i = 0; i < lista.length-1; i++){
        if (lista[i] > lista[i+1]){
            ordem = false
            break
        }
    }

    return ordem
}

let inicio = new Date()

let l = [54, 0, 1, 1587, -1, -1, 800, 3, 3]

let ordenado = verificaOrdenacao(l)

let contador = 0
while(!ordenado){

    contador++
    // console.log("repetição",contador)
    
    for(let i = 0; i < l.length; i++){
        
        let r = Math.floor(Math.random() * l.length)

        let aux = l[r]
        l[r] = l[i]
        l[i] = aux
    }

    ordenado = verificaOrdenacao(l)
}

console.log("repetições:", contador)
console.log(l)

let final = new Date()

let tempo = (final - inicio)/1000

console.log("\ntempo:", tempo, "segundos")