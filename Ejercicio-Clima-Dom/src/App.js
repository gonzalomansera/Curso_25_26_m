import fetching from "./helpers/fetching"
const VITE_API_WEATHER= import.meta.env.VITE_API_WEATHER


export default async function createApp() {
  // Cache de localStorage
  let cache= new Map()
  const dataLocalStorage= localStorage.getItem("weatherData")
  if(dataLocalStorage){
    cache=new Map(JSON.parse(dataLocalStorage))
  }
  // Funcion que se encarga de guardar datos en localStorage
  const saveCache= () => localStorage.setItem('weatherData',JSON.stringify([...cache]))



  // Ver Favoritos
  let favoritos= [];
  const getFavoritos= localStorage.getItem('CiudadesFavoritas')
  if(getFavoritos){
    favoritos=JSON.parse(getFavoritos);
  }

  // Guardar favoritos 

  const saveFavoritos = () => localStorage.setItem('CiudadesFavoritas',JSON.stringify([...favoritos]));


  // Contenedor principal 
  const container= document.createElement("div")
  container.className=("weather-app")

  // Header
  const header= document.createElement("header")
  header.textContent = "Weather Zaidin"
  

  container.appendChild(header)


  // Main
  //Buscador
  const formulario = document.createElement("form")
  const buscador= document.createElement("nav")
  const input= document.createElement("input")
  const boton= document.createElement("button")
  boton.textContent= "Buscar"
  input.placeholder="Ciudad o aeropuerto "
  
  buscador.appendChild(input)
  buscador.appendChild(boton)
  formulario.appendChild(buscador)
  container.appendChild(formulario)


  // Contenedor Principal 
  const tarjetaPrincipal=document.createElement("div")
  tarjetaPrincipal.innerHTML="<h2>Aqui ira todo</h2>"
  const renderCityWeather = (city) => {
    tarjetaPrincipal.innerHTML=""

    if(!city){
      tarjetaPrincipal.innerHTML="<h2> No hay ninguna ciudad</h2>"
    }
    const divTarjeta= document.createElement("div")
    const nombreCiudad= document.createElement("h2")
    nombreCiudad.textContent= city.name
    divTarjeta.appendChild(nombreCiudad);
    const temperatura= document.createElement("p")
    
    tarjetaPrincipal.appendChild(divTarjeta)

  }
  
  container.appendChild(tarjetaPrincipal)

  //Favoritos
  const favoritosContainer=document.createElement("div")
  const nombresCiudades=document.createElement("p")
  favoritosContainer.textContent="Aqui iran los favoritos "
  nombresCiudades.textContent="Granada"
  
  container.appendChild(favoritosContainer)

  
  // Footer
  const footer= document.createElement("footer")
  const texto= document.createElement("p")
  const enlaces= document.createElement("a")
  texto.textContent= "Copyright Autor: Gonzalo Mansera"
  enlaces.innerHTML = '<a href="https://github.com/gonzalomansera" target="_blank"">GitHub</a>';

  footer.appendChild(texto)
  footer.appendChild(enlaces)
  container.appendChild(footer)


  // ----------------Funciones-----------------------


  //Buscamos la ciudad
  
  const search = async (q) =>{
    const city = q.toLowerCase().trim();

    if(!city){
      
    }

    if (cache.has(city)){
      renderCityWeather(cache.get(city))
      console.log(`Usando el cache para ${city}`)
      return;
    }

    const response = await fetching(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${VITE_API_WEATHER}&units=metric&lang=es`)
    renderCityWeather(response)
    
  }

  // Creamos el evento del boton 

  formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    search(input.value)
    input.value='';

  })

  //Añadimos a favoritos



  return container
}
