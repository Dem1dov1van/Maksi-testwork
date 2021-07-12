import React from 'react'

function Button({ onClick, disabled, loading }) {

   

   return (<>
   <button 
    className={`modal__button ${!disabled ? 'gray' : ''}`} 
    type="button"
    disabled={!disabled}
    onClick={()=>onClick()}
    >{loading ? <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>: 'Sign up'}</button>
   </>)
}

export default Button
