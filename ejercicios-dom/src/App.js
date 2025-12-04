import createEjercicio10 from "./helpers/ejercicio-10";



export default async function createApp(){
    const app = document.getElementById("app")
    app.appendChild(await createEjercicio10())
}