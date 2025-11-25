import { imagesData } from "../data/images";
import createImageGrid from "./imageCard";


export default function createGalleryApp() {
  //Contenedor principal 
    const container= document.createElement("div");
    container.className ="min-h-screen bg-gradient-to-br from-purple-100 via-white to-pink-700";

  // Header
  const header= document.createElement("header")
  header.className = "bg-white shadow-lg sticky top-0 z-40";

  const headerContentDiv= document.createElement("div")
  headerContentDiv.className="max-w-7xl mx-auto px-6 py-6"

  const headerTitle= document.createElement("h1")
  headerTitle.className="text-3xl font-bold text-purple-800 mb-2"
  headerTitle.textContent="🖼️Galeria de imagenes "

  const headerSubtitle= document.createElement("p")
  headerSubtitle.className="text-gray-600"
  headerSubtitle.textContent="Aprende closures,funciones fabrica y manipulacion del DOM"

  headerContentDiv.appendChild(headerTitle);
  headerContentDiv.appendChild(headerSubtitle);
  header.appendChild(headerContentDiv);
  

  // Main
  const main = document.createElement("main")


  const counterComponent = document.createElement("h2")


  const imageModal=document.createElement("img")
  imageModal.textContent="Imagen"

  //grid de imagenes 
  const gridComponent= document.createElement("h2")

  const imageComponent= createImageGrid(imagesData);

  // Funcion para abrir el modal 
  const handleImageClick = (imageId) => {
            const modal = createImageModal(imageId);
            if (modal) {
                container.appendChild(modal.element);
            }
        };
  
  
  //Añadimos todo al main 
  main.appendChild(counterComponent)
  main.appendChild(imageModal)
  main.appendChild(gridComponent)
  main.appendChild(imageComponent.element)
  
  
  
  
  // Footer
  const footer= document.createElement("footer")
  footer.className = "bg-black text-white shadow-lg z-40";

  const footerContentDiv= document.createElement("div")
  footerContentDiv.className="max-w-7xl mx-auto px-6 py-6"

  const footerText= document.createElement("p")
  footerText.className=""
  footerText.innerHTML="https://github.com/gonzalomansera"
  footerText.textContent="Gonzalo Mansera"
  
  

  footerContentDiv.appendChild(footerText)
  footer.appendChild(footerContentDiv)

  //Añadimos todo al container 
  container.appendChild(header);
  container.appendChild(main);
  container.appendChild(footer);
      return {
        element : container,
        //funcines : asdasda();

      }
}
