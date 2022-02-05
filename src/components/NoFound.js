import { Banner } from "./Banner";
import img from "./images/NoFound.png"
import "./styles/noFound.scss"

export function NoFound (){
    return ( <main>
        <Banner/>
        <section className="section-noFound">
        <img src={img} alt="rick" className="img-noFound"/>
        <article className="conteiner-text">
        <p>PAGE NO FOUND</p>
        <p>ERROR 404</p>
        </article>
        </section>
    </main>

    )
}