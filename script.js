document.getElementById('buscarButton').addEventListener('click', buscarPeliculas)

let api_Key = 'd376af3e26ba9b75563306833daa685e'
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w200'

let resultadoConteiner = document.getElementById('resultado')

function buscarPeliculas(){
        resultadoConteiner.innerHTML = 'Cargando...'

    let buscarInput = document.getElementById('buscarInput').value

    fetch( `${urlBase}?api_key=${api_Key}&query=${buscarInput}`)
    .then(respuesta => respuesta.json())
    .then(respuesta => mostrarPeliculas(respuesta.results))
}

    function mostrarPeliculas (peliculas){
        resultadoConteiner.innerHTML = ''

        if(peliculas.length === 0){
            resultadoConteiner.innerHTML = '<p> No se encontraron resultados</p>'
            return
        }

        peliculas.forEach( pelicula=> {
            let peliculaDiv = document.createElement('div')
            peliculaDiv.classList.add('movie')

            let title =  document.createElement('h2')
            title.textContent = pelicula.title

            let lanzamientoFecha  = document.createElement('p')
            lanzamientoFecha.textContent = 'Fecha de Lanzamiento: '+pelicula.release_date

            let reseña = document.createElement('p')
                reseña.textContent = pelicula.overview
            
            let imagen = document.createElement('img')
                imagen.src = urlImg + pelicula.poster_path 
            
            peliculaDiv.appendChild(imagen)
            peliculaDiv.appendChild(title)
            peliculaDiv.appendChild(lanzamientoFecha)
            peliculaDiv.appendChild(reseña)
           
            resultadoConteiner.appendChild(peliculaDiv)
        });
    }