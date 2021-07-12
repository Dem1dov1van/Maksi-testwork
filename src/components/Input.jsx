import React from 'react'

function Input({ label, classNameForInput, type, haveValue, isInvalid, errorMessage='Invalide Value' }) {
    const [inputValue, setInputValue] = React.useState('')
    const onChangeHandle = (e) =>{
        haveValue(e.target.value)
        setInputValue(e.target.value)
    }
   return (
    <div className={`${classNameForInput}-wrapper`}>
        <input 
            className={classNameForInput} 
            type={type || 'text'} 
            placeholder={label}
            value={inputValue}
            onChange={(e)=>onChangeHandle(e)}
        />
        {isInvalid && <p className="error-message">{errorMessage}</p>}
    </div>
   )
}

export default Input