import { Storage } from "../utils/storage"

const url = import.meta.env.VITE_API_BOOKS
export function createBookCard(book){
    const divBooks=document.createElement("div")
    divBooks.classList.add("book-card")

    divBooks.dataset.id=book.id;
    

    

    const info = document.createElement("div")

    const titulo=document.createElement("h3")
    titulo.classList.add("book-title")
    titulo.textContent=book.title
    info.appendChild(titulo)

    const autor= document.createElement("p")
    autor.classList.add("book-autor")
    autor.textContent=book.autor
    info.appendChild(autor)

    const year = document.createElement("p")
    year.classList.add("book-year")
    year.textContent=book.year
    info.appendChild(year)

    const categoria=document.createElement("p")
    categoria.classList.add("book-category")
    categoria.textContent=book.category
    info.appendChild(categoria)

    divBooks.appendChild(info)

    //Eventos 
    divBooks.addEventListener("contextmenu",(e)=>{
        e.preventDefault()
        if(Storage.isFavorite(book)){
            Storage.removeFavorite(book.id)
        }else{
            Storage.addFavorite(book.id)
        }
    })

    divBooks.addEventListener("dblclick",(e)=>{
        e.currentTarget.remove(book);
    })

    return divBooks
}