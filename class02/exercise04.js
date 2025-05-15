//check if a numver is even (even=remainder of division by 2 is 0) Number 12

let number = 12
let divisor = 2
let remainder = number % divisor
console.log(remainder === 0)

//Make function

function isEven(number, divisor) {
    let remainder = number % divisor
    return remainder === 0
}
console.log(isEven(12, 2))
