import createApp from './App'
import './style.css'

document.addEventListener("DOMContentLoaded",async ()=>{
  const app = document.getElementById("app")
  const appDiv= await createApp();
  app.appendChild(appDiv)
  console.log("😁Aplicacion iniciada correctamente")
})