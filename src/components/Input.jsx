import React from 'react'

function Input(props) {
    const { label, classNameForInput, type, onChange, value, errorMessage='Invalide Value', dirty, isValid } = props
    const onChangeHandle = (e) => onChange(e.target.value)
    
   return (
        <div className={`${classNameForInput}-wrapper`}>
            <input 
                className={classNameForInput} 
                type={type || 'text'} 
                placeholder={label}
                value={value}
                onChange={(e)=>onChangeHandle(e)}
            />
            {(dirty && !isValid) && <p className="error-message">{errorMessage}</p>}
        </div>
   )
}

export default Input