import { tareas } from "../db/data";

const PORT= import.meta.env.VITE_PORT
const URL= import.meta.env.VITE_URL
const URL_PORT=`${URL}:${PORT}`



export function createEjercicio2() {

    const app = document.getElementById("app");
    const container = document.createElement("div");

    // Encabezado
    const encabezado = document.createElement("h2");
    encabezado.textContent = "Mi lista de tareas";
    container.appendChild(encabezado);

    // Lista
    const ul = document.createElement("ul");

    // Recorrer tareas
    tareas.forEach(tarea => {

        
    });

    // Orden correcto de los elementos
    container.appendChild(ul);
    app.appendChild(container);

    return container;
}



export async function createEjercicio2Fetch(){
    try {
        const app=document.getElementById("app")
        const container = document.createElement("div")
        // H2
        const encabezado=document.createElement("h2")
        encabezado.textContent="Mi lista de tareas"
        container.appendChild(encabezado)
        
        // lISTA 
        const ul = document.createElement("ul")

        const response=await fetch(`${URL_PORT}/tareas`)
        if(!response.ok){
            throw new Error("ERROR")
        }

        const tareas= await response.json()

        tareas.forEach(tarea=>{

            const li = document.createElement("li");
            li.classList.add("task-item");

            // Icono según completada
            const icono = tarea.completada ? "✓" : "✗";

            // Texto del li
            li.textContent = `${icono} ${tarea.texto}`;

            // Si está completada → añadir clase
            if (tarea.completada) {
                li.classList.add("completed");
            }

            // Agregar li a la lista
            ul.appendChild(li);
        })
        
        container.appendChild(ul)
        app.appendChild(container)
    } catch (error) {
        throw new Error(error)
    }
}