import { useState } from "react"
// import styles from "./Search.module.css"
import './styles/Search.scss'
import seekers from "./images/seeker.png"

export function Search () {
    const [search, setSearch] = useState('')

    
    
    const handleRoute = () => {
        console.log('Boton search', search)
    }
    return (
        <section className="containerSearch" >
        <div className="contain">
        <input onChange={(e)=> setSearch(e.target.value)}
            placeholder="SEARCH" className="search" />
        <button onClick={handleRoute} 
            className="buttonSearch">
            <img src={seekers} alt="search" className="seeker"/>
        </button>
        </div>
        </section>
    )
}