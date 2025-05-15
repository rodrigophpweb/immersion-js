const cars = {
	"Ferrari F40": 1994,
	"Shelby GT500": 1967,
	"i30": 2011,
}

for(model in cars) {
	console.log(`The car is ${model} and your age is ${cars[model]} `);
}
