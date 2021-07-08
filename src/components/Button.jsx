import React from 'react'

function Button({ possibleSubmit }) {
   return (
    // <p className={`paragraph ${!isValid && 'paragraph--error'}`></p>
    <button 
    className={`modal__button ${!possibleSubmit ? 'gray' : ''}`} 
    type="submit"
    disabled={possibleSubmit}
    >Sign up</button>
   )
}

export default Button
