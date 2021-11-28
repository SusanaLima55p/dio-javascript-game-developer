/*
function soma(a, b){
    return a + b
}
soma(2, 2)
soma(2, 3)
soma(2, 4)
soma(2, 5)
*/

/*
function soma(a){
    return function(b){
        return a + b
    }
}

const soma2 = soma(2)

console.log(soma2(2))
console.log(soma2(3))
console.log(soma2(4))
console.log(soma2(5))
*/

/*
function fn(){
    console.log(text)

    var text = 'exemplo'

    console.log(text)
}
fn()
*/

const user = {
    name: 'Susana',
    lastName: 'Lima'
}

function getUserWithFullName(user){
    return{
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user)

console.log(userWithFullName, user)

var par2 = 80.777
var par1 = 30.666
var adicao = par1 + par2 
somar = () => adicao
console.log(somar())