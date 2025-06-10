/*
 *
 * Create a main function called runGreeting that:
 * 1. Displays a welcome message
 * 2. Uses a callback function to show a second personalized message with name
 * 3. The message should use an arrow function.
 *
 */


const welcome = (greet, message) =>{
	console.log(`${greet}`)
	message()
}

function message(name){
	console.log(`Whats is your name ${name}`)
}

welcome('Hello, Welcome!', () => message('Fernanda'))
