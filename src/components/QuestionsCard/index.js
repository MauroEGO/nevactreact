function QuestionCard({preguntaActual}){
    return(
        <div>
            <span className="tag is-rounded is-info">{preguntaActual.question}</span>
            <br/>
            {  
                preguntaActual.answers.map((opcion)=>(
                    <>
                    <input type="radio" value={opcion.answer}></input>
                    <label><strong>{opcion.answer}</strong></label>
                    <br/>
                    </>
                ))
            }
            <br/>
        </div>
    )
}

export default QuestionCard;