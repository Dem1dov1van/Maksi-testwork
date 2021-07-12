import React from 'react'
import CountryPopup from './CountryPopup';

function Country({ countries, choosenCountry, setCountry, errorMessage, isInvalid }) {

   

   const visibleList = () =>{
      let list = document.querySelector('.select-country__list')
      list.classList.toggle('visible')
      let elem = document.querySelector('.select-country')
      elem.classList.toggle('rotate')
   }

   return (
      <div className="modal__select-country select-country" 
         onClick={()=> visibleList()} >
         {choosenCountry ? choosenCountry : 'Select country'}
         <CountryPopup 
            setCountry={setCountry}
            countries={countries}
         />
         {isInvalid && <p className="error-message">{errorMessage}</p>}
      </div>
   )
}

export default Country
