import Button from "../../components/index";
import {useNavigate} from "react-router-dom";

function Home(){

    const navigate=useNavigate();

    const onClickButton=(url)=>{
        navigate(url);
    }

    return(
        <section calssName="hero is-medium is-fullheight">
            <div className="hero-body">
                <div calssName="container has-text-centered">
                    <Button onClick={()=>onClickButton("/game")} text="Mauro"/>
                </div>
            </div>
        </section>
    )
}

export default Home;