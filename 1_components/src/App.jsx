import './App.css'
import TextComponent from './components/TextComponent'
import {  SecondText, ThirdText } from './components/OtherComponents';
import Events from './components/events';
import MyCSSComponent from './components/MyCSSComponent/MyCSSComponent';


function App() {


  return (
    <>

      <h2>Meu componente Css</h2>
      <MyCSSComponent></MyCSSComponent>

      <h2>Eventos</h2>
      <Events></Events>

      <TextComponent text="Meu Primeiro Texto" description="descrição do primeiro texto"/>
      <TextComponent text="Meu Segundo Texto" description="descrição do segundo texto"/>
      <TextComponent text="Meu Terceiro Texto" description="descrição do terceiro texto"/>
      <SecondText/>
      <ThirdText/>
        
    </>
  )
}

export default App
