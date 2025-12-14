const KEY= "watched_movies"

const save=(movies)=>{
    localStorage.setItem(KEY,JSON.stringify(movies))
}

const getWatchedMovies=()=>{
    const stored= localStorage.getItem(KEY) || [];
    if(!stored){return []}
    try {
        return JSON.parse(stored)
    } catch (error) {
        return []
    }
}

const addWatchedMovie=(movieID)=>{
    const movies= getWatchedMovies()
    if(!movies.includes(movieID)){
        movies.push(movieID)
        save(movies)
    }
}

const removeWatchedMovie=(movieID)=>{
    const movies= getWatchedMovies()
    const index= movies.indexOf(movieID)
    if(index>=0){
        movies.splice(index,1)
        save(movies)
    }
}

const isWatched =(movieID)=>{
    const movies= getWatchedMovies()
    return movies.includes(movieID)
}

export const Storage = {
    getWatchedMovies,
    addWatchedMovie,
    removeWatchedMovie,
    isWatched
}