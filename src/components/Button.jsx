import React from 'react'

function Button({ onClick, disabled }) {
   return (
    <button 
    className={`modal__button ${!disabled ? 'gray' : ''}`} 
    type="button"
    disabled={!disabled}
    onClick={()=>onClick()}
    >Sign up</button>
   )
}

export default Button
