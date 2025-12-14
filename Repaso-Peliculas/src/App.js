import { createMovieList } from "./components/MovieList";
import { MovieService } from "./services/movieService"


export default async function createApp() {
    const container = document.createElement("div")
    const peliculas = await MovieService.fetchAllMovies();
    // Header
    const divHeader= document.createElement("div")
    divHeader.classList.add("header")
    const titulo= document.createElement("h1")
    titulo.textContent="📽️ MOVIESFLIX GONZALO MANSERA"

    divHeader.append(titulo)
    // Main container

    const divMain=document.createElement("div")
    divMain.classList.add("main-container")

    //Contenedor de filtros
    const divFilter=document.createElement("div")
    divFilter.classList.add("filters-container")

    // Input de busqueda 
    const divInput= document.createElement("div")
    divInput.classList.add("search-container")

    const form = document.createElement("form")
    const inputBusqueda= document.createElement("input")
    inputBusqueda.classList.add("search-input")
    inputBusqueda.type="text"
    inputBusqueda.placeholder="Buscar pelicula..."

    form.append(inputBusqueda)
    divInput.append(form)
    divFilter.append(divInput)
    

    // Select de ordenacion 
    const divSelect = document.createElement("div")
    divSelect.classList.add("sort-select")

    const select = document.createElement("select")

    const porDefecto = document.createElement("option")
    porDefecto.value="default"
    porDefecto.textContent="Por defecto "
    select.append(porDefecto)

    const tituloAsc= document.createElement("option")
    tituloAsc.value="title-asc"
    tituloAsc.textContent="Titulo A-Z"
    select.append(tituloAsc)

    const tituloDesc= document.createElement("option")
    tituloDesc.value="title-desc"
    tituloDesc.textContent= "Titulo Z-A"
    select.append(tituloDesc)

    const valoracion= document.createElement("option")
    valoracion.value="value"
    valoracion.textContent="Valoracion (mas alta primero)"
    select.append(valoracion)

    divSelect.append(select)
    divFilter.append(divSelect)

    divMain.append(divFilter)

    // Peliculas
    const divMovies=document.createElement("div")
    peliculas.forEach(peli => {
        createMovieList(peli)
    });

    divMain.append(divMovies)
    

    container.append(divHeader)
    container.append(divMain)
    
    function render(){
        return container;
    }
    return{
        render
    }
}
