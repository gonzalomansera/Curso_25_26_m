import { Storage } from "../helpers/storage"

export default function createMovieCard(movie) {
    const movieCard = document.createElement("div")
    movieCard.classList.add("movie-card")

    // Identificamos cada card con un nombre unico 
    movieCard.dataset.id= movie.id
    
    //Esta la card en el localStorage   
    if(Storage.isWatched(movie.id)){
        movieCard.classList.add("movie-watched")
    }
    const poster = document.createElement("img")
    poster.classList.add("movie-poster")
    poster.src= `http://localhost/${movie.poster_path}`

    // Info de la pelicula 
    const info = document.createElement("div")
    info.classList.add("movie-info")


    const title = document.createElement("h3")
    title.classList.add("movie-title")
    title.textContent= movie.title

    // Rating 
    const rating = document.createElement("h4")
    rating.classList.add("movie-rating")
    rating.textContent= `⭐ ${movie.vote_average}`


    // Ensamblamos la card 
    info.appendChild(title)
    info.appendChild(rating)
    movieCard.appendChild(poster)
    movieCard.appendChild(info)

    // Eventos
    movieCard.addEventListener("click",()=>{
        if(movieCard.classList.contains("movie-watched")){
            movieCard.classList.remove("movie-watched")
            Storage.removeWatchedMovie(movie.id)
        }else{
            movieCard.classList.add("movie-watched")
            Storage.addWatchedMovie(movie.id)
        }
    });

    movieCard.addEventListener("dblclick",()=>{
        movieCard.remove()
    });

    movieCard.addEventListener("contextmenu",(e)=>{
        e.preventDefault()
        if(movieCard.classList.contains("movie-watched")){
            movieCard.classList.remove("movie-watched")
            Storage.removeWatchedMovie(movie.id)
        }
    });
    
    return movieCard
}
