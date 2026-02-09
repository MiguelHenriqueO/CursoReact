import Item from './Item'

function Lists () {
    return(
        <div>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Fiat" ano_lancamento={1964}/>
                <Item marca="Renault" ano_lancamento={1920}/>
                <Item marca="Chevrolet" ano_lancamento={1999} />
                <Item />
            </ul>
        </div>
    )
}

export default Lists