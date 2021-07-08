import React from 'react'

function Sex() {

   return (
    <div className="modal__sex-wrap">
        <p><input type="radio" id="M"  value="Male" name="sex"/>Male</p>
        <p><input type="radio" id="F" value="Female" name="sex"/>Female</p>
    </div>
   )
}

export default Sex