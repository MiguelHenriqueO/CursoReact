import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = 'Maria'

  return (
    <div className="App">
      <Pessoa 
      nome="Miguel" 
      idade="20" 
      profissao="Dev" 
      foto="https://via.placeholder.com/150"/>

    </div>
  );
}

export default App;
