import { fetching } from "../helpers/fetching";

export default async function createRestaurantApp() {

    // 1. Configuración y Data
    // ----------------------------------------------------------------
    const API_RESTAURANTE = import.meta.env.VITE_API_RESTAURANTE

    // Traer data localStorage (cache)
    let cache = new Map();
    const dataLocal = localStorage.getItem("valoraciones")
    if (dataLocal) {
        // Restauramos el Map desde el JSON
        cache = new Map(JSON.parse(dataLocal))
    }

    // Guardar en localStorage
    const saveData = (nombre, valoracion = {}) => {
    cache.set(nombre, valoracion); // Actualiza el Map
    localStorage.setItem("valoraciones", JSON.stringify(Array.from(cache))); // Guarda en localStorage
    };
    
    // Contenedor principal 
    // ----------------------------------------------------------------

    const container = document.createElement("div")
    // 👉 CLASE PARA EL STICKY FOOTER
    container.classList.add("app-container"); 
    

    // Header
    // ----------------------------------------------------------------
    const header = document.createElement("header")
    header.textContent = "GonzaloAdvisor"
    // 👉 CLASE PARA EL HEADER
    header.classList.add("site-header"); 


    // Main (Contenido Principal)
    // ----------------------------------------------------------------
    const mainContainer = document.createElement("div")
    // 👉 CLASE PARA EL CONTENEDOR GRID
    mainContainer.classList.add("main-content"); 

    // Obtener datos de los restaurantes
    const restaurantes = await fetching(API_RESTAURANTE)
    
    // Bucle para crear las tarjetas de restaurante
    restaurantes.forEach(restaurante => {
        const divRestaurant = document.createElement("div")
        // 👉 CLASE CRUCIAL PARA LA TARJETA EN CSS
        divRestaurant.classList.add("review-card"); 
        
        // 1. Nombre del Restaurante
        const nombreRestaurante = document.createElement("h3")
        nombreRestaurante.textContent = restaurante.name
        divRestaurant.appendChild(nombreRestaurante)

        // 2. Categoría
        const categoria = document.createElement("p")
        categoria.textContent = restaurante.category
        divRestaurant.appendChild(categoria)
        
        // 3. Valoración (Rating)
        const valoraciones = document.createElement("p")
        valoraciones.textContent = `⭐ Rating: ${restaurante.rating} / 5`
        divRestaurant.appendChild(valoraciones)
        
        // 4. Ubicación
        const ubicacion = document.createElement("p")
        ubicacion.textContent = `📍 Ubicación: ${restaurante.location}`
        divRestaurant.appendChild(ubicacion)

        // 5. Formulario de Reseña
        const form = document.createElement("form")
        
        const input = document.createElement("input")
        input.placeholder = "Escribe una reseña... "
        form.appendChild(input)

        const inputNumber= document.createElement("select")
        for (let i=1;i<6;i++){
            const option = document.createElement("option")
            option.textContent=i
            inputNumber.appendChild(option)
        }
    

        form.appendChild(inputNumber)

        const btnEnviar = document.createElement("button")
        btnEnviar.textContent = "Enviar"
        form.appendChild(btnEnviar)

        divRestaurant.appendChild(form)


        // Apartado de reseñas

        const contenedorReseña = document.createElement("div");
        contenedorReseña.classList.add("contenedor-reseñas");
        divRestaurant.appendChild(contenedorReseña);

        //Funcion para renderizar reseñas
        const renderReviews= (nombreRestaurante,contenedor) =>{
            contenedor.innerHTML= "<h2> Reseñas </h2>"

            const valoraciones= cache.get(nombreRestaurante) || []
            valoraciones.forEach(v=>{
                const contenidoReseña= document.createElement("p")
                contenidoReseña.textContent=v.texto
                
                const estrellasReseña= document.createElement("p")
                estrellasReseña.textContent=("⭐").repeat(v.estrellas)

                const btnDelete= document.createElement("button")
                btnDelete.textContent="Eliminar"

                //Evento de eliminar
                btnDelete.addEventListener("click",()=>{
                    let valoracionesExistentes = cache.get(restaurante.name) || [];
                    valoracionesExistentes= valoracionesExistentes.filter(rv => rv !== v)
                    saveData(nombreRestaurante,valoracionesExistentes)
                    renderReviews(restaurante.name,contenedor)
                    alert("Reseña eliminada")
                })


                contenedor.appendChild(contenidoReseña)
                contenedor.appendChild(estrellasReseña)
                contenedor.appendChild(btnDelete)
            })

        }
        
        renderReviews(restaurante.name,contenedorReseña)
        // Añadir la tarjeta al contenedor principal
        mainContainer.appendChild(divRestaurant)


         // Evento del boton 
       form.addEventListener("submit", () => {

            const reseñaTexto = input.value.trim();
            const estrellas = parseInt(inputNumber.value);

            if (!reseñaTexto) return; // No hacer nada si está vacío

            // Traemos las valoraciones existentes del Map
            const valoracionesExistentes = cache.get(restaurante.name) || [];

            // Agregamos la nueva reseña
            valoracionesExistentes.push({texto:reseñaTexto, estrellas });

            // Guardamos solo UNA VEZ usando la función corregida
            saveData(restaurante.name, valoracionesExistentes);

            // Limpiamos los inputs
            input.value = "";
            inputNumber.value = "1";
});

    });
    

    // Footer
    // ----------------------------------------------------------------
    const footer = document.createElement("footer")
    // 👉 CLASE PARA EL FOOTER
    footer.classList.add("site-footer"); 
    const copyright = document.createElement("p")
    copyright.textContent = "Copyright: Gonzalo Mansera "
    footer.appendChild(copyright)



   

    

    // Añadimos al contenedor principal
    // ----------------------------------------------------------------
    container.appendChild(header)
    container.appendChild(mainContainer)
    container.appendChild(footer)


    return container
}