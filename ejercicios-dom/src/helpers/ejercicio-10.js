import { proyectos } from "../db/data";
import fetching from "../utils/fetching";

export default async function createEjercicio10() {
    //Contenedor principal 
    const container= document.createElement("div")
    container.classList.add("portfolio-container")

    const divEncabezado = document.createElement("div")
    const titulo=document.createElement("h2")
    titulo.textContent="💼 Portafolio de Proyectos"
    divEncabezado.appendChild(titulo)

    // Tecnologias unicas de los proyectos
    const data= fetching("proyectos")
    const tecnologies= [... new Set(data.flatMap(p => p.tecnologias))]
    const divFilter=document.createElement=("div")
    divFilter.classList.add=("filter-buttons")



    // Añadimos al container 
    container.appendChild(divEncabezado)

    return container
}