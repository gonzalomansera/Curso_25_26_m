import { imagesData } from "../data/images";


export function createImageCard(image,onImageClick,onFavoriteToggle){
    //Contenedor principal (card)
    const card= document.createElement("div")
    card.className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group relative"
    card.dataset.imageId=image.id;
    const img= document.createElement("img")
    img.src=image.url;
    img.alt=image.title;
    img.className="w-full h-64 object-cover group-hover:opacity-90 transition-opacity "
    // img.onerror=()=>img.src="/images/image-not-found.png"
    card.appendChild(img)

    //Gestionar el corazon del favorito 
    const favoriteButton= document.createElement("button")

    //Informacion de la imagen 
    const infoContainer = document.createElement("div")
    infoContainer.className="p-4 bg-white"
    
    const title = document.createElement("h3")
    title.className="font-bold text-lg text-gray-800 mb-2"
    title.textContent=image.title;
    infoContainer.appendChild(title)


    const author= document.createElement("p")
    author.className="font-semibold text-sm text-gray-600"
    author.textContent=`Realizado por: ${image.author}`;
    infoContainer.appendChild(author)

    //Introducir todo en card 
    card.appendChild(infoContainer)

    //Evento de la 
    card.onclick=()=>{
        alert(image.id) //Se sustituira por onImageClick
    }
    return {
        element:card,
        //Aqui iran las funciones 
        //isFavorito <= es fav la imagen?
        //setFavorite <= convertir en fav esta imagen 

    }



}



function createImageGrid(images,onImageClick,onFavoriteToggle){
    //Creamos un MAP privado que guarde las tarjetas.
    const imageCards= new Map();
    const grid= document.createElement("div")
    grid.className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
    //Crear cada tarjeta con createImageGrid
    images.forEach(image=>{
        const cardComponent= createImageCard(image,onImageClick,onFavoriteToggle);
        imageCards.set(image.id,cardComponent);
        grid.appendChild(cardComponent.element);
    })
    return {
        element:grid
    }
}
export default createImageGrid;