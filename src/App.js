import React from 'react'
import './App.css';
import Country from './components/Country';
import Button from './components/Button';
import Input from './components/Input';
import Sex from './components/Sex';
import Accept from './components/Accept';

function App() {
    const countries = ['Latvia', 'Russia', 'Riga', 'America', 'Spain', 'Italy', 'Uganda']
    const [possibleSubmit, setPossibleSubmit] = React.useState(false)
    const [haveName, setHaveName] = React.useState(false)
    const [haveMail, setHaveMail] = React.useState(false)
    const [havePass, setHavePass] = React.useState(false)
    const undisableButton = () => {
       if(haveName && haveMail && havePass){
          setPossibleSubmit(true)
       }
    }
    const returnValue=(a)=>{
       console.log(a);
       return a
    }
  return (
     
    <div className="modal">
      <form action="post">
         <h1 className="modal__title">Create a new account</h1>
         <Input 
            label="Enter your name"
            errorMessage="Please enter a valid email address"
            classNameForInput="modal__name-input"
            haveValue={setHaveName}
            returnValue={returnValue}
         />
         <Input 
            label="Mail"
            errorMessage="Please enter a valid name"
            classNameForInput="modal__mail-input"
            haveValue={setHaveMail}
            returnValue={returnValue}
         />
         <Input 
            label="Password"
            errorMessage="Password must contain at least 6 symbols"
            classNameForInput="modal__pass-input"
            type='password'
            haveValue={setHavePass}
         />
         <Country countries={countries}/>
         <Sex />
         <Accept />
         <Button possibleSubmit={possibleSubmit}/>
      </form>
   </div>
  );
}

export default App;
