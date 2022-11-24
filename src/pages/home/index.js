import Button from "../../components/index";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import fondo1 from "../../assets/fondo1.png";
import fondo2 from "../../assets/fondo2.png";

function Home(){

    const navigate=useNavigate();

    const onClickButton=(url)=>{
        navigate(url);
    }

    const [changeBackground, setChangebackgrond]=useState(fondo1)

    return(
        <section className="hero is-medium is-fullheight" style={{backgroundImage:`url(${changeBackground})`, backgroundSize:"cover"}} >
            <div className="hero-body">
                <div className="container has-text-centered">
                    <Button onClick={()=>onClickButton("/game")} text="Juego"/>
                    <br/>
                    <br/>
                    <button onClick={()=>setChangebackgrond(fondo2)} className='button is-primary is-large'>Fondo 2</button>
                </div>
            </div>
        </section>
    )
}

export default Home;