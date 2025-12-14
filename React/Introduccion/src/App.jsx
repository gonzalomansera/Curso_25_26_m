import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Padre } from './components/Padre'
import { Hijo } from './components/Hijo'
import { Card } from './components/Card'

function App() {
  // Hooks 
  //const [count, setCount] = useState(0)
  const [like, setLike] = useState("🤍")
  let [star, setStar] = useState("⭐")

  //Funciones 
  const handleToggleLike = () => {
    like ==="🤍" ? setLike("♥️"): setLike("🤍")
  }
  const handleToggleStar = () =>{
    if(star.length<=4){
      setStar(star+"⭐")
    }else{
      setStar("Game Over")
    }
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={(handleToggleStar)}>
          {star}
        </button>
        <button onClick={(handleToggleLike)}>
          {like}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        <Padre saludo= "Hola mundo" nombre="Gonzalo" edad={20} datos={ {edad:45 , isRoot:false} }>
          <Hijo />
        </Padre>
        <Card imagen="alex.png" text="Que guapo alex"> 
        </Card>
        <Card imagen="angel.png" text="Que guapo angel">
        </Card> 

      </p>
    </>
  )
}

export default App
