let moviesCache = []
const url= "http://localhost:3000/results"
const fetchMovies= async ()=>{
    try {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error("Error fetching movies")
        }
        const data = await response.json()
        moviesCache=data.results //<--------- results es la tabla en la que estaba 
        return moviesCache  
    } catch (error) {
        throw new Error("Error fetching movies")
    }
}
const getMovies= () =>{
    return [...moviesCache]
}

const getMovieByID = (movieID) =>{
    return moviesCache.find(movie => movie.id === movieID)
}


export const MovieService = {
    fetchMovies,
    getMovies,
    getMovieByID
}
