let lista = [1,1,2]

let listaOrdenada = []


let a = lista[0]
let b = lista[1]
let c = lista[2]

if (a < b){
    if (a < c){
        listaOrdenada.push(a)

        if (c < b){
            listaOrdenada.push(c, b)
        }
        else{
            listaOrdenada.push(b, c)
        }
    }
    else {
        listaOrdenada.push(c, a, b)
    }
}
else if (b < c){
    listaOrdenada.push(b)

    if (a < c){
        listaOrdenada.push(a, c)
    }
    else{
        listaOrdenada.push(c, a)
    }
}
else{
    listaOrdenada.push(c, b, a)
}

console.log(listaOrdenada)