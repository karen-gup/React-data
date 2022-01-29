import styles from "./Cards.module.css"
import title from "./images/banner.png"
export function Banner () {
    const divStyle = {
        background: 'black',
        display: 'flex',
        justifyContent: 'center',
    }

    return (
        <header width={100} style={divStyle}>
            <img src={title} alt="Rick and Morty" className={styles.logo}/>
        </header>
    )
}