function somatRec(x){
    if (x <= 1){
        return 1
    }

    let res = x + somatRec(x-1)

    return res
}

function somat(x){
    let res = 0

    for(let i = 0; i <= x; i++){
        res = res + i
    }

    return res
}

function fib(x){
    if (x == 0){
        return 0
    }
    else if (x == 1){
        return 1
    }

    else{
        return fib(x-2) + fib(x-1)
    }
}

let a = fib()

console.log(a)