✅ Ejercicio Propuesto: Gestor de Películas Favoritas

Objetivo:
Crear una aplicación web para gestionar una lista de películas favoritas, usando pattern factory, closures y localStorage como caché.

🎬 FUNCIONALIDADES REQUERIDAS
1️⃣ Agregar películas a la lista

El usuario debe ingresar:

Título

Director

Año

Género

Debe validarse que:

Ningún campo esté vacío

El año sea numérico

2️⃣ Guardar automáticamente en LocalStorage

Cada vez que se agregue o elimine una película, la lista debe sincronizarse con localStorage.

3️⃣ Listar películas

Mostrar la lista completa de películas cargadas desde:

La memoria (cierre/closure)

localStorage (caché persistente)

4️⃣ Filtrar películas por género

Ejemplo: ver solo "Acción" o "Comedia".

5️⃣ Buscar películas por título

El usuario debe poder buscar coincidencias parciales.
Ejemplo: buscando “mar” coinciden "Matrix" y "El mar adentro".

6️⃣ Eliminar películas

Debe existir un botón para borrar cada película.

🏗️ Requisitos técnicos
✔️ Closure

Tendrás un módulo que almacena la lista de películas en memoria:

const MovieManager = (function () {
    let movies = [];

    return {
        get: () => movies,
        add: movie => movies.push(movie),
        remove: id => movies = movies.filter(m => m.id !== id),
        setAll: list => movies = list
    };

})();

✔️ Pattern Factory

Un factory para crear películas:

function MovieFactory(title, director, year, genre) {
    return {
        id: crypto.randomUUID(),
        title,
        director,
        year,
        genre
    };
}

✔️ Sincronización con LocalStorage

Al iniciar la página → cargar desde localStorage

Al agregar o borrar → guardar de nuevo

function saveToLocalStorage() {
    localStorage.setItem("movies", JSON.stringify(MovieManager.get()));
}

✔️ Filtrar y buscar
function filterByGenre(genre) {
    return MovieManager.get().filter(movie => movie.genre === genre);
}

function searchMovies(text) {
    return MovieManager.get().filter(movie =>
        movie.title.toLowerCase().includes(text.toLowerCase())
    );
}
