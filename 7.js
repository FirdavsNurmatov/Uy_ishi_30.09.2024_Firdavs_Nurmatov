class Box {
    constructor(length, width, height){
        this.length = length
        this.width = width
        this.height = height
    }

    getVolume (){
        let res = this.length * this.width * this.height
        return res
    }

    totalVolume (...boxes){
        let total = 0
        for(let item of boxes){
            total += item.reduce((sum,b) => sum * b)
        }
        return total
    }
}

let box = new Box(2, 4, 3)

console.log(box.getVolume())
console.log(box.totalVolume([2, 4, 3],[8, 3, 6],[1, 4, 5]))