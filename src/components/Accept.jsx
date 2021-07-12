import React from 'react'

function Accept({ onChange, errorMessage, isValid = true }) {

   return (
    <div className="modal__accept">
        <input type="checkbox" id="accept" onChange={(e)=>onChange(e.target.checked)} />
        <label htmlFor="accept"> Accept <a href="/">terms</a> and <a href="/">conditions</a></label>
        {!isValid && <p className="error-message">{errorMessage}</p>}
    </div>
   )
}

export default Accept