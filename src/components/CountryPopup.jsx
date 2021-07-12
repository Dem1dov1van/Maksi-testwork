import React from 'react'

function CountryPopup({ countries, setCountry, visiblePopup}) {
return(<>
        {visiblePopup && (<ul className='select-country__list visible'>
            {countries && countries.map((item, index)=>{
                return(
                    <li
                        key={index} 
                        className='select-country__item' 
                        onClick={() => setCountry(item)}
                    >
                        {item}
                    </li>
                )
            })}
        </ul>)}
    </>
)
   
}


export default CountryPopup