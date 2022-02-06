import './styles/Cards.scss'
export function GridCards ({character }) {


    return (
        <main className="container">{
            character.map(chart => (
                <article key={chart.id} className="card">
                    <div className="img">
                        <img src={chart.image} alt="avatar" className="img"/>
                    </div>
                    <div className="info">
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