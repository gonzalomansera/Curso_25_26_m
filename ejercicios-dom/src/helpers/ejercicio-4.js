/*
import { alojamientos } from "../db/data";
import fetching from "../utils/fetching";
export async function createEjercicio4() {

    const renderTable = (alojamientosArray) => {
        const tableContainer = document.createElement("div");
        tableContainer.classList.add("table-container");

        const table = document.createElement("table");

        // THEAD
        const thead = document.createElement("thead");
        const trHead = document.createElement("tr");

        const headers = ["Nombre", "Ubicacion", "Precio", "Rating"];
        headers.forEach(text => {
            const th = document.createElement("th");
            th.textContent = text;
            trHead.appendChild(th);
        });

        thead.appendChild(trHead);
        table.appendChild(thead);

        // TBODY
        const tbody = document.createElement("tbody");

        alojamientosArray.forEach(alojamiento => {
            const tr = document.createElement("tr");

            const tdNombre = document.createElement("td");
            tdNombre.textContent = alojamiento.nombre;
            tr.appendChild(tdNombre);

            const tdUbicacion = document.createElement("td");
            tdUbicacion.textContent = alojamiento.ubicacion;
            tr.appendChild(tdUbicacion);

            const tdPrecio = document.createElement("td");
            tdPrecio.textContent = alojamiento.precio;
            tr.appendChild(tdPrecio);

            const tdRating = document.createElement("td");
            tdRating.textContent = alojamiento.rating;
            tr.appendChild(tdRating);

            tbody.appendChild(tr);
        });

        table.appendChild(tbody);
        tableContainer.appendChild(table);

        return tableContainer;
    };

    const render = () => {
        const mainContainer = document.createElement("div");

        // versión síncrona (sin fetch)
        const v1 = document.createElement("div");
        v1.innerHTML = "<h3>Versión Síncrona</h3>";
        v1.appendChild(renderTable(alojamientos));

        // versión asíncrona (usando fetch)
        const v2 = document.createElement("div");
        v2.innerHTML = "<h3>Versión Asíncrona</h3>";

        fetching("alojamientos") // <-- tu endpoint real debería existir
            .then(data => {
                v2.appendChild(renderTable(data));
            })
            .catch(err => {
                v2.innerHTML += "<p>Error al obtener datos</p>";
                console.error(err);
            });

        mainContainer.appendChild(v1);
        mainContainer.appendChild(v2);

        return mainContainer;
    };

    return { render };
}

export default createEjercicio4;
*/