import React from 'react'
import CountryPopup from './CountryPopup';

function Country({ countries }) {

   const [chooseCountry, setCountry] = React.useState('Select country')

   const visibleList = () =>{
      let list = document.querySelector('.select-country__list')
      list.classList.toggle('visible')
      let elem = document.querySelector('.select-country')
      elem.classList.toggle('rotate')
   }

   return (
      <div className="modal__select-country select-country" onClick={()=> visibleList()} >
         {chooseCountry}
         <CountryPopup 
            setCountry={setCountry}
            countries={countries}
         />
      </div>
   )
}

export default Country
