let users = []

function registerUser(name,age){
    const user = {
        name: name,
        age: age,
    }
    users.push(user)
    if (user.name === "Paulo Senna" && user.age >= 18){
        console.log(`You ${user.name}, is block from the site!`)
    }else if (user.age >=18){
        console.log(`Welcome ${user.name}, to the site!`)

    }else{
        console.log(`Sorry ${user.name}, you need to be at least 18 years old to register.`)
    }
}

registerUser("Rodrigo Vieira", 42)
registerUser("Fernanda Mattos", 30)
registerUser("Lucas Silva", 17)
registerUser("Talita", 16)
registerUser("Samuel Silva", 13)
registerUser("Paulo Senna", 25)
