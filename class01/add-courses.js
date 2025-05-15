const courses = [];

function addCourse(courseName, instructorName, workload, modules) {
    const course = {
        'courseName': courseName,
        'instructorName': instructorName,
        'workload': workload,
        'modules': modules,
    }
    courses.push(course);
    console.log(`Curso ${course.courseName} ministrado por ${course.instructorName} com carga horária de ${course.workload}hs adicionado com sucesso! Este treinamento compoe os módulos: ${course.modules.join(', ')}`);
}

addCourse('JavaScript', 'Tony Parceiro', 40, ['Introdução', 'Conceitos Básicos', 'Funções', 'Estrutura de Dados']);
addCourse('PHP','Rodrigo Vieira Eufrasio da Silva', 50, ['OOP', 'PDO', 'Laravel']);
addCourse('Sexologia', 'Dra Fernanda', 100, ['Anatomia', 'Psicologia', 'Práticas']);
console.log(courses);
