const magic = {

	replace(a, b){
        // temp = a
        a = b
        // b = a
        return a
	},

    length(data){
        let count = 0
        for(let i of data){
            count++
        }
        return count
	},

    toUpperCase(str){
        obj = {
            'a': "A",
            "b": "B",
            "c": "C",
            "d": "D",
            "e": "E",
            "f": "F",
            "g": "G",
            "h": "H",
            "i": "I",
            "j": "J",
            "k": "K",
            "l": "L",
            "m": "M",
            "n": "N",
            "o": "O",
            "p": "P",
            "q": "Q",
            "r": "R",
            "s": "S",
            "t": "T",
            "u": "U",
            "v": "V",
            "w": "W",
            "x": "X",
            "y": "Y",
            "z": "Z"
        }
        let newStr = ''
        for(let i of str){
            if(i in obj){
                newStr+=obj[i]
            }else{
                newStr+=i
            }
        }
        return newStr
	},

    repeat(data, n){
        let res = data
        while(n > 1){
            res+=data
            n--
        }
        return res
	},

    count(str){
        let letters = {}
        for(let i of str){
            if(64 < i.codePointAt() < 91 && 96 < i.codePointAt() < 123){
                let count = 0
                for(let j of str){
                    if(j == i){
                        count++
                    }
                }
                letters[i] = count                    
            }
        }
        return letters
	}
}

console.log(magic.toUpperCase('saLom'));
console.log(magic.length('salom'));
console.log(magic.replace('a','b'));
console.log(magic.repeat('salom',2))
console.log(magic.count("hello world"))