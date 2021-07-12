import React from 'react'

function Button({ onClick, disabled, isLoading }) {

   console.log(isLoading)
   return (
    <button 
    className={`modal__button ${disabled ? 'gray' : ''}`} 
    type="button"
    disabled={disabled}
    onClick={()=>onClick()}
    > {isLoading ? 'Загрузка....' : 'Sign up'}</button>
   )
}

export default Button
