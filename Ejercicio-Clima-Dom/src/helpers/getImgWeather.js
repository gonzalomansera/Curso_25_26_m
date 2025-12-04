/*
1) Crear una funcion getWeatherByCity(cityName) que devuelva una data 
en JSON


2) Crear una funcion llamada parseWeatherData(data) que devuelva
city, pais, temperatura, humedad, viento, descripcion 


*/
const VITE_API_WEATHER= import.meta.env.VITE_API_WEATHER;
import fetching from "../helpers/fetching";

export async function getWeatherByCity(cityName){
    try{
        const data = await fetching(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${VITE_API_WEATHER}&units=metric&lang=es`)
        return data;
    }catch{
        console.log("Error al obtener la ciudad")
    }
}


export async function parseWeatherData(data){
    return {
        city:data.name ,
        pais: data.sys.country,
        temperatura: data.main.temp,
        humedad: data.main.humidity,
        viento: data.wind.speed,
        descripcion: data.weather[0].description
    }
}