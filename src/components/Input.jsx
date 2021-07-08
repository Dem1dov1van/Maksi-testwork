import React from 'react'

function Input({ label, errorMessage, classNameForInput, type, haveValue, returnValue }) {
    const errorText = 'Invalide Value'
    const [isInvalid, setErrorStyle] = React.useState(false)
    const [inputValue, setInputValue] = React.useState('')
    const isValid = (e) =>{
        haveValue(true)
        setInputValue(e.target.value)
        returnValue(e.target.value)
        // for login
        // if(/^[a-zA-Z]+$/.test(e.target.value) === true){
        //     setErrorStyle(false)
        // }else{
        //     setErrorStyle(true)
        // }
        // for mail
        if(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(e.target.value) === true){
            setErrorStyle(false)
        }else{
            setErrorStyle(true)
        }
        // password ifelse
        // if(e.target.value.length > 5){
        //     setErrorStyle(false)
        // }else{
        //     setErrorStyle(true)
        // }
    }
   return (
    <div className={`${classNameForInput}-wrapper`}>
        <input 
            className={classNameForInput} 
            type={type || 'text'} 
            placeholder={label}
            onChange={isValid}
            value={inputValue}
        />
        {isInvalid && <p className="error-message">{errorMessage || errorText}</p>}
    </div>
   )
}

export default Input