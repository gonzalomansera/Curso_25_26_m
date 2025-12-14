import { createBookApi } from "./api/bookAPI";
import { createBookCard } from "./components/bookCard";

export default async function createApp() {
    const libros= await createBookApi.fetchAllBooks();

    const app = document.getElementById("app")
    const container= document.createElement("div")
    
    //HEADER
    const divHeader=document.createElement("div")
    divHeader.classList.add("header")
    const titulo=document.createElement("h1")
    titulo.textContent="📓 AmazonBooks Lite Gonzalo Mansera"
    divHeader.appendChild(titulo)

    // MAIN
    const divContainer= document.createElement("div")
    divContainer.classList.add("main-container")

    const divBusqueda= document.createElement("div")
    divBusqueda.classList.add("search-container")
    
    const formBusqueda= document.createElement("form")
    const inputBusqueda= document.createElement("input")
    inputBusqueda.classList.add("search-input")
    inputBusqueda.type="text"
    inputBusqueda.placeholder="Buscar por titulo o autor..."

    formBusqueda.appendChild(inputBusqueda)
    divBusqueda.appendChild(formBusqueda)
    divContainer.appendChild(divBusqueda)

    // Botones
    const categorias= [ "Todos", "Fantasía", "Ciencia Ficción", "Romance", "Thriller", "Terror","Historia"]

    const divBotones= document.createElement("div")
    categorias.forEach(boton=>{
        const btn=document.createElement("button")
        btn.classList.add("category-btn")
        btn.textContent=boton
        divBotones.appendChild(btn)
    })
    divContainer.appendChild(divBotones)

    const divBooks= document.createElement("div")
    divBooks.classList.add("books-container")
    // Contenedor de libros 
    const renderBooks=()=>{
        divBooks.innerHTML=''
        libros.forEach(libro=>{
            const bookCard= createBookCard(libro)
            divBooks.appendChild(bookCard)
        })
        divContainer.appendChild(divBooks)
    }
    // Añadimos al container
    container.appendChild(divHeader)
    container.appendChild(divContainer)
    app.appendChild(container);
    renderBooks()
return container
}
