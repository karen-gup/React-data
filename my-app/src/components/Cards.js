

export function GridCards ({character }) {


    return (
        <main className="container">{
            character.map(chart => (
                <article key={chart.id} className="card">
                    <div className="img">
                        <img src={chart.image} alt="avatar"/>
                    </div>
                    <div className="info">
                        <h2>{chart.name.toUpperCase()}</h2>
                        <p>{chart.status}-{chart.species}</p>
                        <p>Gender: {chart.gender}</p>
                        <p>Origin: {chart.origin.name}</p>
                        <p>Location: {chart.location.name}</p>
                    </div>
                </article>
            ))
        }</main>
    )
}