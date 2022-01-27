import styles from "./Nav.module.css"

export function Filter() {



    return (
        <section className={styles.filtersContainer}>
            <select className={styles.filter}>
                <option >STATUS</option>
            </select>
            <select className={styles.filter}>
                <option>SPECIES</option>
            </select>
            <select className={styles.filter}>
                <option>SORTER</option>
            </select>
        </section>
    )
}