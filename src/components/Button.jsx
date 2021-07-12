import React from 'react'

function Button({ possibleSubmit, onClick }) {
   return (
    // <p className={`paragraph ${!isValid && 'paragraph--error'}`></p>
    <button 
    className={`modal__button ${!possibleSubmit ? 'gray' : ''}`} 
    type="button"
   //  disabled={possibleSubmit}
    onClick={()=>onClick()}
    >Sign up</button>
   )
}

export default Button
