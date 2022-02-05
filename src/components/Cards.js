import styles from "./Cards.module.css"

export function GridCards ({character }) {


    return (
        <main className={styles.container}>{
            character.map(chart => (
                <article key={chart.id} className={styles.card}>
                    <div className={styles.img}>
                        <img src={chart.image} alt="avatar" className={styles.img}/>
                    </div>
                    <div className={styles.info}>
                        <h2> {chart.name.toUpperCase()}</h2>
                        <p> <span className="status"> </span>
                            {chart.status} - {chart.species}</p>
                        <p>Gender: {chart.gender}</p>
                        <p>Origin: {chart.origin.name}</p>
                        <p>Location: {chart.location.name}</p>
                    </div>
                </article>
            ))
        }</main>
    )
}