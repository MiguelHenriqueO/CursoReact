import styles from './Frases.module.css'

function Frase(){
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>este é um componente com frase</p>
        </div>
    )
}

export default Frase