import { Link } from "react-router-dom";


function Game(){
    return(
        <div className="container">
        <section className="section">
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><Link to="/">inicio</Link></li>
                <li className="is-active"><Link to="/game">juego</Link></li>
            </ul>
        </nav>
        </section>
        </div>
    )
}

export default Game;