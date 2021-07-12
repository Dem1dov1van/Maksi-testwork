import React from 'react'
import CountryPopup from './CountryPopup';

function Country({ countries, choosenCountry, setCountry, errorMessage, isInvalid }) {

   const [visiblePopup, setVisiblePopup] = React.useState(false)

   return (
      <div className={`modal__select-country select-country ${!visiblePopup ? 'rotate' : ''}`}
         onClick={()=> setVisiblePopup(!visiblePopup)} >
         {choosenCountry ? choosenCountry : 'Select country'}
         <CountryPopup 
            visiblePopup={visiblePopup}
            setCountry={setCountry}
            countries={countries}
         />
         {isInvalid && <p className="error-message">{errorMessage}</p>}
      </div>
   )
}

export default Country
