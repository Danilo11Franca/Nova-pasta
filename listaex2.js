let lista = [5, 1]

let listaOrdenada = []

if (lista[0] < lista[1]){
    listaOrdenada = lista
}
else{
    listaOrdenada.push(lista[1], lista[0])
}

console.log(listaOrdenada)