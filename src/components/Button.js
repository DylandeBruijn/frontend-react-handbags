const Button = ({buttonHandler, isButtonDisabled, buttonText}) => {
    return (
        <button 
            onClick={buttonHandler}
            disabled={isButtonDisabled}
            >{buttonText}</button>    
    )
}

export default Button;