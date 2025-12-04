const fetching= async (endpoint)=> {
    const PORT= import.meta.env.VITE_PORT || 1492
    const URL= import.meta.env.VITE_URL || "http://localhost"
    const URL_PORT=`${URL}:${PORT}`
    try {
        const response= await fetch(`${URL_PORT}/${endpoint}`)
        if(!response.ok){
            throw new Error("Error al hacer fetching")
        }else{
            const data= await response.json();
            return data 

        }
    } catch (error) {
        console.error("Error: ",error)
        throw error;
    }
}


export default fetching;