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

    const [loading, setLoading] = React.useState(false)

    const [isInvalidName, setInvalidName] = React.useState(false)
    const [isInvalidMail, setInvalidMail] = React.useState(false)
    const [isInvalidPass, setInvalidPass] = React.useState(false)
    const [isInvalidCountry, setInvalidCountry] = React.useState(false)
    const [isInvalidSex, setInvalidSex] = React.useState(false)
    const [isInvalidAccept, setInvalidAccept] = React.useState(false)
    const validation = () =>{
      if(/^[a-zA-Z]+$/.test(name) === true){
         setInvalidName(false)
         console.log('верное имя');
      }else{
         setInvalidName(true)
         console.log('неверное имя');
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
   //  let promise = validation().then(timeOutLoading, console.log('неверные данные'));
    const timeOutLoading = () => {
       console.log(!isInvalidName, !isInvalidMail, !isInvalidPass, !isInvalidCountry, !isInvalidSex, !isInvalidAccept);
      if((!isInvalidMail) && (!isInvalidPass) && (!isInvalidCountry) && (!isInvalidSex) && (!isInvalidAccept)){
         const userObj = {
            name,
            mail,
            pass,
            country: choosenCountry,
            gender: radio
         }
         console.log(userObj);
      }else{
         console.log('неверные данные');
      }
      setLoading(false)
    }
   const onClickSubmit = () =>{
      validation()
      setLoading(true)
      setTimeout(timeOutLoading, 1000)
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
            loading={loading}
            onClick={onClickSubmit}
            disabled={name && mail && pass && radio && accept}/>
            
      </form>
   </div>
  );
}

export default App;
