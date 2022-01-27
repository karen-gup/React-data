import styles from "./Search.module.css"
import seekers from "./images/seeker.png"

export function Search () {

    const handleRoute = () => {
        console.log('Boton search')
    }
    return (
        <section className={styles.containerSearch} >
        <div className={styles.contain}>
        <input placeholder="SEARCH" className={styles.search} />
        <button onClick={handleRoute} className={styles.buttonSearch}>
            <img src={seekers} alt="search" className={styles.seeker}/>
        </button>
        </div>
        </section>
    )
}