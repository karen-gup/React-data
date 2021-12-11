import { useNavigate } from "react-router-dom"

export function Main () {
    const navigate= useNavigate();
    const handleRoute= () => {
        navigate('/')
    }
    return (
        <div>
            <h1>SOY EL COMPONENTE MAIN</h1>
            <button onClick={handleRoute}>Data</button>
        </div>
    )
}