const users = [];
function addUsers(name, age, interests) {
    const user = {
        'name': name,
        'age': age,
        'interests': interests
    };
    users.push(user);

    console.log(`Usuário ${user.name} adicionado com sucesso! Interesses: ${user.interests.join(', ')}`);
}
    // Chamadas da função (fora da função!)
    addUsers("Rodrigo", 42, ["programação", "Investimentos"]);
    addUsers("Fernanda", 30, ["Animais", "viagens", "Brincadeiras Adultas"]);

console.log(users);
