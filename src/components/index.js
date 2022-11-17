function Button({text, onClick}){
    return(

        <button onClick={onClick} className='button is-primary is-large'><strong>{text}</strong></button>
    
    )
}

export default Button;