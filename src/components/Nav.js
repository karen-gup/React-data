import styles from "./Nav.module.css"

export function Filter() {



    return (
        <section className={styles.filtersContainer}>
            <select name="select" className={styles.filter}>
                <option>STATUS</option>
                <option>Alive</option>
                <option>Dead</option>
                <option>Unknown</option>
            </select>
            <select className={styles.filter}>
                <option>SPECIES</option>
                <option>Human</option>
                <option>Alien</option>
                <option>Unknown</option>

            </select>
            <select className={styles.filter}>
                <option>SORTER</option>
                <option>A - Z</option>
                <option>Z - A</option>
            </select>
        </section>
    )
}