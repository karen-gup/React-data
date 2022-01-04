import { useEffect, useState } from "react";
import { Banner } from "./Banner";
import { GridCards } from "./Cards"
import { Nav } from './nav'
import { Search } from "./Search";
import './styles/data.scss'

export function Data() {

    const [character, setCharacter] = useState([])
    const initialUrl = 'https://rickandmortyapi.com/api/character';
    


    const getData = (api) => {
        fetch(api)
            .then(response => response.json())
            .then(data => setCharacter(data.results))
            .catch(error => console.log(error))
    };
    useEffect(() => {
        getData(initialUrl)
    }, [])



    return (
        <div>
            <Banner/>
          <section>
            <Search/>
            <Nav />
          </section>
            <GridCards character={character}/>
        </div>
    )
}