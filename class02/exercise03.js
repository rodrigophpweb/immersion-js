//Create a variable isAdult that should be true if the person is 18 years old or older, and false otherwise. Use a logical operator

const person = {
    'name': 'Fernanda Mattos',
    'age': 30,
    'isAdult': true,
};

console.log(`Is ${person.name} an adult? ${person.isAdult && person.age >= 18}`); 
