/*
const splittedText = 'textoxta'.split('x')
console.log(splittedText)


const splittedText1 = 'texto'.replace('texto', 'olá')
console.log(splittedText1)

const nullvariable = null
console.log(typeof nullvariable)

var user = {
    name: 'Susana'
}

user.name = 'Natan'
user['name'] = 'Bruno'

const prop = 'name'
user[prop] = 'Juliana'

user.nomeinteiro = 'Susana de Lima'
console.log(user.nomeinteiro)
console.log(user)
delete user.name
console.log(user)

console.log(Object.keys(user))
console.log(Object.values(user))
Object.assign({}, user, {age: 20} )
console.log(Object.assign({}, user, {age: 20}))
*/


function fn(){
    return 'code here'
}

const arrowFn = () => 'code here'
const arrowFn2 = () => {
    //MAis deu uma expressão
    return 'code here'
}

//Funções também são objetos
fn.prop = 'posso criar propriedades'

console.log(fn())
console.log(fn.prop)
console.log(fn)

//Recebe parâmetros 

const logValue = value => console.log(value)
const logFnResult = fnParam => console.log(fnParam())
logFnResult(fn)

// Recebe e retorna funções
const controlFnExec = fnParam => allowed =>{
    if(allowed) {
        fnParam()
    }
}

const handleFnExecution = controlFnExec(fn)
handleFnExecution(true)
handleFnExecution()

// controlFnExec como função
/*
function controlFnExec(fnParam){
    return function(allowed){
        if(allowed){
            fnParam()
        }
    }
}
*/

const users =[ 'Susana', 'Natan', 'Bruno']
const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons  = [
    {
        name: 'Susana',
        age: 20,
        gender: gender.WOMAN
    },
    {
        name: 'Natan',
        age: 26,
        gender: gender.MAN
    }, 
    {
        name: 'Bruno',
        age: 17,
        gender: gender.MAN
    }
]

persons.forEach((person, index, arr) => {
    console.log(`Nome: ${person.name}`)
    console.log(index)
    console.log(arr)
})

const mens = persons.filter(persons => persons.gender === gender.MAN)
console.log(`Nova lista apenas com homens:`, mens)

const personWithCourse = persons.map(person => {
    person.course = 'introdução ao javascript'
    return person
})

console.log(`pessoas com adição de course`, personWithCourse)

const totalAge = persons.reduce((age, person) => {
    age += person.age
    return age
}, 0)

console.log(totalAge)