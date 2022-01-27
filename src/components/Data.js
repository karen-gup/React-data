import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Banner } from "./Banner";
import { GridCards } from "./Cards"
import { Filter } from './Nav'
import { Search } from "./Search";
import './styles/data.scss'

export function Data() {
    const [character, setCharacter] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
   // const [hasMore, setHasMore] = useState(true);
    const initialUrl = 'https://rickandmortyapi.com/api/character/?page='+ page;
    
    const getData = (api) => {
        fetch(api)
            .then(response => response.json())
            .then(data => setCharacter(prevCharts => prevCharts.concat(data.results)))
            .catch(error => console.log(error))
    };
    useEffect(() => {
        setIsLoading(true);
        getData(initialUrl)
    }, [page])
    
    return (
        <div>
            <Banner/>
          <section>
            <Search/>
            <Filter/>
          </section>
           <InfiniteScroll
            dataLength={character.length}
            hasMore={true}
            next={() => setPage((prevPage) => prevPage + 1)}
            loader={"loading"}
      >
            <GridCards character={character}/>
           </InfiniteScroll>
        </div>
    )
}