import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextComponent from './components/TextComponent'
import {  SecondText, ThirdText } from './components/OtherComponents';

function App() {
  const [count, setCount] = useState(0)
  const name = "Miguel"


  return (
    <>
      <div>
        <p>Olá {name}</p>
        <p>A soma de 2 + 2 é {2+2}</p>
        <TextComponent/>
        <SecondText/>
        <ThirdText/>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Alterando componente App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
