import './App.css';
import HelloWorld from './components/HelloWorld'

function App() {

  const name = 'Miguel'

  function sum(a, b){
    return a + b
  }

  const url = "https://i.pinimg.com/736x/46/4c/13/464c130a8e3379194a0d1aec4a4397c3.jpg"

  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Olá, {name}</p>
      <p>soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha Imagem"/>
      <HelloWorld/>
      
    </div>
  );
}

export default App;
