import logo from './logo.svg';
import './App.css';
import Country from './components/Country';

function App() {
  return (
    <div className="modal">
      <form action="post">
         <h1 className="modal__title">Create a new account</h1>
         <div className="modal__name-input-wrapper">
          <input className="modal__name-input" type="text" placeholder="Enter your name"/>
          </div>
         <div className="modal__mail-input-wrapper">
         <input className="modal__mail-input" type="text" placeholder="Email"/>
         </div>
         <div className="modal__pass-input-wrapper">
         <input className="modal__pass-input" type="password" placeholder="Password"/>
         </div>
         <Country />
         <div className="modal__sex-wrap">
            <p><input type="radio" id="M"  value="Male" name="sex"/>Male</p>
            <p><input type="radio" id="F" value="Female" name="sex"/>Female</p>
         </div>
         <div className="modal__accept">
            <input type="checkbox" id="accept"/>
            <label for="accept"> Accept <a href="/">terms</a> and <a href="/">conditions</a></label>
         </div>
         <button className="modal__button" type="submit">Sign up</button>
      </form>
   </div>
  );
}

export default App;
