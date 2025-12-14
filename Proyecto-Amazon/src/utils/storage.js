

const KEY = "favoritos";

// Función auxiliar para guardar el array de IDs en LocalStorage
const saveFavorites = (favoritesArray) => {
    localStorage.setItem(KEY, JSON.stringify(favoritesArray));
};


/**
 * 1. getFavorites(): Obtiene el array de IDs de LocalStorage.
 */
const getFavorites = () => {
   
    const favoritosJSON = localStorage.getItem(KEY) || []; 

    try {
        return JSON.parse(favoritosJSON);
    } catch (error) {
        console.error("Error al parsear favoritos de LocalStorage:", error);
        return [];
    }
};

/**
 * 2. addFavorite(bookId): Añade un ID al array de favoritos.
 */
const addFavorite = (bookId) => {

    let favoritos = getFavorites(); 
    
    if (!favoritos.includes(bookId)) {
        favoritos.push(bookId);
        saveFavorites(favoritos);
        
        console.log(`Libro con ID ${bookId} añadido a favoritos.`);
    } else {
        console.log(`El libro con ID ${bookId} ya está en favoritos.`);
    }
};

/**
 * 3. removeFavorite(bookId): Elimina un ID del array de favoritos.
 */
const removeFavorite = (bookId) => {
    const libros= getFavorites();
    const index= libros.indexOf(bookId)
    if(index>=0){
        libros.splice(index,1)
        saveFavorites(libros);
    }
};


/**
 * 4. isFavorite(bookId): Verifica si un ID está en el array de favoritos.
 */
const isFavorite = (bookId) => {
    const favoritos = getFavorites();
    return favoritos.includes(bookId);
};


export const Storage = {
    getFavorites,
    addFavorite,
    removeFavorite, 
    isFavorite      
};