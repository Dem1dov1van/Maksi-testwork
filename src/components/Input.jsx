import React from 'react'

function Input({ label, classNameForInput, type, haveValue, isInvalid, errorMessage='Invalide value', validation, setInvalid }) {
    const [inputValue, setInputValue] = React.useState('')
    const onChangeHandle = (e) =>{
        haveValue(e.target.value)
        setInputValue(e.target.value)
    }
    const onBlurHandle = () => {
        validation()
    }
   return (
    <div className={`${classNameForInput}-wrapper`}>
        <input 
            className={classNameForInput} 
            type={type || 'text'} 
            placeholder={label}
            value={inputValue}
            onChange={(e)=>onChangeHandle(e)}
            onBlur={onBlurHandle}
            onFocus={()=> setInvalid(false)}
        />
        {isInvalid && <p className="error-message">{errorMessage}</p>}
    </div>
   )
}

export default Input