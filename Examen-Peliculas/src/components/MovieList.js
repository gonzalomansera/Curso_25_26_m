import createMovieCard from "./MovieCard";

export default function createMovieList() {
    const container = document.getElementById("moviesContainer")

    const clear=()=>{
    container.innerHTML=" ";
    }

    const render=(movies)=>{
        clear();
        if(movies.length<=0){
            const noResult=document.createElement("div")
            noResult.classList.add("no-results")
            noResult.textContent="No hay movies"
            container.appendChild(noResult)
        }
    return ;
    }

    movies.forEach(movie => {
        const movieCard = createMovieCard(movie)
        container.appendChild(movieCard)
    });
    
    render();
    return container
}
