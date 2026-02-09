function Pessoa({Nome, Idade, Profissao, Foto}){

    return(
        <div>
            <img src={Foto} alt={Nome}/>
            <h2>Nome: {Nome} </h2>
            <p>Idade {Idade}</p>
            <p>Profissão: {Profissao}</p>
        </div>
    )
}

export default Pessoa