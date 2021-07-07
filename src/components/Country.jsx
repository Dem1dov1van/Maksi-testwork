import React from 'react'

function Country() {

   const countries = ['Latvia', 'Russia', 'Riga', 'America', 'Spain', 'Italy', 'Uganda']

   const [chooseCountry, setCountry] = React.useState(countries[0])

   const visibleList = () =>{
      let list = document.querySelector('.select-country__list')
      list.classList.toggle('visible')
      let elem = document.querySelector('.select-country')
      elem.classList.toggle('rotate')
   }

   return (
      <div className="modal__select-country select-country" onClick={()=> visibleList()} >
         {chooseCountry}
         <ul className='select-country__list'>
            {
            countries.map(((item, index) => {
               return(
                  <li 
                     key={index} 
                     className='select-country__item' 
                     onClick={() =>setCountry(item)}
                  >
                     {item}
                  </li>
               )
            }))
            }
         </ul>
      </div>
   )
}

export default Country
