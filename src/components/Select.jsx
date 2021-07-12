import React from 'react'
import CountryPopup from './CountryPopup';

function Select({ countries, currentCountry, setCountry, errorMessage, isValid }) {
   const [showOptions, setShowOption] = React.useState(false)

   return (
      <div className="modal__select-country select-country" 
         onClick={()=> setShowOption(!showOptions)} >
         {currentCountry ? currentCountry : 'Select country'}
         <CountryPopup 
            setCountry={setCountry}
            countries={countries}
            showOptions={showOptions}
         />
         {!isValid && <p className="error-message">{errorMessage}</p>}
      </div>
   )
}

export default Select
