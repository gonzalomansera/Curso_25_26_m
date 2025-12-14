import createApp from './App'
import './style.css'


document.addEventListener("DOMContentLoaded",()=>{
  const app = document.getElementById('app');
  app.appendChild(createApp().render());
})