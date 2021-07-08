import React from 'react'

function Accept() {

   return (
    <div className="modal__accept">
        <input type="checkbox" id="accept"/>
        <label htmlFor="accept"> Accept <a href="/">terms</a> and <a href="/">conditions</a></label>
    </div>
   )
}

export default Accept