import { useNavigate } from "react-router-dom"
import './styles/data.scss'
import {Characters} from "./Characters"

export function Data() {

    const navigate = useNavigate();
    const handleRoute = () => {
        navigate('/ruta')
    }

    return (
        <body>
            <section>
            <input placeholder="SEARCH" />
            <button onClick={handleRoute}>Main</button>
            <br />
            <select>
                <option>STATUS</option>
            </select>
            <select>
                <option>SPECIES</option>
            </select>
            <select>
                <option>SORTER</option>
            </select>
            </section>
                <Characters/>
        </body>
    )
}