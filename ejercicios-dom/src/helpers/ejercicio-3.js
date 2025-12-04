import { peliculas } from "../db/data";
const PORT= import.meta.env.VITE_PORT
const URL= import.meta.env.VITE_URL
const URL_PORT=`${URL}:${PORT}`


export function createEjercicio3(){
    const app = document.getElementById("app")
    const container= document.createElement("div")
    container.classList="movies-container"
    
    //  H1
    const encabezado=document.createElement("h1")
    encabezado.classList="movie-title"
    encabezado.textContent="📽️Peliculas"
    container.appendChild(encabezado)


    peliculas.forEach(peli=>{
        const divPeli= document.createElement("div")
        divPeli.className="movie-card"

        const titulo= document.createElement("h3")
        titulo.className="movie-title"
        titulo.textContent=peli.titulo

        const año= document.createElement("p")
        año.className="movie-year"
        año.textContent=peli.año

        
        const rating = document.createElement("p")
        rating.className="movie-rating"
        const numStar= Math.floor(peli.rating/2)
        const estrella= "⭐".repeat(numStar)
        rating.textContent=`${peli.rating}/10 ${estrella}`

        divPeli.appendChild(titulo)
        divPeli.appendChild(año)
        divPeli.appendChild(rating)
        container.appendChild(divPeli)
    })
    




    app.appendChild(container)
}

export async function createEjercicio3Fetch(){
    try {
        const app = document.getElementById("app")
        const container= document.createElement("div")
        container.classList="movies-container"
        //  H1
        const encabezado=document.createElement("div")
        const h1=document.createElement("h1")
        h1.classList="movie-title"
        h1.textContent="📽️Peliculas"
        encabezado.appendChild(h1)
        container.appendChild(encabezado);


        const response= await fetch(`${URL_PORT}/peliculas`)
        if(!response.ok){
            throw new Error("Error")
        }

        const data = await response.json();

        data.forEach(peli=>{
            const divPeli= document.createElement("div")
            divPeli.className="movie-card"

            const titulo= document.createElement("h3")
            titulo.className="movie-title"
            titulo.textContent=peli.titulo

            const año= document.createElement("p")
            año.className="movie-year"
            año.textContent=peli.año

        
            const rating = document.createElement("p")
            rating.className="movie-rating"
            
            const numStar= Math.floor(peli.rating/2)
            const estrella= "⭐".repeat(numStar)
            rating.textContent=`${peli.rating}/10 ${estrella}`
            
            const imagen = document.createElement("img")
            imagen.src=peli.imagen
            imagen.alt=peli.titulo
            imagen.classList.add("movie-image")
            divPeli.appendChild(imagen)


            

            divPeli.appendChild(titulo)
            divPeli.appendChild(año)
            divPeli.appendChild(rating)
            container.appendChild(divPeli)
        })

        app.appendChild(container)
    } catch (error) {
        throw new Error(error)
    }
}