const movies = []

function addMovie(title, director, year, genders ) {
    const movie = {
        'title': title,
        'director': director,
        'year': year,
        'genders': genders,
    }
    
    movies.push(movie)
    console.log(`Filme ${movie.title} do diretor ${movie.director} adicionado com sucesso! Gêneros: ${movie.genders.join('- ')}`)
}

addMovie('O Senhor dos Anéis: A Sociedade do Anel', 'Peter Jackson', 2001, ['Aventura', 'Fantasia'])
addMovie('60 Segundos', 'Dominic Sena', 2000, ['Ação', 'Crime'])
addMovie('Titanic', 'James Cameron', 1997, ['Drama', 'Romance'])

console.log(movies)
