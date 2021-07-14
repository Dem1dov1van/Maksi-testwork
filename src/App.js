import React from 'react'
import './App.css';
import Select from './components/Select';
import Button from './components/Button';
import Input from './components/Input';
import Sex from './components/Sex';
import Accept from './components/Accept';

function App() {
    const countries = ['Latvia', 'Russia', 'Riga', 'America', 'Spain', 'Italy', 'Uganda']

    const [name, setName] = React.useState(null)
    const [mail, setMail] = React.useState(null)
    const [pass, setPass] = React.useState(null)
    const [choosenCountry, setCountry] = React.useState(null)
    const [radio, setRadio] = React.useState(null)
    const [accept, setAccept] = React.useState(null)

    const [loading, setLoading] = React.useState(false)

    const [isInvalidName, setInvalidName] = React.useState(false)
    const [isInvalidMail, setInvalidMail] = React.useState(false)
    const [isInvalidPass, setInvalidPass] = React.useState(false)
    const [isInvalidCountry, setInvalidCountry] = React.useState(false)
    const [isInvalidSex, setInvalidSex] = React.useState(false)
    const [isInvalidAccept, setInvalidAccept] = React.useState(false)

   const validationName = () => {
      if(/^[a-zA-Z]+$/.test(name) === true){
         setInvalidName(false)
      }else{
         setInvalidName(true)
      }
   }
   const validationMail = () => {
      if(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(mail) === true){
         setInvalidMail(false)
      }else{
         setInvalidMail(true)
      }
   }
   const validationPass = () => {
      if(pass && pass.length > 5){
         setInvalidPass(false)
      }else{
         setInvalidPass(true)
      }
   }
   const createObj = () => {
      const userObj = {
         name,
         mail,
         pass,
         country: choosenCountry,
         gender: radio
      }
      console.log(userObj);
      setLoading(false)
   }
   const onClickSubmit = () =>{
      if((!isInvalidMail) && (!isInvalidPass) && choosenCountry && (!isInvalidSex) && (!isInvalidAccept) && (!isInvalidName)){
         setLoading(true)
         setTimeout(createObj, 10000)
      }else{
         if(!choosenCountry){
            setInvalidCountry(true)
         }
         console.log('Данные не корректны');
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
            setInvalid={setInvalidName}
            isInvalid={isInvalidName}
            validation={validationName}
         />
         <Input 
            label="Mail"
            errorMessage="Please enter a valid email address"
            classNameForInput="modal__mail-input"
            haveValue={setMail}
            isInvalid={isInvalidMail}
            setInvalid={setInvalidMail}
            validation={validationMail}
         />
         <Input 
            label="Password"
            errorMessage="Password must contain at least 6 symbols"
            classNameForInput="modal__pass-input"
            type='password'
            haveValue={setPass}
            isInvalid={isInvalidPass}
            setInvalid={setInvalidPass}
            validation={validationPass}
         />
         <Select 
            errorMessage="You must select your country"
            choosenCountry={choosenCountry}
            setCountry={setCountry}
            countries={countries}
            isInvalid={isInvalidCountry}
            setInvalid={setInvalidCountry}
         />
         <Sex 
            errorMessage='You must select the gender'
            isInvalid={isInvalidSex}
            haveValue={setRadio}/>
         <Accept 
            errorMessage="You must accept the policies"
            haveValue={setAccept}
            isInvalid={isInvalidAccept}
            onChange ={setAccept}/>
         <Button 
            loading={loading}
            onClick={onClickSubmit}
            disabled={name && mail && pass && radio && accept}/>
      </form>
   </div>
  );
}

export default App;
