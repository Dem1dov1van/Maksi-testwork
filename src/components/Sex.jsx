import React from 'react'

function Sex({ errorMessage, isValid, value, onChange }) {
   return (
    <div className="modal__sex-wrap">
        <p><input type="radio" id="M" onChange={()=>onChange('Male')}  value={value} name="sex"/>Male</p>
        <p><input type="radio" id="F" onChange={()=>onChange('Female')} value={value} name="sex"/>Female</p>
        {isValid && <p className="error-message">{errorMessage}</p>}
    </div>
   )
}

export default Sex