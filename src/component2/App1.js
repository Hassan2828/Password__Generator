import React, { useState } from 'react';
import './style.css';
import usePasswordGenerator from './user-password-generator';
import Button from './Button';

const App1 = () => {
const [Length, setLength] = useState(4);
const [checkboxData, setCheckboxData] = useState([
  {title : "Include Uppercase Letters", state : false},
    {title : "Include Lowercase Letters", state : false},
    {title : "Include Numbers", state : false},
    {title : "Include Symbols", state : false}
]);

const [copied, setCopied] = useState(false);

   const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i];
    setCheckboxData(updatedCheckboxData);
   };

   const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
     setCopied(false);
    }, 1000);

   };

   const {password,errorMessage, generatePassword} = usePasswordGenerator();



  return(
    <div className='container'>
        {/* Password Text and Copy */}
        <div className="header">
            <div className="title">{password}</div>
        <Button text={copied ? "Copied":"copy"} customClass="copyBtn" onClick={handleCopy} />
        </div>

        {/* Character Length */}
        <div className="charLength">
          <span>
          <label>Character Length</label>
          <label>{Length}</label>
          </span>
          <input 
          type="range"
          min='4'
          max='20'
          value={Length}
          onChange={(e) => setLength(e.target.value)}
          />
        </div>

        {/* Checkboxes */}
      <div className="checkboxes">
        {checkboxData.map((checkbox,index) =>{
        return (
         <div key={index}>
        <input 
        type="checkbox" 
        onChange={() => handleCheckboxChange(index)} checked={checkbox.state} />
        <label>{checkbox.title}</label>
        </div>
        );
        })}
      </div>

      {/* Strength */}
      <PasswordStrengthIndicator password={password} />

    {/* Error Handling */}
     {errorMessage && <div className='errorMessage'>{errorMessage}</div>} 


      {/* Generate Button */}
      <button 
      className='generateBtn' ></button>

      <Button
      text="GENERATE PASSWORD"
      onClick={() => generatePassword(checkboxData, length)}
      customClass="generateBtn"
      />
    </div>
  ) 
}

export default App1 