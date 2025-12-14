import createMovieCard from "./components/MovieCard";
import MovieList from "./components/MovieList";
import { MovieService } from "./services/movieService"; 

// Variable global para almacenar el estado de la aplicación
// Nota: 'currentMovies' no se usa realmente en la lógica actual, 
// ya que 'MovieService' gestiona los datos.
let currentMovies = []; 
let sortOrder = 'default';
export default function createApp(){
    const container = document.createElement('div');
    
    // --- Header ---
    const header = document.createElement('header');
    header.classList.add('header');
    const title = document.createElement('h1');
    title.textContent='MovieList Gonzalo Mansera Ruiz';
    header.appendChild(title);
    container.appendChild(header);
    

    // --- Main ---
    const main = document.createElement('main');
    main.classList.add('main-container');

    // --- Contenedor de Filtros ---
    const filterContainer = document.createElement('div');
    filterContainer.classList.add('filters-container');
    
    // Searcher
    const searchContainer = document.createElement('div');
    searchContainer.classList.add('search-container');
    const searcher = document.createElement('input');
    searcher.type = 'text';
    searcher.placeholder = 'Buscar película...';
    searcher.classList.add('search-input'); 
    searchContainer.appendChild(searcher);
    filterContainer.appendChild(searchContainer);


    // Selector de Ordenación
    const sortContainer = document.createElement('div');
    sortContainer.classList.add('sort-container');
    
    const sortLabel = document.createElement('label');
    sortLabel.textContent = 'Ordenar por:';
    sortContainer.appendChild(sortLabel);

    const sortSelect = document.createElement('select');
    sortSelect.classList.add('sort-select');
    
    const defaultOption = document.createElement('option');
    defaultOption.value = 'default';
    defaultOption.textContent = 'Por Defecto';
    sortSelect.appendChild(defaultOption);

    const ascOption = document.createElement('option');
    ascOption.value = 'title_asc';
    ascOption.textContent = 'Título (A-Z)';
    sortSelect.appendChild(ascOption);

    const descOption = document.createElement('option');
    descOption.value = 'title_desc';
    descOption.textContent = 'Título (Z-A)';
    sortSelect.appendChild(descOption);
    
    sortContainer.appendChild(sortSelect);
    filterContainer.appendChild(sortContainer);
    
    main.appendChild(filterContainer);

    // Contenedor de Películas
    const moviesGridContainer = document.createElement('div');
    main.appendChild(moviesGridContainer);
    container.appendChild(main);


    // --- Lógica de Renderizado y Filtrado/Ordenación ---

    const updateRender = (m) => {
        // Limpiar el contenedor antes de renderizar
        moviesGridContainer.innerHTML = ''; 
        m.forEach(peli => {
            container.append(createMovieCard(peli))
            
        });
        // Renderizar la lista actualizada de películas
        // Nota: Asegúrate que MovieList(movies) retorna un elemento DOM.
       // const movieListElement = MovieList(movies);
        //moviesGridContainer.appendChild(movieListElement);
    }
    
    const applyFiltersAndSort = () => {
        // 1. Obtener películas ordenadas del servicio
        let movies = MovieService.getSortedMovies(sortOrder); 

        // 2. Aplicar filtro de búsqueda
        const searchTerm = searcher.value.toLowerCase().trim();
        
        if (searchTerm) {
            movies = movies.filter(movie => 
                // Asumiendo que 'movie.title' existe
                movie.title.toLowerCase().includes(searchTerm) 
            );
        }

        // 3. Renderizar resultado
        updateRender(curr);
    }


    // --- Event Listeners ---
    
    // 1. Buscador (Se dispara en cada tecla)
    searcher.addEventListener('input', applyFiltersAndSort);
    
    // 2. Ordenación
    sortSelect.addEventListener('change', (e) => {
        sortOrder = e.target.value;
        applyFiltersAndSort();
    });


    // --- Inicialización ---

    const init = async () => {
        // CORRECCIÓN: Llamar a la función con paréntesis ()
        try {
            currentMovies = await MovieService.fetchMovies(); 
            console.log(currentMovies)
            updateRender(currentMovies)
        } catch (error) {
            console.error("Error al cargar las películas iniciales:", error);
            // Opcional: Mostrar un mensaje de error al usuario
            moviesGridContainer.innerHTML = '<div>Error al cargar los datos. Por favor, inténtelo de nuevo.</div>';
        }
    }
    
    // Llamar a init() para cargar los datos cuando la App se monta
    init();

   
    function render(){
        return container;
    }
    return{
        render
    }
}