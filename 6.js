function squareNumber(n){
    let str = `${n}`
    let res = ''
    for(let i of str){
        res+=Number(i)**2
    }
    return +res
}

console.log(squareNumber(3229))