import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuestionCard from "../../components/QuestionsCard";

const API_URL = "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter";


function Game(){

    const[loading, setLoading] = useState(true);
    const[questions, setQuestions] = useState([]);

    useEffect(()=> {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setQuestions(data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))

    }, [])
    
    return(
        
        <div className="container">
        <section className="section">
        <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><Link to="/">inicio</Link></li>
                <li className="is-active"><Link to="/game">juego</Link></li>
            </ul>
        </nav>
        {
            loading && (
                <div>Cargando... ... ... .........</div>
            )
        }{    
            !loading && (
                <form>
                {  
                    questions.map((pregunta)=>{
                        return<QuestionCard preguntaActual={pregunta}/>
                    })
                }
               </form>
            )
        }
        </section>
        </div>
    )
}

export default Game;