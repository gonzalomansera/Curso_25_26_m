//Crear una funcion utilizando promise y otra async await que se traiga de https://jsonplaceholder.typicode.com/photos  el title
// y la imagen
//importaciones 
const API_VITE_URL=import.meta.env.VITE_API_URL;
const API_VITE_WEATHER=import.meta.env.VITE_API_WEATHER;
// Funcion usando PROMISE
export function dataJSONPromise(){
  console.log('---------DATA JSON PROMISE-----------');
  fetch(API_VITE_URL)
    .then(response=> response.json())
    .then((data)=>{
      console.log(`Data obtenida de ${API_VITE_URL}`);
      console.log(data);
    })
    .catch((error)=> console.log('Error ...'))
    .finally(message => console.log('Cerrando JSONPromise'));
    
}
    

// Funcion usando async

export const  dataJSONAsync= async ()=>{
  console.log('-------DATA JSON ASYNC----------');
  try {
    const response= await fetch(API_VITE_URL);
    if(!response.ok){
      throw new Error('error al traer la data');
    }   
    const data = await response.json();
    const dataParseada= data.map((infoFoto)=>{
      return{
        title: infoFoto.title,
        img: infoFoto.thumbcliUrl
      };
    });
    console.log(dataParseada);
    return dataParseada;
    
  } catch (error) {
    console.log('Error ...');
  }
};


//Crear una funcion que se le pase como parametro una ciudad y automaticamente 
// te pase temperatura, humedad y viento 


export async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_VITE_WEATHER}&units=metric&lang=es`
    );
    let descripcion=data.weather[0].main;
    let icono = '';
    switch(descripcion){
    case 'clear':
      icono='☀️';
      break;
    case 'clouds':
      icono='🌤️';
      break;
    case 'Rain':
      icono='🌧️';
      break;
    case 'Thunderstorm':
      icono='🌩️';
      break;
    default:
      icono='☀️';
    }
    
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }

    const data = await response.json();

    const dataParseada = {
      ciudad: data.name,
      temperatura: data.main.temp,
      humedad: data.main.humidity,
      viento: data.wind.speed,
      descripcion: data.weather[0].main,
      icono,
    };

    console.log(dataParseada);
    return dataParseada;

  } catch (error) {
    console.error('Error al obtener el clima:', error.message);
  }
}


// FUncion con PROMISE

export const getWeatherPromise = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_VITE_WEATHER}&units=metric&lang=es`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      return response.json();
    })
    .then((data) => {
      let descripcion=data.weather[0].main;
      let icono = '';
      switch(descripcion){
      case 'clear':
        icono='☀️';
        break;
      case 'clouds':
        icono='🌤️';
        break;
      case 'Rain':
        icono='🌧️';
        break;
      case 'Thunderstorm':
        icono='🌩️';
        break;
      default:
        icono='☀️';
      }
      const dataParseada = {
        ciudad: data.name,
        temperatura: data.main.temp,
        humedad: data.main.humidity,
        viento: data.wind.speed,
        descripcion: data.weather[0].main,
        icono,
      };

      console.log(dataParseada);
      return dataParseada;
    })
    .catch((error) => {
      console.error('Error al obtener el clima:', error.message);
    });
};
