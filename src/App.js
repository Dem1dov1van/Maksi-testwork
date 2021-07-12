import React from 'react'
import './App.css';
import Country from './components/Country';
import Button from './components/Button';
import Input from './components/Input';
import Sex from './components/Sex';
import Accept from './components/Accept';

function App() {
    const countries = ['Latvia', 'Russia', 'Riga', 'America', 'Spain', 'Italy', 'Uganda']
    const [name, setName] = React.useState('')
    const [mail, setMail] = React.useState(null)
    const [pass, setPass] = React.useState(null)
    const [choosenCountry, setCountry] = React.useState(null)
    
    const [radio, setRadio] = React.useState(null)
    const [accept, setAccept] = React.useState(null)

    const [isInvalidName, setInvalidName] = React.useState(false)
    const [isInvalidMail, setInvalidMail] = React.useState(false)
    const [isInvalidPass, setInvalidPass] = React.useState(false)
    const [isInvalidCountry, setInvalidCountry] = React.useState(false)
    const [isInvalidSex, setInvalidSex] = React.useState(false)
    const [isInvalidAccept, setInvalidAccept] = React.useState(false)
    console.log(isInvalidCountry, isInvalidName, isInvalidMail, isInvalidPass, isInvalidAccept);
    const validation = () =>{
      if(/^[a-zA-Z]+$/.test(name) === true){
         setInvalidName(false)
      }else{
         setInvalidName(true)
      }
      if(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(mail) === true){
         setInvalidMail(false)
      }else{
         setInvalidMail(true)
      }
      if(pass && pass.length > 5){
         setInvalidPass(false)
      }else{
         setInvalidPass(true)
      }
      if(radio){
         setInvalidSex(false);
      }else{
         setInvalidSex(true)
      }
      if(choosenCountry){
         setInvalidCountry(false)
      }else{
         setInvalidCountry(true)
      }
      if(accept){
         setInvalidAccept(false)
      }else{
         setInvalidAccept(true)
      }
    }
   const onClickSubmit = () =>{
      validation()
      if(!isInvalidMail && !isInvalidPass && !isInvalidCountry && !isInvalidSex && !isInvalidAccept){
         const userObj = {
            name,
            mail,
            pass,
            country: choosenCountry,
            gender: radio
         }
         console.log(userObj);
      }
   }
  return (
     
    <div className="modal">
      <form action="post">
         <h1 className="modal__title">Create a new account</h1>
         <Input 
            label="Enter your name"
            errorMessage="Please enter a valid name"
            classNameForInput="modal__name-input"
            haveValue={setName}
            isInvalid={isInvalidName}
         />
         <Input 
            label="Mail"
            errorMessage="Please enter a valid email address"
            classNameForInput="modal__mail-input"
            haveValue={setMail}
            isInvalid={isInvalidMail}
         />
         <Input 
            label="Password"
            errorMessage="Password must contain at least 6 symbols"
            classNameForInput="modal__pass-input"
            type='password'
            haveValue={setPass}
            isInvalid={isInvalidPass}
         />
         <Country 
            choosenCountry={choosenCountry}
            setCountry={setCountry}
            countries={countries}
            isInvalid={isInvalidCountry}
            errorMessage="You must select your country"/>
         <Sex 
            errorMessage='You must select the gender'
            isInvalid={isInvalidSex}
            haveValue={setRadio}/>
         <Accept 
            haveValue={setAccept}
            isInvalid={isInvalidAccept}
            errorMessage="You must accept the policies"
            onChange ={setAccept}/>
         <Button 
            onClick={onClickSubmit}
            disabled={name && mail && pass && radio && accept}/>
            
      </form>
   </div>
  );
}

export default App;
