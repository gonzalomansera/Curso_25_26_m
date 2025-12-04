import createRestaurantApp from "./components/restaurantApp"


export default async function createApp(){
    const app = document.getElementById("app")
    app.appendChild(await createRestaurantApp())
}