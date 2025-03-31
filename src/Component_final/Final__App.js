import React from 'react';
import './Final__App.css';

const Final__App = () => {
  return (
    <div className='container'>
        {/* Password Text and Copy */}
        <div className="header">
            <div className="title">
                {password}
            </div>
        <Button
        text={copied ? "Copied" : "copy"}
        onClick={handleCopy}
        customClass="copyBtn"
        />
        </div>

        {/* Character Length */}
        <div className="charlength">
       <span>
        <label>Character length</label>
        <label>{length}</label>
       </span>
       <input 
       type="text"
       min="4"
       max="20"
       value={length}
       onChange={(e) => setLength(e.target.value)}
       />
        </div>

        {/* Checkboxes */}
        <div className="checkboxes">
        {checkboxData.map((checkbox, index) => {{
        return (
        <Checkbox 
        key={index}
        title={checkbox.title}
        onChange={() => handleCheckboxChange(index)}
        state={checkbox.state}
        />
        );
        }})}
        </div>


     {/* Strength */}
    <PasswordStrengthIndicator password={password} />

    {/* Error Handling */}
    {errorMessage && <div className='errorMessage'>
    {errorMessage}    
    </div>}

    {/* Generate Button */}
    <Button 
    text="Generate Password"
    onClick={() => generatePassword(checkboxData, length)}
    customClass="generateBtn"
    />
    </div>
  );
}

export default Final__App