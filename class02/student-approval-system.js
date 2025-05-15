const students = []
function checkApproval(studentName, grade) {
    const student = {
        'name' : studentName,
        'grade' : grade
    }
    students.push(student);
    let returnMessage 
    if (student.grade >= 7) {
        returnMessage = `Student ${student.name} is passed with a grade of ${student.grade}`
    }else {
        returnMessage = `Student ${student.name} is failed with a grade of ${student.grade}`
    }
    console.log(returnMessage);
}
checkApproval('John Doe', 8)
checkApproval('Tony IA', 10)
checkApproval('Rodrigo Vieira', 8)
checkApproval('Fernanda', 6)
checkApproval('Lucas', 5)
checkApproval('Tatiana', 9)
checkApproval('Marcos', 7)
