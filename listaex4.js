const joberto_sarlos = console.log

let l = [2,5,4,6,8,9]

// let i = 0

let condicao = i < l.length

// while(condicao){

//     let elem = l[i]

//     let condicao2 = elem % 2 == 1

//     if(condicao2){
//         l[i] = elem * 2
//     }

//     i++

//     condicao = i < l.length
// }


for (let i = 0; condicao; i++){
    let elem = l[i]

    let condicao2 = elem % 2 == 1

    if(condicao2){
        l[i] = elem * 2
    }

    condicao = i < l.length
}

joberto_sarlos(l)