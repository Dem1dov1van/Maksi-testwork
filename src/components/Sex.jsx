import React from 'react'

function Sex({ errorMessage, isInvalid, haveValue }) {
   return (
    <div className="modal__sex-wrap">
        <p><input type="radio" id="M" onChange={()=>haveValue('Male')}  value="Male" name="sex"/>Male</p>
        <p><input type="radio" id="F" onChange={()=>haveValue('Female')} value="Female" name="sex"/>Female</p>
        {isInvalid && <p className="error-message">{errorMessage}</p>}
    </div>
   )
}

export default Sex