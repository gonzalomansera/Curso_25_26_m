export async function fetching(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log("Error al hacer fetching");
      return null;
    }

    const dataFinal = await response.json();
    return dataFinal;

  } catch (error) {
    console.log("Error al traer la data");
  }
}


