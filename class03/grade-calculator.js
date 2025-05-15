let grade = 90 

// Using conditional statements to determine the letter grade
if (grade >= 90) {
    console.log("You got an A!");
}else if (grade >= 80) {
    console.log("You got a B!");
}else if (grade >= 70) {
    console.log("You got a C!");
}else if (grade >= 60) {
    console.log("You got a D!");
}else {
    console.log("You got an F!");
}

// Using a switch statement to determine the letter grade

switch (grade) {
    case 90:
        console.log("You got an A!");
        break;
    case 80:
        console.log("You got a B!");
        break;
    case 70:
        console.log("You got a C!");
        break;
    case 60:
        console.log("You got a D!");
        break;
    default:
        console.log("You got an F!");
}

