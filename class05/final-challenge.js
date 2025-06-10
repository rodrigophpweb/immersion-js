/*
 *
 * Title: Mysterious Callback
 *
 * Description:
 *
 * You must create a function called mixFunctions that receives two functions as parameters.
 * The first function should execute immediately.
 * The second should only run if the first returns a truthy value.
 *
 */

function mixFunctions(fun1, fun2) {
	console.log('The function mixFunctions, was execute')
    
	const result = fun1()

	if (result) {
		console.log('The first function returned a truthy value')
		fun2()
	}else{
		console.log('the first function returned a falsy value')
	}

}

function fun1(){
	console.log('Hey I am fun1 was functionaly')
	return true
}

function fun2(){
	console.log('Hey I am fun2 was functionaly' );
}

mixFunctions(fun1, fun2)
