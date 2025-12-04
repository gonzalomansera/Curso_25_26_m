
//Importamos las variables .env


import { bienvenida } from '../db/data.js';
/*
Nivel: ⭐ Muy Básico
Enunciado
Utiliza los datos del objeto bienvenida para crear un párrafo en el DOM con:
Texto obtenido del objeto bienvenida.texto
Clase CSS OBLIGATORIA: "welcome-message"
El color azul ya está definido en el CSS para esta clase
Archivo: src/ejercicio1.js
Conceptos que practicarás
✅ Importación de datos desde otro módulo
✅ Acceso a propiedades de objetos
✅ document.createElement()
✅ appendChild()
✅ classList.add()
Resultado Esperado
*/
/*
const PORT= import.meta.env.VITE_PORT
    const URL= import.meta.env.VITE_URL
    const URL_PORT=`${URL}:${PORT}`

export function createEjercicio1() {
    
    
    const container=document.createElement("div")
    
    const welcome= document.createElement('p')
    welcome.textContent=bienvenida.texto
    welcome.classList.add('welcome-message')
    
    const app= document.getElementById("app")
    app.appendChild(container);
    container.appendChild(welcome);
    
    return container
}

export async function  createEjercicio1Fetch() {
        try {   
            const app = document.getElementById("app")
            const container = document.createElement("div");
            const response = await fetch(`${URL_PORT}/bienvenida`)
 
            if (!response.ok) {
                throw new Error("ERROR");
            }
            const data = await response.json();
            const texto = data.texto;

            const parrafo = document.createElement("p");
                parrafo.textContent = texto;
                parrafo.classList.add('welcome-message');
                app.appendChild(container)
                container.appendChild(parrafo);
            return container;

        } catch(error) {
            console.log(error);
        }
    }


*/