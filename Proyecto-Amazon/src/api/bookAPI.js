
const API_BOOK= import.meta.env.VITE_API_BOOKS
let libros=[]

const fetchAllBooks=async ()=>{
    try{
    const response = await fetch(API_BOOK)
        if(!response.ok){throw new Error("Error al extraer la data ")}
        const data = await response.json();
        libros=data;
        return libros
    }catch{
        throw new Error("Error al extraer la data")
    }
}

const getBookById= (id)=>{
    return libros.find(book=> book.id === id)
}
    
export const createBookApi={
    fetchAllBooks,getBookById
}