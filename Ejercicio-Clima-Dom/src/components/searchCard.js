/*
Variable privada que me diga si estoy buscando o no 

*/

export default async function createSearchCard(onSearch) {
let isSearching= false;

//DOM 

const container = document.createElement("div")
container.className="bg-white rounded-lg shadow-lg p-6 mb-6"

// Titulo 
const title = document.createElement("h2")
title.textContent="Buscar ciudad 🔍"

const input = document.createElement("input")
input.type="text"
input.placeholder="Ciudad o aeropuerto..."

const btnSearch = document.createElement("button")
btnSearch.textContent="Buscar"


//Componente tipo p llamado statusElement que permita especificar los siguientes estados a traves de la funcion setStatus(message,info)
// Los estados son : .loading-azul, - error-rojo, - success-verde , - info-gray 600 que permita modificar el valor del componente 
// status element

const statusElement= document.createElement("p")
statusElement.textContent=''

function setStatus(message,type="info"){
    switch(type){
        case "loading":
            statusElement.textContent=message
            statusElement.className="text-blue-600"
        break;
        case "error":
            statusElement.textContent=message
            statusElement.className="text-red-600"
        break;
        case "success":
            statusElement.textContent=message
            statusElement.className="text-green-600"
        break;
        case "info":
            statusElement.textContent=message
            statusElement.className="text-gray-600"
    }
}
async function performSearch() {

const cityName= input.value.toLowerCase().trim()
    if(!cityName){
        setStatus("No hay ninguna ciudad con ese nombre","error")
        return;
    }
    // Comenzamos la busqueda 
    isSearching=true;
    // Hacemos la busqueda 
    try {
        await onSearch(cityName)
        setStatus("Busqueda realizada correctamente","success")
    } catch (error) {
        setStatus("Error al buscar ","error")
        throw new Error("Error ",error)
    }finally {
        isSearching=false
    }
    // EVENTOS 
    btnSearch.addEventListener("click",performSearch => {

    })
    input.addEventListener("keypress",event=>{
        if(event.key==="Enter"){
            performSearchh();
        }
    })

    xxx.appendChild();
}
return {
    element,container,
    focus: ()=> input.focus(),
    clearForm: () => {
        input.value="";
        setStatus("")
        isSearching=false;
    },
    getValue: input.value.trim()
    }
}
