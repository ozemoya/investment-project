import { useState } from "react";
import {Header} from './components/Header.jsx'
import {UserInput} from './components/UserInput.jsx'
import {Results} from './components/Results.jsx'
function App() {
  const [userInput, setUserInput] = useState({

    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null,  
    });
    const inputIsValid = userInput.duration >= 1;
    const handleChange = (inputIdentifier, value) => {
      setUserInput((prevState) => {
          return {
              ...prevState,
              [inputIdentifier]: +value,
          };
      });
    };
  
  return (
    <>
   
      <Header/>
      <UserInput userInput = {userInput} onChange={handleChange}/>
      {!inputIsValid && <p className = "center">Please enter valid values</p>}
      {inputIsValid && <Results input = {userInput}/>}
    </>
  )
}

export default App
