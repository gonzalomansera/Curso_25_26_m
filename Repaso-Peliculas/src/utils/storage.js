
const KEY= "watched_movies"
const save=(movies)=>{
    localStorage.setItem(KEY,JSON.stringify(movies))
}

const getWatchedMovies=()=>{
    const data= localStorage.getItem(KEY) || []
    if(!data)return []
    try {
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

const addWatchedMovie=(movieID)=>{
    const peliculas= getWatchedMovies()
    if(!peliculas.includes(movieID)){
        peliculas.push(movieID)
        save(peliculas)
    }
}
const removeWatchedMovie=(movieID)=>{
    const peliculas=getWatchedMovies()
    const index = peliculas.indexOf(movieID)
    if(index>=0){
        peliculas.splice(index,1)
        save(peliculas)
    }
}

const isWatched=(movieID)=>{
    const peliculas=getWatchedMovies()
    return peliculas.find(p=> p.id===movieID)
}

export const Storage={
    addWatchedMovie,removeWatchedMovie,isWatched,getWatchedMovies
}