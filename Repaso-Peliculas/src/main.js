import createApp from './App'
import './style.css'


document.addEventListener("DOMContentLoaded",()=>{
  console.log("Aplicacion iniciada correctamente ")
  const app= document.getElementById("app")
  app.appendChild(createApp().render());
})
