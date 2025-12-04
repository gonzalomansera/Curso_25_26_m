export default async function fetching(data){
    try {
        const response = await fetch(data);
        console.log(response);

        if(!response.ok){
            throw new Error("Error en la peticion")
        }
        const dataFinal = await response.json();
        return dataFinal;
    } catch (error) {
        throw new Error("Error: ",error)
    }
}