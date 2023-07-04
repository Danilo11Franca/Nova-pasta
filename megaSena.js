let l = []


// USANDO WHILE

while(l.length < 6){
    let n = Math.floor(Math.random() * 60) + 1

    if (!l.includes(n)){
        l.push(n)
    }
}

// USANDO FOR

// for(let i = 0; l.length < 6; i++){
//     let n = Math.floor(Math.random() * 60) + 1

//     if (!l.includes(n)){
//         l.push(n)
//     }
// }

console.log(l)
