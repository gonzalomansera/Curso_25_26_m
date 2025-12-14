

let moviesCache=[]
const url="http://localhost:3001/results"
const fetchAllMovies=async()=>{
    try{
        const response= await fetch(url)
        if(!response.ok){console.log("Error al extraer la data ")}
        const data = await response.json()
        moviesCache=data
        return moviesCache
    }catch{
        console.log("Error al extraer la data")
        return []
    }
}

const getMovies=()=>{
    return[...moviesCache]
}

const getMovieById=(movieID)=>{
    return moviesCache.find(movie=> movie.id===movieID)
}

export const MovieService = {
    fetchAllMovies,getMovieById,getMovies
}