//Create a function called doSomething that takes a string and a callback function. it should display the string and then execute the callback.

function doSomething(string, whatFruit){
	console.log(`The String is ${string}`)
	whatFruit('Apple');
}

function whatFruit(value){
	console.log(`The fruit is ${value}`)
}

doSomething('Fernanda', whatFruit)
