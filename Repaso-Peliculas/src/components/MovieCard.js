import { Storage } from "../utils/storage";

export const createMovieCard=(movie)=>{
    const divMovie= document.createElement("div")
    divMovie.classList.add("movie-card")

    divMovie.dataset.id=movie.id;

    if(Storage.isWatched(movie.id)){
        movieCard.classList.add("movie-watched")
    }
    const imagen = document.createElement("img")
    imagen.classList.add("movie-poster")
    imagen.src= `http://localhost:3000/${movie.poster.path}`

    const info = document.createElement("div")
    info.classList.add("movie-info")

    const titulo =document.createElement("p")
    titulo.classList.add("movie-title")
    titulo.textContent=movie.title
    info.append(titulo)

    const rating=document.createElement("p")
    rating.classList.add("movie-rating")
    rating.textContent=`⭐${vote_average}`
    info.append(rating)

    const date= document.createElement("p")
    date.classList.add("movie-date")
    date.textContent=movie.release_date
    info.append(date)


    divMovie.append(info,imagen)

    // Eventos 

    divMovie.addEventListener("click",()=>{
        if(div.classList.contains("movie-watched")){
            divMovie.classList.remove("movie-watched")
            Storage.removeWatchedMovie(movie.id)
        }else{
            divMovie.classList.add("movie-watched")
            Storage.addWatchedMovie(movie.id)
        }

    })

    divMovie.addEventListener("contextmenu",(e)=>{
        e.preventDefault()
        if(divMovie.classList.contains("movie-watched")){
            divMovie.classList.remove("movie-watched")
            Storage.removeWatchedMovie(movie.id)
        }
    })

    divMovie.addEventListener("dblclick",()=>{
        divMovie.remove();
        
    })
    return divMovie
}