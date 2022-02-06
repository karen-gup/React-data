import './styles/Nav.scss'

export function Filter() {



    return (
        <section className="filtersContainer">
            <select name="select" className="filter">
                <option>STATUS</option>
                <option>Alive</option>
                <option>Dead</option>
                <option>Unknown</option>
            </select>
            <select className="filter">
                <option>SPECIES</option>
                <option>Human</option>
                <option>Alien</option>
                <option>Unknown</option>

            </select>
            <select className="filter">
                <option>SORTER</option>
                <option>A - Z</option>
                <option>Z - A</option>
            </select>
        </section>
    )
}