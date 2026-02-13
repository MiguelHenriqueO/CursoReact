import Button from "./Evento/Button"

function Evento() {
    
    function meuEvento(){
        console.log(`Ativando primeiro Evento!`)
    }

    function segundoEvento() {
        console.log(`Ativando segundo Evento`)
    }

    return (
        <div>
            <p>clique para disparar um evento</p>
            <Button event={meuEvento} text="PrimeiroEvento"/>
            <Button event={segundoEvento} text="segundoEvento"/>
            
        </div>
    )
}

export default Evento