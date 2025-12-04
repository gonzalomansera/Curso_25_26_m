import { fetching } from "../helpers/fetching";

export default async function createMovieApp() {
    const API_PELICULAS = import.meta.env.VITE_API_PELICULAS;

    // --- Cache localStorage ---
    let cache = new Map();
    const dataLocal = localStorage.getItem("peliculas_favoritas");
    if (dataLocal) {
        cache = new Map(JSON.parse(dataLocal));
    }

    const saveLocal = (nombre, caracteristicas = {}) => {
        cache.set(nombre, caracteristicas);
        localStorage.setItem("peliculas_favoritas", JSON.stringify(Array.from(cache)));
    };

    // --- Container principal ---
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.minHeight = "100vh";

    // --- HEADER ---
    const divHeader = document.createElement("div");
    divHeader.className = "header";

    const headerContent = document.createElement("div");
    headerContent.className = "header-content";

    const titulo = document.createElement("h2");
    titulo.className = "header-title";
    titulo.textContent = "🎬 Gestor de Películas Favoritas";
    headerContent.appendChild(titulo);

    const searchFilterContainer = document.createElement("div");
    searchFilterContainer.className = "search-filter-container";

    const formulario = document.createElement("form");
    formulario.className = "search-form";

    const buscador = document.createElement("input");
    buscador.className = "search-input";
    buscador.type = "text";
    buscador.placeholder = "🔍 Buscar película...";
    formulario.appendChild(buscador);

    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "search-btn";
    boton.textContent = "Buscar";
    formulario.appendChild(boton);

    searchFilterContainer.appendChild(formulario);

    const select = document.createElement("select");
    select.className = "genre-select";
    select.innerHTML = `<option value="">Todos los géneros</option>`;
    searchFilterContainer.appendChild(select);

    headerContent.appendChild(searchFilterContainer);
    divHeader.appendChild(headerContent);

    // --- MAIN ---
    const mainContainer = document.createElement("div");
    mainContainer.className = "main-container";
    mainContainer.style.flex = "1"; // para empujar footer abajo

    const moviesGrid = document.createElement("div");
    moviesGrid.className = "movies-grid";
    mainContainer.appendChild(moviesGrid);

    // --- Función para renderizar películas ---
    const renderMovies = (movies) => {
        moviesGrid.innerHTML = "";
        movies.forEach(peli => {
            const divPeli = document.createElement("div");
            divPeli.className = "movie-card";

            const tituloPeli = document.createElement("h2");
            tituloPeli.className = "movie-title";
            tituloPeli.textContent = peli.title;
            divPeli.appendChild(tituloPeli);

            const movieInfo = document.createElement("div");
            movieInfo.className = "movie-info";
            const director = document.createElement("p");
            director.innerHTML = `<strong>Director:</strong> ${peli.director}`;
            movieInfo.appendChild(director);
            const year = document.createElement("p");
            year.innerHTML = `<strong>Año:</strong> ${peli.year}`;
            movieInfo.appendChild(year);
            divPeli.appendChild(movieInfo);

            const genero = document.createElement("span");
            genero.className = "movie-genre";
            genero.textContent = peli.genre;
            divPeli.appendChild(genero);

            const movieActions = document.createElement("div");
            movieActions.className = "movie-actions";
            const btnDelete = document.createElement("button");
            btnDelete.className = "btn-delete";
            btnDelete.textContent = "🗑️ Eliminar";
            btnDelete.addEventListener("click", () => {
                movies.splice(movies.indexOf(peli), 1);
                saveLocal(peli.title, peli); // opcional si quieres guardar
                renderMovies(movies);
            });
            movieActions.appendChild(btnDelete);
            divPeli.appendChild(movieActions);

            moviesGrid.appendChild(divPeli);
        });
    };

    // --- Obtener películas ---
    let peliculas = await fetching(API_PELICULAS);
    // Guardar géneros en select
    const generos = [...new Set(peliculas.map(p => p.genre))];
    generos.forEach(g => {
        const option = document.createElement("option");
        option.value = g;
        option.textContent = g;
        select.appendChild(option);
    });

    renderMovies(peliculas);

    // --- Formulario añadir película ---
   const formAdd = document.createElement("form")
    formAdd.className = "add-movie-form"

    // Título del formulario
    const formTitle = document.createElement("h3")
    formTitle.className = "form-title"
    formTitle.textContent = "➕ Añadir Nueva Película"
    formAdd.appendChild(formTitle)

    // Grid de campos
    const formGrid = document.createElement("div")
    formGrid.className = "form-grid"

    // Campo Título
    const titleGroup = document.createElement("div")
    titleGroup.className = "form-group"
    const titleLabel = document.createElement("label")
    titleLabel.className = "form-label"
    titleLabel.textContent = "Título"
    const inputTitle = document.createElement("input")
    inputTitle.className = "form-input"
    inputTitle.type = "text"
    inputTitle.required = true
    titleGroup.appendChild(titleLabel)
    titleGroup.appendChild(inputTitle)
    formGrid.appendChild(titleGroup)

    // Campo Director
    const directorGroup = document.createElement("div")
    directorGroup.className = "form-group"
    const directorLabel = document.createElement("label")
    directorLabel.className = "form-label"
    directorLabel.textContent = "Director"
    const inputDirector = document.createElement("input")
    inputDirector.className = "form-input"
    inputDirector.type = "text"
    inputDirector.required = true
    directorGroup.appendChild(directorLabel)
    directorGroup.appendChild(inputDirector)
    formGrid.appendChild(directorGroup)

    // Campo Año
    const yearGroup = document.createElement("div")
    yearGroup.className = "form-group"
    const yearLabel = document.createElement("label")
    yearLabel.className = "form-label"
    yearLabel.textContent = "Año"
    const inputYear = document.createElement("input")
    inputYear.className = "form-input"
    inputYear.type = "number"
    inputYear.required = true
    yearGroup.appendChild(yearLabel)
    yearGroup.appendChild(inputYear)
    formGrid.appendChild(yearGroup)

    // Campo Género
    const genreGroup = document.createElement("div")
    genreGroup.className = "form-group"
    const genreLabel = document.createElement("label")
    genreLabel.className = "form-label"
    genreLabel.textContent = "Género"
    const inputGenre = document.createElement("select")
    inputGenre.className = "form-select"
    inputGenre.required = true
    generos.forEach(g => {
      const option = document.createElement("option")
      option.value = g
      option.textContent = g
      inputGenre.appendChild(option)
    })
    genreGroup.appendChild(genreLabel)
    genreGroup.appendChild(inputGenre)
    formGrid.appendChild(genreGroup)

    // Añadir grid al formulario
formAdd.appendChild(formGrid)

    // Botón submit
    const submitBtn = document.createElement("button")
    submitBtn.className = "btn-submit"
    submitBtn.type = "submit"
    submitBtn.textContent = "✨ Añadir Película"
    formAdd.appendChild(submitBtn)


    formAdd.appendChild(inputTitle);
    formAdd.appendChild(inputDirector);
    formAdd.appendChild(inputYear);
    formAdd.appendChild(inputGenre);
    formAdd.appendChild(submitBtn);
    mainContainer.appendChild(formAdd);

    formAdd.addEventListener("submit", (e) => {
        e.preventDefault();
        const nueva = {
            title: inputTitle.value,
            director: inputDirector.value,
            year: inputYear.value,
            genre: inputGenre.value
        };
        peliculas.push(nueva);
        saveLocal(nueva.title, nueva);
        renderMovies(peliculas);
        formAdd.reset();
    });

    // --- Buscador ---
    const filterMovies = () => {
        const q = buscador.value.toLowerCase().trim();
        const genreFilter = select.value;
        const filtered = peliculas.filter(p => 
            p.title.toLowerCase().includes(q) &&
            (genreFilter === "" || p.genre === genreFilter)
        );
        renderMovies(filtered);
    };

    boton.addEventListener("click", filterMovies);
    buscador.addEventListener("input", filterMovies);
    select.addEventListener("change", filterMovies);

    // --- FOOTER ---
    const footer = document.createElement("footer");
    footer.className = "footer";

    const divFooter = document.createElement("div");
    divFooter.className = "footer-content";

    const p1 = document.createElement("p");
    p1.textContent = `Gestor de Películas Favoritas © ${new Date().getFullYear()}`;
    const p2 = document.createElement("p");
    p2.textContent = "Desarrollado por: Gonzalo Mansera";

    divFooter.appendChild(p1);
    divFooter.appendChild(p2);
    footer.appendChild(divFooter);

    // --- Añadir todo al container ---
    container.appendChild(divHeader);
    container.appendChild(mainContainer);
    container.appendChild(footer);

    return container;
}
