import createMovieApp from "./components/movieApp"

export default async function createApp() {
  const app= document.getElementById("app")
  const appContainer=await createMovieApp()
  app.appendChild(appContainer)
}
