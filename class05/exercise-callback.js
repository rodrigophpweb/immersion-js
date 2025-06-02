// Create a function that receives another function as a parameter and executes it.

function whatNameMyWife(){
	whatName(firstName);
}

function whatName(firstName){
	console.log(`The name of my wife is ${firstName}`)
}

whatNameMyWife(whatName)
