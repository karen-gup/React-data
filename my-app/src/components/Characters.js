
import { useEffect, useState } from "react";

export function Characters() {
    const [character, setCharacter] = useState([])
    useEffect(() => {
        console.log('useEffect')
        getData()
    }, [])

    const getData = async () => {
        const data = await fetch('https://rickandmortyapi.com/api/character')
        const chart = await data.json()
        setCharacter(chart.results)
        console.log(chart.results)
    }




    return (
        <main>{
            character.map(chart => (
                <article key={chart.id}>
                    <div>
                        <img src={chart.image} alt="avatar" />
                    </div>
                    <div>
                        <h2>{chart.name.toUpperCase()}</h2>
                        <p>{chart.status}-{chart.species}</p>
                        <p>{chart.gender}</p>
                        <p>{chart.origin.name}</p>
                        <p>{chart.location.name}</p>
                    </div>
                </article>
            ))
        }</main>
    )
}