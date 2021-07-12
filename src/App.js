import React from 'react'
import './App.css';
import Select from './components/Select';
import Button from './components/Button';
import Input from './components/Input';
import Sex from './components/Sex';
import Accept from './components/Accept';

function App() {
   const countries = ['Latvia', 'Russia', 'Riga', 'America', 'Spain', 'Italy', 'Uganda']
   const [name, setName] = React.useState()
   const [nameDirty, setNameDirty] = React.useState(false)
   const [isNameValid, setIsNameValid] = React.useState(true)

   const [email, setEmail] = React.useState()
   const [emailDirty, setEmailDirty] = React.useState(false)
   const [isEmailValid, setIsEmailValid] = React.useState(true)
   
   const [password, setPassword] = React.useState()
   const [passwordDirty, setPasswordDirty] = React.useState(false)
   const [isPasswordValid, setIsPasswordValid] = React.useState(true)

   const [country, setCountry] = React.useState(null)
   const [isValidCountry, setIsValidCountry] = React.useState(true)

   const [gender, setGender] = React.useState(null)
   const [genderDirty, setGenderDirty] = React.useState(false)
   const [isGenderValid, setIsGenderValid] = React.useState(true)

   const [accept, setAccept] = React.useState(null)

   const onChangeNameHandler = value => {
      if(/^[a-zA-Z]+$/.test(value)) {
         console.log('name')
         setIsNameValid(true)
      } else {
         setIsNameValid(false)
      }
      setName(value)
      setNameDirty(true)
   }

   const onChangeEmailHandler = value => {
      if(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(value)) {
         setIsEmailValid(true)
      } else {
         setIsEmailValid(false)
      }
      setEmailDirty(true)
      setEmail(value)      
   }

   const onChangePasswordHandler = value => {
      if(value.length >= 6) {
         setIsPasswordValid(true)
      } else {
         setIsPasswordValid(false)
      }
      setPasswordDirty(true)
      setPassword(value)      
   }

   const onSubmitHandler = () => {
      !country && setIsValidCountry(!isValidCountry)
   }

   const onChangeGenderHandler = (val) => {
      setGender(val)
      console.log('val', val)
      setGenderDirty(true)
   }

   const setAcceptHandler = (val) => {
      setAccept(val)
   }


  return (
     
    <div className="modal">
      <form action="post">
         <h1 className="modal__title">Create a new account</h1>
         <Input 
            label="Enter your name"
            errorMessage="Please enter a valid name"
            classNameForInput="modal__name-input"
            onChange={onChangeNameHandler}
            value={name}
            dirty={nameDirty}
            isValid={isNameValid}
         />
         <Input 
            label="Mail"
            errorMessage="Please enter a valid email address"
            classNameForInput="modal__mail-input"
            onChange={onChangeEmailHandler}
            value={email}
            dirty={emailDirty}
            type="email"
            isValid={isEmailValid}
         />
         <Input 
            label="Password"
            errorMessage="Password must contain at least 6 symbols"
            classNameForInput="modal__pass-input"
            onChange={onChangePasswordHandler}
            type='password'
            value={password}
            dirty={passwordDirty}
            type="password"
            isValid={isPasswordValid}
         />
         <Select 
            currentCountry={country}
            setCountry={setCountry}
            countries={countries}
            isValid={isValidCountry}
            errorMessage="You must select your country"/>
         <Sex 
            errorMessage='You must select the gender'
            value={gender}
            onChange={onChangeGenderHandler}   
            isValid={(!isGenderValid && genderDirty)}
         />
         <Accept 
            errorMessage="You must accept the policies"
            onChange ={setAcceptHandler}/>
         <Button 
            onClick={onSubmitHandler}
            disabled={
               !(isNameValid && nameDirty) || 
               !(isEmailValid && emailDirty) ||
               !(isPasswordValid && passwordDirty) ||
               !(isGenderValid && genderDirty) ||
               !(isValidCountry && country) ||
               !(accept !== null)
            }/>
      </form>
   </div>
  );
}

export default App;
