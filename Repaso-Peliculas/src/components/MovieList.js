import { createMovieCard } from "./MovieCard"

export const createMovieList=()=>{
     const container = document.createElement("divpeliculas")

    const clear=()=>{
    container.innerHTML='';
    }

    const render=(peliculas)=>{
        clear();
        if(peliculas.length<=0){
            const noResult=document.createElement("div")
            noResult.classList.add("no-results")
            noResult.textContent="No hay peliculas"
            container.appendChild(noResult)
        }
    
    
    peliculas.forEach(movie => {
        const movieCard = createMovieCard(movie)
        container.appendChild(movieCard)
    });
    }   
    
    render();
    return container
}