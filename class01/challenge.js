let library = [];

function addBook(title, author, year) {
    let book = {
        'title': title,
        'author': author,
        'year': year
    };
    library.push(book);
}

addBook('bible', 'Moíses', 32);
addBook('Os segredos da mente milionária', 'T-Halk', '2000');

console.log(library);

