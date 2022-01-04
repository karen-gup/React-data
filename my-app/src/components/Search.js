export function Search () {
    const divStyle = {
        // display: 'flex',
        // justifyContent: 'center',
        margin: '1px',
        border: '4px solid #C9E710',
    }
    const handleRoute = () => {
        console.log('Boton search')
    }
    return (
        <section width={'570px'} style={divStyle}>
        <input placeholder="SEARCH" />
        <button onClick={handleRoute}>Search</button>
        </section>
    )
}