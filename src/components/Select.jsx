import React from 'react'
import CountryPopup from './CountryPopup';

function Select({ countries, choosenCountry, setCountry, errorMessage, isInvalid, setInvalid }) {

   const onClickHandler =()=>{
      setVisiblePopup(!visiblePopup)
      setInvalid(false)
   }
   const [visiblePopup, setVisiblePopup] = React.useState(false)
   
   return (
      <div className={`modal__select-country select-country ${!visiblePopup ? 'rotate' : ''}`}
         onClick={onClickHandler} >
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

export default Select
