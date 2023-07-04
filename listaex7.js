l = [7, -5, 22, 69, 21, 567, 13, 666, 587, 1.2, 777, 3/4, -1000]

let menor = l[0]
let maior = l[0]

let soma = 0

for (let i = 0; i < l.length; i++){
    if (l[i] < menor){
        menor = l[i]
    }

    if (l[i] > maior){
        maior = l[i]
    }

    soma = soma + l[i]
}


let media = soma / l.length

console.log("menor = " + menor)
console.log("maior = " , maior)
console.log(`soma = ${soma}`)
console.log("media", "= " + `${media}`)