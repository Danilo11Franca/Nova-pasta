let key = 72

let chave3 = "chave3"

obj = {
    chave: 11,
    chaves: "64",
    11: "onze",
    "chave3": key,
    lista: [1,2,3,4,5],
    o: {
        1: "um",
        2: "doiz",
        3: "treiz"
    },
    delete: 50
}

obj.nova_chave = "chave real"
obj["mais uma nova chave"] = "chave chavi"

obj.chaves = 71

obj.renato = obj.chave

obj.chave = "xave atualizada"


// delete obj.delete


console.log(Object.keys(obj))


