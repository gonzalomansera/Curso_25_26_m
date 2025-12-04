
export async function fetching(url) {
    try {
        const response = await fetch(url)
        if(!response.ok){
            console.log("Error al hacer fetching")
        }
        const dataFinal= await response.json()
        return dataFinal
    } catch (error) {
        console.log("Error al extraer la data")
    }
}