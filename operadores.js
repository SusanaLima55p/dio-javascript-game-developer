
let arr =[3, 5, 7]
arr[3] = 'hello'

for(let i in arr){
    console.log(i)
}

for(let i of arr){
    console.log(i)
}

class Person {
    #name = ''
    constructor(initialName){
        this.#name = initialName
    }
    setName(name) {
        this.#name = name
    }
    getName(){
        return this.#name
    }
}

const p = new Person('Susana')
console.log(p)
console.log(p.getName())
console.log(p.name)
p.setName('Natan')
console.log(p.getName())