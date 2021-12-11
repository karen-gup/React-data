import { useNavigate } from "react-router-dom"

export function Data () {

    const navigate= useNavigate();
    const handleRoute= () => {
        navigate('/ruta')
    }

    return (
        <div>
            <h1> SOY EL COMPONENTE DATA</h1>
            <button onClick={handleRoute}>Main</button>
        </div>
    )
}